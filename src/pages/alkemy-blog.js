import React from "react"
import _ from "lodash"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Context } from "../store/appContext.js"
import { addJS, fluidImageSmall } from "../utils/utils.js"
import Layout from "../components/layout"
import ScrollWrapper from "../components/scrollWrapper.jsx"
import { FormGroup, Label, CustomInput, Button, Col, Row } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FreeWebsiteAnalysis from "../components/freeWebsiteAnalysis.jsx"
import SEO from "../components/seo"
import CustomSelect from "../components/CustomSelect.jsx"
import BlogInfoBar from "../components/BlogInfoBar.jsx"

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
const AlkemyBlog = ({ data: { allMarkdownRemark, siteSearchIndex } }) => {
    // pageTitle: SEO friendly title for the title bar
    const pageTitle = "Alkemy Blog"

    const filterBlogsByCategory = ()=>{
        let data = allMarkdownRemark.edges.map(e=>{
            for(let i=0;i<e.node.frontmatter.tags.length;i++){
                if(e.node.frontmatter.tags[i].toLowerCase().includes('news')) return e
            }
        })
        for(let i=0;i<data.length;i++){
            if(typeof data[i]==='undefined'){
                data.splice(i,1)
            }
        }
        return data
    }

    const blogCategories = ()=>{
        let categories = allMarkdownRemark.edges.map(e => {
            return e.node.frontmatter.category
        })
        categories = _.uniq(categories)
        let labels = []
        for (let i = 0; i < categories.length; i++) {
            labels.push({ label: categories[i] })
        }
        return labels
    }

    // addJS(position,inner script,source) - adds JS to document dynamically for AddThis Toolbar
    addJS(
        `body`,
        null,
        `//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ae21853f0b21631`
    )

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
                                options={[{ label: "test" }]}
                                ref={categorySelect}
                                onClick={() => console.log(blogCategories)}
                            />
                        </Col>
                    </Row>
                </section>

                {/* Section 2 */}
                <section className="blog-featured">
                    <Row className="h-100 px-5">
                        <Col xs={12} sm={6} className="h-100">
                            {/* Latest Blog Information */}
                            <h2>
                                {
                                    allMarkdownRemark.edges[0].node.frontmatter
                                        .title
                                }
                            </h2>
                            <p className="my-4">
                                {
                                    allMarkdownRemark.edges[0].node.frontmatter
                                        .excerpt
                                }
                            </p>
                            <BlogInfoBar
                                category="News"
                                time="5 min"
                                author="Jonathan"
                                className="my-4"
                            />
                            <Button
                                to={
                                    allMarkdownRemark.edges[0].node.frontmatter
                                        .path
                                }
                                tag={Link}
                                color="primary"
                                className="my-4"
                                block
                            >
                                Read Full Post
                            </Button>
                        </Col>
                        <Col xs={12} sm={6}>
                            {/* Latest Blog Image */}
                            <Img
                                className="h-100"
                                fluid={
                                    allMarkdownRemark.edges[0].node.frontmatter
                                        .cover.childImageSharp.fluid
                                }
                                alt="Alkemy is always the best fit for your business and digital presence."
                            />
                        </Col>
                    </Row>
                </section>

                {/* Section 3 */}
                <section className="py-4 blog-post-listing">
                    <Row className="px-5 py-4">
                        <Col xs={12} md={9}>
                            {/* next 6 blogs */}
                        </Col>
                        <Col xs={12} md={3}>
                            {/* Sidebar component */}
                        </Col>
                    </Row>
                </section>

                <section ref={dreamForm}>
                    <FreeWebsiteAnalysis />
                </section>
            </Layout>
        </ScrollWrapper>
    )
}

const dreamForm = React.createRef()
const categorySelect = React.createRef()

const handleSelected = () => {
    console.log(categorySelect.current.state.selectedOption)
}

const handleScroll = () => {}

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
