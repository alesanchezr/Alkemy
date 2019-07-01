import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { Context } from "../store/appContext.js"
import { addJS, fluidImageSmall } from "../utils/utils.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { FormGroup, Label, Col, Row, Container } from "reactstrap"
import FreeWebsiteAnalysis from "../components/freeWebsiteAnalysis.jsx"
import Select from "react-select"

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

class BlogPostTemplate extends React.Component {
  constructor(){
    super()

    this.state = {
      dropdown: ''
    }
    
    this.categorySelect = React.createRef()
  }

  handleDropdownChange = (value,actions)=>{
    this.setState({dropdown: value})

    // reset the search in store
    actions.search("")
    actions.searchTitle("")

    // redirect user to /alkemy-blog/ or /alkemy-blog/?cat=<:name> if other than home
    if (value.label.toLowerCase() === "blog home") {
        navigate("/alkemy-blog/")
    } else {
        // let category = value.label.replace(/\s/g, "+") // sanitize the name for use in url
        navigate(`/alkemy-blog/`, { state: {value} })
        // navigate(`/alkemy-blog/?cat=${category}`,{queryParam: category})
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const pageTitle = "Alkemy Blog"
    const edges = this.props.data.allMarkdownRemark.edges

    let blogCategories = (jump = false) => {
        // create a categories array
        let categories =
            edges &&
            edges.map(e => {
                return e.node.frontmatter.category
            })
        categories = _.uniq(categories)

        // aux array
        let categoryArray = []

        // if it's the Jump to menu, push in a home case
        jump && categoryArray.push({ label: "Blog Home", value: "Blog Home" })

        // loop the category array and push in pairs to aux
        for (let i in categories) {
            categoryArray.push({ label: categories[i], value: categories[i] })
        }

        return categoryArray
    }

    // addJS(position,inner script,source) - adds JS to document dynamically for AddThis Toolbar
    addJS(
        `body`,
        null,
        `//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ae21853f0b21631`
    )

    return (
        <Layout
            location={this.props.location}
            title={siteTitle}
            headerTitle={[true, pageTitle]}
            search={true}
            bodyClasses="blog"
            renderHeaderSolid={true}
        >
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <Container fluid className="px-5">
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
                                    {({actions})=>
                                      (
                                        <Select
                                          className="category-select"
                                          classNamePrefix="select"
                                          placeholder="Select a value..."
                                          name="categories"
                                          options={blogCategories(true)}
                                          ref={this.categorySelect}
                                          value={this.state.dropdown}
                                          onChange={value =>
                                              this.handleDropdownChange(
                                                  value,
                                                  actions
                                              )
                                          }
                                        />
                                      )
                                    }
                                  </Context.Consumer>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </section>
                <section className="blog-single-post-info">
                    <Row>
                        <Col>
                            <h1>{post.frontmatter.title}</h1>
                            <p>{post.frontmatter.date}</p>
                        </Col>
                        <Col>
                            <Img
                                className="h-100"
                                fluid={
                                    post.frontmatter.cover.childImageSharp.fluid
                                }
                                alt="Alkemy is always the best fit for your business and digital presence."
                            />
                        </Col>
                    </Row>
                </section>

                <section
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    className="blog-single-post"
                />
            </Container>
            <hr
                style={{
                    marginBottom: rhythm(1),
                }}
            />
            <Container fluid className="px-4">
                <ul
                    className="blog-single-post-nav"
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
        </Layout>
    )
  }
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        author
        authorURL
        category
        readingTime
        tags
        excerpt
        cover {
          ...fluidImageSmall
        }
      }
    }
    allMarkdownRemark{
      edges {
        node {
          frontmatter {
          category
          }
        }
      }
    }
  }
`
