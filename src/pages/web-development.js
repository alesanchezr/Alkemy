import React from 'react'
import { graphql } from 'gatsby'
import { Card, CardImg, CardText, CardImgOverlay,
  CardTitle,CardBody, CardFooter, CardDeck, Button,
  Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'
import BuildYourDream from '../components/BuildYourDream.jsx'

// Images
import webDevBanner from '../assets/images/web-development-banner.png'
import webDevFlasks from '../assets/images/web-dev.png'
import webDevGraphic from '../assets/images/developmentbtn.png'
import codeScreen from '../assets/images/code-screen.jpg'

/*
Layout props:
  pageTitle: SEO friendly title for the title bar
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        string (subheader text)
      ]
*/


const WebDevelopment = ({data}) => {

  return(
    <ScrollWrapper onWindowScroll={handleScroll}>
      <Layout
        pageTitle="Custom Web Development | Alkemy, Inc."
        renderHeaderSolid={true}
        headerTitle={[false,""]}
        bodyClasses="webDesign"
        >

        {/* Page Hero */}
        <section className='pageHero'>
          <img src={webDevBanner} className='img-fluid mx-0 px-0'/>
        </section>

        {/* Section 1 */}
        <section className="px-5 mt-4 mb-5">
          <Row>
            <Col>
              <h1 className="mb-4">{data.webDevelopmentJson.sections[0].blocks[0].heading}</h1>
              <p className="mb-5">{data.webDevelopmentJson.sections[0].blocks[0].content}</p>
              <p className="mb-5">{data.webDevelopmentJson.sections[0].blocks[1].content}</p>
            </Col>
          </Row>
          <Row className="flex-column-reverse flex-md-row">
            <Col xs={12} sm={6}>
              <h2 className="mb-4">{data.webDevelopmentJson.sections[0].blocks[2].heading}</h2>
              <p className="mb-4">{data.webDevelopmentJson.sections[0].blocks[2].content}</p>
              <p className="mb-4">{data.webDevelopmentJson.sections[0].blocks[3].content}</p>
              <Row>
                <Col xs={12} sm={6}>
                  <Button onClick={handleDiscussClick} className="btn btn-primary">Let's Discuss My Project</Button>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={6} className='text-center'>
              <img src={webDevFlasks} className='my-5 md-my-auto'/>
            </Col>
          </Row>
        </section>

        {/* Section 2 */}
        <section className="deliverYourMessage mb-4 py-4">
          <h1>{data.webDevelopmentJson.sections[1].heading}</h1>
          <Row className="px-5 pt-4">
            <Col xs={12} md={6}>
              <img src={webDevGraphic} />
            </Col>

            <Col xs={12} md={6}>
              <h2 className="mb-4">{data.webDevelopmentJson.sections[1].blocks[0].heading}</h2>
              <p className="text-white">{data.webDevelopmentJson.sections[1].blocks[0].content}</p>
              <Button onClick={handleDiscussClick} className="btn btn-primary">Let's Discuss My Project</Button>
            </Col>
          </Row>
        </section>

        {/* Section 3 */}
        <section className="wordpressDesign mb-4 py-4">
          <Row className="px-5 pt-4">
            <Col xs={12} md={7}>
              <h2 className="mb-4">{data.webDevelopmentJson.sections[2].blocks[0].heading}</h2>
              <p className="">{data.webDevelopmentJson.sections[2].blocks[0].content}</p>
            </Col>

            <Col xs={12} md={5}>
              <img src={codeScreen} />
            </Col>
          </Row>
        </section>

        <section ref={dreamForm}><BuildYourDream /></section>
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
  webDevelopmentJson{
    sections{
      id
      blocks {
        heading
        content
      }
    }
  }
}
`;


export default WebDevelopment
