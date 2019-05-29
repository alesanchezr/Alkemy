import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../utils/utils.js'
import { Button, Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'
import BuildYourDream from '../components/BuildYourDream.jsx'
import SEO from "../components/seo"

/*
Layout props:
  pageTitle: SEO friendly title for the title bar
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        string (subheader text)
      ]
*/


const AboutAlkemy = ({data}) => {

    const pageTitle = "About Us"

    return(
    <ScrollWrapper onWindowScroll={handleScroll}>
        <Layout
          renderHeaderSolid={true}
          headerTitle={[true,pageTitle]}
          bodyClasses="webDesign"
          >
          <SEO title={pageTitle} />

          {/* Section 1 */}
          <section className="whoWeAre">
            <Row className="align-items-center h-100">
              <Col xs={12} sm={6} className="text-center h-100">
              {data.puzzlePieces.childImageSharp
                && (
                <Img
                  className="h-100"
                  fluid={data.puzzlePieces.childImageSharp.fluid}
                  alt="Alkemy is always the best fit for your business and digital presence." />
                )
              }
              </Col>
              <Col xs={12} sm={6}>
                <h2 className="mb-4">{data.aboutJson && data.aboutJson.sections[0].blocks[1].heading}</h2>
                <p className="mb-4">{data.aboutJson && data.aboutJson.sections[0].blocks[1].content}</p>
                <div className="arrow">
                {data.arrowLine.childImageSharp
                  && (
                  <Img
                    className="h-100"
                    fluid={data.arrowLine.childImageSharp.fluid}
                    alt="Alkemy is always the best fit for your business and digital presence." />
                  )
                }
                </div>
              </Col>
            </Row>
          </section>

          {/* Section 2 */}
          <section className="aboutValues py-4">
            <Row className="px-5 pt-4">
              <Col xs={12} md={6}>
                <div className="coreValues p-5">
                  <h2 className="text-white mb-4">{data.aboutJson && data.aboutJson.sections[1].blocks[0].heading}</h2>
                  <p className="text-white">{data.aboutJson && data.aboutJson.sections[1].blocks[0].content}</p>
                  <Button onClick={handleDiscussClick} className="btn btn-primary">Let's Discuss My Project</Button>
                </div>
              </Col>
            </Row>
          </section>

          <section ref={dreamForm}>
            <BuildYourDream />
          </section>
        </Layout>
    </ScrollWrapper>
  )
}

const dreamForm = React.createRef();

const handleDiscussClick = () => {
  window.scrollTo({
    top: dreamForm.current.offsetTop-80,
    behavior: "smooth"
  })
}

const handleScroll = () => {

}

export const query = graphql`
{
  aboutJson{
    sections{
      id
      blocks {
        heading
        content
      }
    }
  }
  puzzlePieces: file(relativePath: {regex: "/puzzle-pieces.jpg/"}) {
    ...fluidImage
  }
  arrowLine: file(relativePath: {regex: "/arrowline.png/"}) {
    ...fluidImageSmall
  }
}
`;


export default AboutAlkemy
