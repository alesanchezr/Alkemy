import React from "react";
import { Link, graphql, navigate } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import Img from "gatsby-image";
import { Context } from "../store/appContext.js";
import { addJS, fluidImageSmall, fluidImageXS } from "../utils/utils.js";
import Layout from "../components/layout";
import _ from "lodash";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import { FormGroup, Label, Col, Row, Container, Button } from "reactstrap";
import FreeWebsiteAnalysis from "../components/freeWebsiteAnalysis.jsx";
import Select from "react-select";
import BlogInfoBar from "../components/BlogInfoBar.jsx";
import FloatingTitleBar from "../components/FloatingTitleBar.js";
import SocialLinks from "../components/SocialLinks.jsx";
import PropTypes from "prop-types";

/*
Layout props:
  renderHeaderSolid: Whether the top navigation should be solid or start transparent
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        string (subheader text)
      ]
  bodyClasses: additional classes to add to body tag
*/

const components = {
    Button,
    Link,
    Col,
    Row,
    Container,
    Img,
    SocialLinks,
};

class BlogPostTemplate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: "",
        };

        this.categorySelect = React.createRef();
        this.contentSection = React.createRef();
    }

    handleDropdownChange = (value, actions) => {
        this.setState({ dropdown: value });

        // reset the search in store
        actions.search("");
        actions.searchTitle("");

        // redirect user to /alkemy-blog/ or /alkemy-blog/?cat=<:name> if other than home
        if (value.label.toLowerCase() === "blog home") {
            navigate("/alkemy-blog/");
        } else {
            // let category = value.label.replace(/\s/g, "+") // sanitize the name for use in url
            navigate(`/alkemy-blog/`, { state: { value } });
            // navigate(`/alkemy-blog/?cat=${category}`,{queryParam: category})
        }
    };

    render() {
        const data = this.props.data;
        const post = data.mdx;
        const siteTitle = data.site.siteMetadata.title;
        const { previous, next } = this.props.pageContext;

        const pageTitle = { name: "Alkemy Blog", url: "/alkemy-blog" };
        const edges = data.allMdx.edges;
        const author =
            data.allAuthorsJson.edges[0] && data.allAuthorsJson.edges[0].node;

        let blogCategories = (jump = false) => {
            // create a categories array
            let categories =
                edges &&
                edges.map(e => {
                    return e.node.frontmatter.category;
                });
            categories = _.uniq(categories);

            // aux array
            let categoryArray = [];

            // if it's the Jump to menu, push in a home case
            jump &&
                categoryArray.push({ label: "Blog Home", value: "Blog Home" });

            // loop the category array and push in pairs to aux
            for (let i in categories) {
                categoryArray.push({
                    label: categories[i],
                    value: categories[i],
                });
            }

            return categoryArray;
        };

        // addJS(position,inner script,source) - adds JS to document dynamically for AddThis Toolbar
        addJS(
            `body`,
            null,
            `//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ae21853f0b21631`
        );

        return (
            <Layout
                location={this.props.location}
                title={siteTitle}
                headerTitle={[true, pageTitle]}
                search={true}
                bodyClasses="blog-single-page"
                renderHeaderSolid={true}
            >
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                    date={post.frontmatter.date}
                    author={post.frontmatter.author}
                />
                <Container fluid className="blog-single mb-5">
                    <section className="blog-category-filter my-3">
                        <Row className="align-items-center h-100">
                            <Col md={8} className="d-none d-md-block" />
                            <Col xs={12} sm={4}>
                                {/* Category Dropdown */}
                                <FormGroup row className="align-items-center">
                                    <Label
                                        for="categories"
                                        xs={3}
                                        className="text-right text-muted"
                                    >
                                        Jump to:
                                    </Label>
                                    <Col xs={9}>
                                        <Context.Consumer>
                                            {({ actions }) => (
                                                <Select
                                                    className="category-select"
                                                    classNamePrefix="select"
                                                    placeholder="Select a value..."
                                                    name="categories"
                                                    options={blogCategories(
                                                        true
                                                    )}
                                                    ref={this.categorySelect}
                                                    value={this.state.dropdown}
                                                    onChange={value =>
                                                        this.handleDropdownChange(
                                                            value,
                                                            actions
                                                        )
                                                    }
                                                />
                                            )}
                                        </Context.Consumer>
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                    </section>
                    <section className="blog-single-post-info">
                        <Row>
                            <Col xs={12} md={6}>
                                <h2>{post.frontmatter.title}</h2>
                                <Row className="my-4">
                                    <Col md={6}>
                                        <BlogInfoBar
                                            category={post.frontmatter.category}
                                            time={post.frontmatter.readingTime}
                                            layout="horizontal"
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col
                                        xs={12}
                                        md={4}
                                        className="mb-5 mb-md-0"
                                    >
                                        <Img
                                            className="h-100"
                                            fluid={
                                                author.photo.childImageSharp
                                                    .fluid
                                            }
                                            alt={"Photo of " + author.name}
                                        />
                                        <Link to={"/author" + author.slug}>
                                            View My Profile...
                                        </Link>
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <h3>{author.name}</h3>
                                        <p>{author.bio}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col
                                xs={12}
                                md={6}
                                className="mb-5 mb-md-0 order-first order-md-last"
                            >
                                <Img
                                    className="h-100"
                                    fluid={
                                        post.frontmatter.cover.childImageSharp
                                            .fluid
                                    }
                                    alt={post.frontmatter.title}
                                />
                            </Col>
                        </Row>
                    </section>
                </Container>

                <FloatingTitleBar
                    title={post.frontmatter.title}
                    category={post.frontmatter.category}
                    time={post.frontmatter.readingTime}
                />

                <Container className="my-5">
                    <MDXProvider components={components}>
                        <MDXRenderer>{post.code.body}</MDXRenderer>
                    </MDXProvider>
                </Container>
                <hr
                    style={{
                        marginBottom: rhythm(1),
                    }}
                />
                <Container fluid className="blog-single-post-nav">
                    <ul
                        className="blog-single-post-nav-ul ml-0"
                        style={{
                            display: `flex`,
                            flexWrap: `wrap`,
                            justifyContent: `space-between`,
                            listStyle: `none`,
                            padding: 0,
                        }}
                    >
                        <li className="blog-single-post-nav-previous">
                            {previous && (
                                <Link to={previous.fields.slug} rel="prev">
                                    ← {previous.frontmatter.title}
                                </Link>
                            )}
                        </li>
                        <li className="blog-single-post-nav-next">
                            {next && (
                                <Link to={next.fields.slug} rel="next">
                                    {next.frontmatter.title} →
                                </Link>
                            )}
                        </li>
                    </ul>
                </Container>
                <FreeWebsiteAnalysis />
            </Layout>
        );
    }
}

BlogPostTemplate.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default BlogPostTemplate;

export const query = graphql`
    query BlogPostQuery($slug: String!, $author: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        mdx(fields: { slug: { eq: $slug } }) {
            code {
                body
            }
            frontmatter {
                title
                date(formatString: "MMMM, DD, YYYY")
                author
                category
                readingTime
                tags
                excerpt
                cover {
                    ...fluidImageSmall
                }
            }
        }
        allMdx {
            edges {
                node {
                    frontmatter {
                        category
                    }
                }
            }
        }
        allAuthorsJson(filter: { name: { regex: $author } }) {
            edges {
                node {
                    name
                    slug
                    bio
                    photo {
                        ...fluidImageXS
                    }
                }
            }
        }
    }
`;
