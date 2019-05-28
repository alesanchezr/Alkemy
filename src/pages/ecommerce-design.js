import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../utils/utils.js'
import { Card, Col, Row } from 'reactstrap'
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


const EcommerceDesign = ({data}) => {
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

  const moduleColumns = (modules)=>{
    return modules.map((block,index)=>{
      let column = block.map((item,i)=>{
        return <li key={i}>{item}</li>
      })
      return (
        <Col
          xs={12}
          sm={4}
          md={2}
          key={index}
          >
          <ul className="list-unstyled m-0">
            {
              column
            }
          </ul>
        </Col>
      )
    })
  }

  const disclaimers = (block)=>{
    return block.disclaimers.map((note,index)=>{
      return <p key={index}><small>{note}</small></p>
    })
  }

  const pageTitle = "eCommerce Web Design"

  return(
    <ScrollWrapper onWindowScroll={handleScroll}>
        <Layout
          renderHeaderSolid={true}
          headerTitle={[true,pageTitle]}
          bodyClasses="eCommerce"
          >
          <SEO title={pageTitle} />

          {/* Section 1 */}
          <section className="px-5 mt-4 mb-5">
            <Row>
              <Col>
                <h2 className="mb-4">{data.ecommDesignJson && data.ecommDesignJson.sections[0].blocks[0].heading}</h2>
                <p className="mb-4">{data.ecommDesignJson && data.ecommDesignJson.sections[0].blocks[0].content}</p>
                <p className="mb-5">{data.ecommDesignJson && data.ecommDesignJson.sections[0].blocks[1].content}</p>
              </Col>
            </Row>


            {/* eCommerce platforms */}
            <div className="container-fluid my-5">
                <h2 className="mb-5 text-center">{data.ecommDesignJson.sections[1].blocks[0].heading}</h2>
                <Row>
                  <Col xs={12} md={3}>
                  {data.shopifyLogo.childImageSharp
                    && (
                    <Img
                      className="platforms"
                      imgStyle={{
                        maxHeight:'auto',
                        maxWidth:'200px',
                        objectFit:'contain',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)'
                      }}
                      fluid={data.shopifyLogo.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  </Col>
                  <Col xs={12} md={3}>
                  {data.dcartLogo.childImageSharp
                    && (
                    <Img
                      className="platforms"
                      imgStyle={{
                        maxHeight:'auto',
                        maxWidth:'200px',
                        objectFit:'contain',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)'
                      }}
                      fluid={data.dcartLogo.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  </Col>
                  <Col xs={12} md={3}>
                  {data.bigcommerceLogo.childImageSharp
                    && (
                    <Img
                      className="platforms"
                      imgStyle={{
                        maxHeight:'auto',
                        maxWidth:'200px',
                        objectFit:'contain',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)'
                      }}
                      fluid={data.bigcommerceLogo.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  </Col>
                  <Col xs={12} md={3}>
                  {data.wordpressLogo.childImageSharp
                    && (
                    <Img
                      className="platforms"
                      imgStyle={{
                        maxHeight:'auto',
                        maxWidth:'200px',
                        objectFit:'contain',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)'
                      }}
                      fluid={data.wordpressLogo.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  </Col>
                </Row>
            </div>
          </section>

          {/* Section 2 */}
          <section className="roadmap my-4 py-5 px-2">
            <h2 className="my-4 text-center">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].heading}</h2>
            <Row className="justify-content-around">
              <Col xs={12} md={2} className="roadmapCol">
                <>
                  {data.discoveryIcon.childImageSharp
                    && (
                    <Img
                      className="platforms"
                      imgStyle={{
                        maxHeight:'auto',
                        maxWidth:'125px',
                        objectFit:'contain',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                      fluid={data.discoveryIcon.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  <div>
                    <h3 className="my-4 text-center font-weight-normal">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[0].heading}</h3>
                    <p className="mb-5">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[0].content}</p>
                  </div>
                </>
              </Col>

              <Col xs={12} md={2} className="roadmapCol">
                <>
                  {data.designIcon.childImageSharp
                    && (
                    <Img
                      className="platforms"
                      imgStyle={{
                        maxHeight:'auto',
                        maxWidth:'125px',
                        objectFit:'contain',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                      fluid={data.designIcon.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  <div>
                    <h3 className="my-4 text-center font-weight-normal">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[1].heading}</h3>
                    <p className="mb-5">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[1].content}</p>
                  </div>
                </>
              </Col>

              <Col xs={12} md={2} className="roadmapCol">
                <>
                  {data.codeIcon.childImageSharp
                    && (
                    <Img
                      className="platforms"
                      imgStyle={{
                        maxHeight:'auto',
                        maxWidth:'125px',
                        objectFit:'contain',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                      fluid={data.codeIcon.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  <div>
                    <h3 className="my-4 text-center font-weight-normal">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[2].heading}</h3>
                    <p className="mb-5">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[2].content}</p>
                  </div>
                </>
              </Col>

              <Col xs={12} md={2} className="roadmapCol">
                <>
                  {data.testIcon.childImageSharp
                    && (
                    <Img
                      className="platforms"
                      imgStyle={{
                        maxHeight:'auto',
                        maxWidth:'125px',
                        objectFit:'contain',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                      fluid={data.testIcon.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  <div>
                    <h3 className="my-4 text-center font-weight-normal">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[3].heading}</h3>
                    <p className="mb-5">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[3].content}</p>
                  </div>
                </>
              </Col>

              <Col xs={12} md={2}>
                <>
                  {data.launchIcon.childImageSharp
                    && (
                    <Img
                      className="platforms"
                      imgStyle={{
                        maxHeight:'auto',
                        maxWidth:'125px',
                        objectFit:'contain',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                      fluid={data.launchIcon.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  <div>
                    <h3 className="my-4 text-center font-weight-normal">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[4].heading}</h3>
                    <p className="mb-5">{data.ecommDesignJson && data.ecommDesignJson.sections[2].blocks[0].steps[4].content}</p>
                  </div>
                </>
              </Col>
            </Row>
          </section>

          {/* Section 3 */}
          <section className="partnerSection my-2 py-0">
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs={12} md={3}>
              {data.dcartPartner.childImageSharp
                && (
                <Img
                  imgStyle={{
                    maxHeight:'auto',
                    maxWidth:'300px',
                    objectFit:'contain',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                  }}
                  fluid={data.dcartPartner.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
              </Col>
              <Col xs={12} md={3}>
              {data.dcartExpert.childImageSharp
                && (
                <Img
                  imgStyle={{
                    maxHeight:'auto',
                    maxWidth:'300px',
                    objectFit:'contain',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                  }}
                  fluid={data.dcartExpert.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
              </Col>
              <Col xs={12} md={3}>
              {data.shopifyPartner.childImageSharp
                && (
                <Img
                  imgStyle={{
                    maxHeight:'auto',
                    maxWidth:'300px',
                    objectFit:'contain',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                  }}
                  fluid={data.shopifyPartner.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
              </Col>
              <Col xs={12} md={3}>
              {data.bigcommercePartner.childImageSharp
                && (
                <Img
                  imgStyle={{
                    maxHeight:'auto',
                    maxWidth:'300px',
                    objectFit:'contain',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                  }}
                  fluid={data.bigcommercePartner.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
              </Col>
            </Row>
          </section>

          {/* Section 4 */}
          <section className="innovativeDesign mb-4 py-4">
            <Row className="px-5 pt-4">
              <Col xs={12} md={5}>
              {data.ecommWebDesign.childImageSharp
                && (
                <Img
                  imgStyle={{maxHeight:'auto',maxWidth:'500px',objectFit:'contain',margin:'0 auto'}}
                  fluid={data.ecommWebDesign.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
              </Col>
              <Col xs={12} md={7}>
                <h2 className="mb-4">{data.ecommDesignJson &&data.ecommDesignJson.sections[3].blocks[0].heading}</h2>
                <p className="">{data.ecommDesignJson &&data.ecommDesignJson.sections[3].blocks[0].content}</p>
              </Col>
            </Row>
          </section>

          {/* Section 5 */}
          <section
            ref={plansSection}
            className="eCommercePlans mb-2 py-4"
            >
            <Row className="px-5">
              <Col>
                <h2 className="text-center mb-4">{data.ecommDesignJson && data.ecommDesignJson.sections[4].blocks[0].heading}</h2>
                <p>{data.ecommDesignJson && data.ecommDesignJson.sections[4].blocks[0].content}</p>
              </Col>
            </Row>
            <Row className="my-5 px-5" noGutters>
              {data.ecommDesignJson && planCards(data.ecommDesignJson.sections[6].plans)}
            </Row>
            <Row className="my-5 px-5" noGutters>
              {data.ecommDesignJson && disclaimers(data.ecommDesignJson.sections[4].blocks[0])}
            </Row>
          </section>

          {/* Section 6 */}
          <section
            className="modulesList mb-5"
            >
            <Row className="px-5">
              <Col>
                <h3 className="mb-4">{data.ecommDesignJson && data.ecommDesignJson.sections[5].blocks[0].heading}</h3>
              </Col>
            </Row>
            <Row className="my-5 px-5" noGutters>
              {data.ecommDesignJson && moduleColumns(data.ecommDesignJson.sections[5].blocks[0].modules)}
            </Row>
            <Row className="my-5 px-5" noGutters>
              {data.ecommDesignJson && disclaimers(data.ecommDesignJson.sections[5].blocks[0])}
            </Row>
          </section>


          <BuildYourDream / >
        </Layout>
    </ScrollWrapper>
  )
}

const plansSection = React.createRef();

const handleScroll = () => {

}

export const query = graphql`
{
  ecommDesignJson{
    sections{
      id
      blocks {
        heading
        content
        modules
        disclaimers
        steps{
          heading
          content
        }
      }
      plans {
        name
        icon
        priceFrom
        features
      }
    }
  }
  dcartLogo: file(relativePath: {regex: "/3dcart-logo.png/"}) {
    ...fluidImageXS
  }
  bigcommerceLogo: file(relativePath: {regex: "/bigcommerce-logo.png/"}) {
    ...fluidImageXS
  }
  shopifyLogo: file(relativePath: {regex: "/shopify-logo.png/"}) {
    ...fluidImageXS
  }
  wordpressLogo: file(relativePath: {regex: "/wordpress-logo-horiz.png/"}) {
    ...fluidImageXS
  }
  discoveryIcon: file(relativePath: {regex: "/discovery-icon.png/"}) {
    ...fluidImageXS
  }
  designIcon: file(relativePath: {regex: "/design-icon.png/"}) {
    ...fluidImageXS
  }
  codeIcon: file(relativePath: {regex: "/code-icon.png/"}) {
    ...fluidImageXS
  }
  testIcon: file(relativePath: {regex: "/test-icon.png/"}) {
    ...fluidImageXS
  }
  launchIcon: file(relativePath: {regex: "/launch-icon.png/"}) {
    ...fluidImageXS
  }
  dcartPartner: file(relativePath: {regex: "/3dcart-certified-partner.png/"}) {
    ...fluidImageXS
  }
  dcartExpert: file(relativePath: {regex: "/3dcart-certified-expert.png/"}) {
    ...fluidImageXS
  }
  shopifyPartner: file(relativePath: {regex: "/shopify-partner.png/"}) {
    ...fluidImageXS
  }
  bigcommercePartner: file(relativePath: {regex: "/bigcommerce-partner.png/"}) {
    ...fluidImageXS
  }
  ecommWebDesign: file(relativePath: {regex: "/ecommerce-website-design.jpg/"}) {
    ...fluidImageSmall
  }
}
`;

export default EcommerceDesign
