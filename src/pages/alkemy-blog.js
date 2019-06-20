import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Context } from "../store/appContext.js"
import { addJS, fluidImageSmall } from "../utils/utils.js"
import Layout from "../components/layout"
import ScrollWrapper from "../components/scrollWrapper.jsx"
import { Button, Col, Row } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FreeWebsiteAnalysis from "../components/freeWebsiteAnalysis.jsx"
import SEO from "../components/seo"
import BlogSearch from "../components/BlogSearch.jsx"

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

    // addJS(position,inner script,source) - adds JS to document dynamically
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
                <section className="blog-featured">
                    <Row className="align-items-center h-100">
                        <Col xs={12} sm={6} className="text-center h-100">
                            {/* Latest Blog Information */}
                        </Col>
                        <Col xs={12} sm={6}>
                            {/* Latest Blog Image */}
                        </Col>
                    </Row>
                </section>

                {/* Section 2 */}
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

const handleScroll = () => {}

export const query = graphql`
           {
               siteSearchIndex {
                   index
               }
               allMarkdownRemark {
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
