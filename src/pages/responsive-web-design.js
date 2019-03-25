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
import screenClean from '../assets/images/website-clean.jpg'
import wordpressLogo from '../assets/images/WordPress-logo.png'

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
                  md={6}
                >
                  <Button href="/" className="btn btn-primary">View our Web Design Plans</Button>
                </Col>
                <Col
                  xs={12}
                  md={6}
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
        <section className="deliverYourMessage mb-4 py-4">
          <h1>{data.webDesignJson.sections[1].heading}</h1>
          <Row className="px-5 pt-4">
            <Col xs={12} md={6}>
              <img src={screenClean} />
            </Col>

            <Col xs={12} md={6}>
              <h2 className="mb-4">{data.webDesignJson.sections[1].blocks[0].heading}</h2>
              <p className="text-white">{data.webDesignJson.sections[1].blocks[0].content}</p>
              <Button href="/" className="btn btn-primary">View our Web Design Plans</Button>
            </Col>
          </Row>
        </section>

        {/* Section 3 */}
        <section className="wordpressDesign mb-4 py-4">
          <h1>{data.webDesignJson.sections[1].heading}</h1>
          <Row className="px-5 pt-4">
            <Col xs={12} md={7}>
              <h2 className="mb-4">{data.webDesignJson.sections[2].blocks[0].heading}</h2>
              <p className="">{data.webDesignJson.sections[2].blocks[0].content}</p>
            </Col>

            <Col xs={12} md={5}>
              <img src={wordpressLogo} />
            </Col>
          </Row>
        </section>

        {/* Section 4 */}
        <section className="webDesignPlans mb-4 py-4">
          <Row className="px-5">
            <Col>
              <h2 className="text-center mb-4">{data.webDesignJson.sections[3].blocks[0].heading}</h2>
              <p>{data.webDesignJson.sections[3].blocks[0].content}</p>
            </Col>
          </Row>
          <Row className="my-5 px-5" noGutters>
            <Col>
              <Card className="my-4 p-5">
                <h2 className="text-center mb-4">{data.webDesignJson.sections[4].plans[0].name}</h2>
                <p className="text-center mb-4">{data.webDesignJson.sections[4].plans[0].priceFrom}</p>
              </Card>
            </Col>
            <Col>
              <Card className="my-4 p-5">
                <h2 className="text-center mb-4">{data.webDesignJson.sections[4].plans[1].name}</h2>
                <p className="text-center mb-4">{data.webDesignJson.sections[4].plans[1].priceFrom}</p>
              </Card>
            </Col>
            <Col>
              <Card className="my-4 p-5">
                <h2 className="text-center mb-4">{data.webDesignJson.sections[4].plans[2].name}</h2>
                <p className="text-center mb-4">{data.webDesignJson.sections[4].plans[2].priceFrom}</p>
              </Card>
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
        content
      }
      plans {
        name
        priceFrom
        features
      }
    }
  }
}
`;


export default WebDesign
