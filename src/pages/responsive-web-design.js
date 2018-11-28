import React from 'react'
import { graphql } from 'gatsby'
import { Card, CardImg, CardText, CardImgOverlay,
  CardTitle,CardBody, CardFooter, CardDeck, Button,
  Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'

// Images
import webDesign from '../assets/images/responsive.png'

/*
Layout props:
  pageTitle: SEO friendly title for the title bar
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        string (subheader text)
      ]
*/


const WebDesign = ({data}) => (
  <ScrollWrapper onWindowScroll={handleScroll}>
    <Layout
      pageTitle="Alkemy, Inc. | Web Design, Development, eCommerce, and Marketing"
      headerTitle={[false,""]}
      bodyClasses="home"
      >

      {/* Section 1 */}
      <section>

      </section>
    </Layout>
  </ScrollWrapper>
)


const handleScroll = () => {

}

export const query = graphql`
{
  homepageJson{
    sections{
      id
      blocks {
        heading
        image
        content
      }
      heading
      stats{
        title
        value
      }
    }
  }
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          excerpt
          cover
        }
      }
    }
  }
}
`;


export default WebDesign
