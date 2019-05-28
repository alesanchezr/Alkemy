import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import '../utils/utils.js'
import { Card,Button,Col, Row } from 'reactstrap'
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


const WebDesign = ({data}) => {
  // function for creating a list of Plan features
  const planFeatures = (plan)=>{
    return(
      <ul className='fa-ul'>
        {
          (
            plan.features.map((feature,index)=>{
              return <li key={index}><span className="fa-li"><FontAwesomeIcon icon="check" className="planFeatureIcon"/></span>{feature}</li>
            })
          )
        }
      </ul>
    )
  }

  const planCards = (plans)=>{
    return plans.map((plan,index)=>{
      return (
        <Col key={index} className='my-auto plan'>
          <Card className="my-4 p-4 planCard">
            <h2 className="text-center mb-4">{plan.name}</h2>
            <FontAwesomeIcon icon={plan.icon} size="3x" className="planIcon mx-auto my-auto"/>
            <p className="text-center my-4">{plan.priceFrom}</p>
            {planFeatures(plan)}
          </Card>
        </Col>
      )
    })
  }

  const disclaimers = (block)=>{
    return block.disclaimers.map((note,index)=>{
      return <p key={index}><small>{note}</small></p>
    })
  }

  const pageTitle = "Responsive Web Design"

  return(
    <ScrollWrapper onWindowScroll={handleScroll}>
        <Layout
          renderHeaderSolid={true}
          headerTitle={[true, pageTitle]}
          bodyClasses="webDesign"
          >
          <SEO title={pageTitle} />

          {/* Section 1 */}
          <section className="px-5 my-5">
            <Row>
              <Col>
                <h1 className="mb-4">{data.webDesignJson.sections[0].blocks[0].heading}</h1>
                <p className="mb-5">{data.webDesignJson.sections[0].blocks[0].content}</p>
              </Col>
            </Row>
            <Row className="flex-column-reverse flex-md-row">
              <Col xs={12} sm={6}>
                <h2 className="mb-4">{data.webDesignJson.sections[0].blocks[1].heading}</h2>
                <p className="mb-4">{data.webDesignJson.sections[0].blocks[1].content}</p>
                <p className="mb-4">{data.webDesignJson.sections[0].blocks[2].content}</p>
                <Row>
                  <Col xs={12} sm={6}>
                    <Button
                      onClick={handleViewPlansClick}
                      color="primary">
                      View our Web Design Plans
                      </Button>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Button
                      onClick={handleQuoteClick}
                      color="primary">
                      Get a Custom Quote
                      </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={6} className='text-center'>
              {data.screenDesign.childImageSharp
                && (
                <Img
                  className="my-5 md-my-auto"
                  fluid={data.screenDesign.childImageSharp.fluid}
                  alt="Crafting beautiful responsive websites, one page at a time." />
                )
              }
              </Col>
            </Row>
          </section>

          {/* Section 2 */}
          <section className="deliverYourMessage mb-4 py-5">
            <Row className="px-5">
              <Col xs={12} md={6}>
              {data.screenClean.childImageSharp
                && (
                <Img
                  className="my-auto"
                  fluid={data.screenClean.childImageSharp.fluid}
                  alt="Clean, Professional, Handcrafted websites that are designed to convert." />
                )
              }
              </Col>

              <Col xs={12} md={6}>
                <h2 className="mb-4">{data.webDesignJson.sections[1].blocks[0].heading}</h2>
                <p className="text-white">{data.webDesignJson.sections[1].blocks[0].content}</p>
                <Button
                  onClick={handleViewPlansClick}
                  color="primary">
                  View our Web Design Plans
                  </Button>
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
              {data.wordpressLogo.childImageSharp
                && (
                <Img
                  className="my-auto"
                  fluid={data.wordpressLogo.childImageSharp.fluid}
                  alt="Wordpress Websites, built from the ground up on the best CMS in the world." />
                )
              }
              </Col>
            </Row>
          </section>

          {/* Section 4 */}
          <section
            ref={plansSection}
            className="webDesignPlans mb-4 py-4"
            >
            <Row className="px-5">
              <Col>
                <h2 className="text-center mb-4">{data.webDesignJson.sections[3].blocks[0].heading}</h2>
                <p>{data.webDesignJson.sections[3].blocks[0].content}</p>
              </Col>
            </Row>
            <Row className="my-4 px-5" noGutters>
              {planCards(data.webDesignJson.sections[4].plans)}
            </Row>
            <Row className="my-5 px-5" noGutters>
              {disclaimers(data.webDesignJson.sections[3].blocks[0])}
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
const plansSection = React.createRef();

const handleViewPlansClick = () => {
  window.scrollTo({
    top: plansSection.current.offsetTop-80,
    behavior: "smooth"
  })
}
const handleQuoteClick = () => {
  window.scrollTo({
    top: dreamForm.current.offsetTop-80,
    behavior: "smooth"
  })
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
        disclaimers
      }
      plans {
        name
        icon
        priceFrom
        features
      }
    }
  }
  screenDesign: file(relativePath: {regex: "/screen-design.png/"}) {
    ...fluidImageXS
  }
  screenClean: file(relativePath: {regex: "/website-clean.jpg/"}) {
    ...fluidImageSmall
  }
  wordpressLogo: file(relativePath: {regex: "/wordpress-logo.png/"}) {
    ...fluidImageSmall
  }
}
`;

export default WebDesign
