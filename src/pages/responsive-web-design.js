import React from 'react'
import { graphql } from 'gatsby'
import { Card, CardImg, CardText, CardImgOverlay,
  CardTitle,CardBody, CardFooter, CardDeck, Button,
  Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'
import ContactForm from '../components/contactForm.jsx'

// Images
import webDesignBanner from '../assets/images/web-design-banner.png'
import screenDesign from '../assets/images/screen-design.png'
import siteDesign from '../assets/images/screen-design.png'

/*
Layout props:
  pageTitle: SEO friendly title for the title bar
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        string (subheader text)
      ]
*/


const WebDesign = ({data}) => {
  return(
    <ScrollWrapper onWindowScroll={handleScroll}>
      <Layout
        pageTitle="Responsive Web Design | Alkemy, Inc."
        renderHeaderSolid={true}
        headerTitle={[false,""]}
        bodyClasses="webDesign"
        >

        {/* Page Hero */}
        <section className='pageHero'>
          <img src={webDesignBanner} className='img-fluid mx-0 px-0'/>
        </section>

        {/* Section 1 */}
        <section className="px-5 mt-4 mb-5">
          <Row>
            <Col>
              <h1 className="mb-4">{data.webDesignJson.sections[0].blocks[0].heading}</h1>
              <p className="mb-5">{data.webDesignJson.sections[0].blocks[0].content}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="mb-4">{data.webDesignJson.sections[0].blocks[1].heading}</h2>
              <p className="mb-4">{data.webDesignJson.sections[0].blocks[1].content}</p>
              <p className="mb-4">{data.webDesignJson.sections[0].blocks[2].content}</p>
              <Row>
                <Col
                  xs={12}
                  md={4}
                >
                  <Button href="/" className="btn btn-primary">View our Plans</Button>
                </Col>
                <Col
                  xs={12}
                  md={8}
                >
                  <Button href="/" className="btn btn-primary">Get a Custom Quote</Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <img src={screenDesign} className='img-fluid'/>
            </Col>
          </Row>
        </section>

        {/* Section 2 */}
        <section className="deliverYourMessage mb-4 text-center py-4">
          <h1>{data.webDesignJson.sections[1].heading}</h1>
          <Row className="px-5 pt-4">
            <Col xs={12} md={6}>
              <img src={siteDesign} />
            </Col>

            <Col xs={12} md={6}>
              <h1 className="mb-4">{data.webDesignJson.sections[1].blocks[0].heading}</h1>
              <p className="text-white">{data.webDesignJson.sections[1].blocks[0].content}</p>
            </Col>
          </Row>
        </section>

        <ContactForm / >
      </Layout>
    </ScrollWrapper>
  )
}


const handleScroll = () => {

}

export const query = graphql`
{
  webDesignJson{
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
}
`;


export default WebDesign
