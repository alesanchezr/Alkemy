import React,{useState} from "react"
import _ from "lodash"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Context } from "../store/appContext.js"
import { addJS, fluidImageSmall } from "../utils/utils.js"
import Layout from "../components/layout"
import ScrollWrapper from "../components/scrollWrapper.jsx"
import { Button, Col, Row } from "reactstrap"
import FreeWebsiteAnalysis from "../components/freeWebsiteAnalysis.jsx"
import SEO from "../components/seo"
import CustomSelect from "../components/CustomSelect.jsx"
import BlogInfoBar from "../components/BlogInfoBar.jsx"
import RecentBlogs from "../components/RecentBlogs.jsx"
import LatestFromCategory from "../components/LatestFromCategory.jsx"


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

// eslint-disable-next-line
const AlkemyBlog = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    // pageTitle: SEO friendly title for the title bar
    const pageTitle = "Alkemy Blog"
    // define state hook for category dropdown
    const [dropdown, setDropdown] = useState("")

    // addJS(position,inner script,source) - adds JS to document dynamically for AddThis Toolbar
    addJS(
        `body`,
        null,
        `//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ae21853f0b21631`
    )

    let createBlogArray = (arr) => {
        let blogArray = arr.map(e=>e)
        blogArray.length > 1 && blogArray.shift()
        return blogArray
    }

    let blogCategories = () => {
        let categories =
            edges && edges.map(e => {
                return e.node.frontmatter.category
            })
        categories = _.uniq(categories)
        let labels = []
        for (let i = 0; i < categories.length; i++) {
            labels.push({ label: categories[i] })
        }
        return labels
    }

    const renderView = ()=>{
        let blogs = edges.map(e=>e).filter(e=>{
            if (dropdown.length > 0) {
                return e.node.frontmatter.category === dropdown
            } else return e
        })

        return (
            <>
                {_.isEqual(_.sortBy(blogs), _.sortBy(edges)) ? (
                    <section className="blog-featured position-relative px-5">
                        <Row className="h-100 align-items-center">
                            <Col xs={12} md={6} className="h-100 pr-5">
                                <h2>{blogs[0].node.frontmatter.title}</h2>
                                <p className="my-4">
                                    {blogs[0].node.frontmatter.excerpt}
                                </p>
                                <BlogInfoBar
                                    category={
                                        blogs[0].node.frontmatter.category
                                    }
                                    time={blogs[0].node.frontmatter.readingTime}
                                    author={blogs[0].node.frontmatter.author}
                                    layout="horizontal"
                                    className="my-4"
                                />
                                <Button
                                    to={blogs[0].node.frontmatter.path}
                                    tag={Link}
                                    color="primary"
                                    className="my-4"
                                    block
                                >
                                    Read Full Post
                                </Button>
                            </Col>
                            <Col
                                xs={12}
                                md={6}
                                className="mb-5 mt-md-0 order-first order-md-last"
                            >
                                <Img
                                    className="h-100"
                                    fluid={
                                        blogs[0].node.frontmatter.cover
                                            .childImageSharp.fluid
                                    }
                                    alt="Alkemy is always the best fit for your business and digital presence."
                                />
                            </Col>
                        </Row>
                    </section>
                ) : null}

                {_.isEqual(_.sortBy(blogs), _.sortBy(edges)) ? (
                    <section className="py-4 blog-post-listing px-5">
                        <Row>
                            <Col xs={12} md={9}>
                                <RecentBlogs
                                    blogdata={blogs && createBlogArray(blogs)}
                                    layout="home"
                                />
                            </Col>
                            <Col md={3} className="d-none d-md-block">
                                <LatestFromCategory
                                    blogdata={blogs && blogs}
                                    categories={blogs && blogCategories()}
                                />
                            </Col>
                        </Row>
                    </section>
                ) : (
                    <section className="py-4 blog-post-listing px-5">
                        <Row>
                            <Col xs={12}>
                                <RecentBlogs
                                    blogdata={blogs}
                                    layout="alt"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-right mb-2 mt-5">
                                Displaying {(blogs.length)} Posts.
                            </Col>
                        </Row>
                    </section>
                )}
            </>
        )
    }

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout
                renderHeaderSolid={true}
                headerTitle={[true, pageTitle]}
                search={true}
                bodyClasses="blog"
            >
                <SEO title={pageTitle} />

                {/* Section 1 */}
                <section className="blog-category-filter my-3">
                    <Row className="align-items-center h-100">
                        <Col md={6} className="d-none d-md-block" />
                        <Col xs={12} sm={6}>
                            {/* Category Dropdown */}
                            <CustomSelect
                                arrowcolor="blue"
                                classes="text-muted"
                                selectlabel="Jump to:"
                                placeholder="Select a value..."
                                options={blogCategories()}
                                ref={categorySelect}
                                onChange={() =>
                                    setDropdown(
                                        categorySelect.current &&
                                            categorySelect.current.state
                                                .selectedOption
                                    )
                                }
                            />
                        </Col>
                    </Row>
                </section>

                {renderView()}

                <section ref={dreamForm}>
                    <FreeWebsiteAnalysis />
                </section>
            </Layout>
        </ScrollWrapper>
    )
}

const dreamForm = React.createRef()
const categorySelect = React.createRef()


const handleScroll = () => {

}


export const query = graphql`
    {
        siteSearchIndex {
            index
        }
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        path
                        date
                        title
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
                    children {
                        id
                    }
                }
            }
        }
    }
`

export default AlkemyBlog
