import React, {Suspense} from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../utils/utils.js'
import { Card, Button, Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from '../components/loading.jsx'
import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'

const BuildYourDream = React.lazy(() => import('../components/BuildYourDream.jsx'));

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

  const disclaimers = (block)=>{
    return block.disclaimers.map((note,index)=>{
      return <p key={index}><small>{note}</small></p>
    })
  }
  return(
    <ScrollWrapper onWindowScroll={handleScroll}>
      <Suspense fallback={<Loading size='2x'/>}>
        <Layout
          pageTitle="eCommerce Website Design | Alkemy, Inc."
          renderHeaderSolid={true}
          headerTitle={[false,""]}
          bodyClasses="eCommerce"
          >

          {/* Page Hero */}
          <section className='pageHero'>
          {data.webDevBanner.childImageSharp
            && (
            <Img
              className="mx-0 px-0"
              fluid={data.webDevBanner.childImageSharp.fluid}
              alt="Professional Web Development Services to craft your dream app." />
            )
          }
          </section>

          {/* Section 1 */}
          <section className="px-5 mt-4 mb-5">
            <Row>
              <Col>
                <h1 className="mb-4">{data.ecommDesignJson.sections[0].blocks[0].heading}</h1>
                <p className="mb-5">{data.ecommDesignJson.sections[0].blocks[0].content}</p>
                <p className="mb-4">{data.ecommDesignJson.sections[0].blocks[1].content}</p>
              </Col>
            </Row>


            {/* eCommerce platforms */}
            <div className="container-fluid">
                <h2 className="mb-4 text-center">{data.ecommDesignJson.sections[1].blocks[0].heading}</h2>
                <Row>
                  <Col xs={12} md={3}>
                  {data.webDevFlasks.childImageSharp
                    && (
                    <Img
                      imgStyle={{maxHeight:'auto',maxWidth:'500px',objectFit:'contain',margin:'0 auto'}}
                      fluid={data.webDevFlasks.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  </Col>
                  <Col xs={12} md={3}>
                  {data.webDevFlasks.childImageSharp
                    && (
                    <Img
                      imgStyle={{maxHeight:'auto',maxWidth:'500px',objectFit:'contain',margin:'0 auto'}}
                      fluid={data.webDevFlasks.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  </Col>
                  <Col xs={12} md={3}>
                  {data.webDevFlasks.childImageSharp
                    && (
                    <Img
                      imgStyle={{maxHeight:'auto',maxWidth:'500px',objectFit:'contain',margin:'0 auto'}}
                      fluid={data.webDevFlasks.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  </Col>
                  <Col xs={12} md={3}>
                  {data.webDevFlasks.childImageSharp
                    && (
                    <Img
                      imgStyle={{maxHeight:'auto',maxWidth:'500px',objectFit:'contain',margin:'0 auto'}}
                      fluid={data.webDevFlasks.childImageSharp.fluid}
                      alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                    )
                  }
                  </Col>
                </Row>
            </div>
          </section>

          {/* Section 2 */}
          <section className="deliverYourMessage mb-4 py-4">

          </section>

          {/* Section 3 */}
          <section className="wordpressDesign mb-4 py-4">
            <h1>{data.ecommDesignJson.sections[1].heading}</h1>
            <Row className="px-5 pt-4">
              <Col xs={12} md={7}>
                <h2 className="mb-4">{data.ecommDesignJson.sections[2].blocks[0].heading}</h2>
                <p className="">{data.ecommDesignJson.sections[2].blocks[0].content}</p>
              </Col>

              <Col xs={12} md={5}>
              {data.webDevFlasks.childImageSharp
                && (
                <Img
                  imgStyle={{maxHeight:'auto',maxWidth:'500px',objectFit:'contain',margin:'0 auto'}}
                  fluid={data.webDevFlasks.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
              </Col>
            </Row>
          </section>

          {/* Section 4 */}
          <section
            ref={plansSection}
            className="eCommercePlans mb-4 py-4"
            >
            <Row className="px-5">
              <Col>
                <h2 className="text-center mb-4">{data.ecommDesignJson && data.ecommDesignJson.sections[4].blocks[0].heading}</h2>
                <p>{data.ecommDesignJson && data.ecommDesignJson.sections[4].blocks[0].content}</p>
              </Col>
            </Row>
            <Row className="my-5 px-5" noGutters>
              {data.ecommDesignJson && planCards(data.ecommDesignJson.sections[5].plans)}
            </Row>
            <Row className="my-5 px-5" noGutters>
              {data.ecommDesignJson && disclaimers(data.ecommDesignJson.sections[4].blocks[0])}
            </Row>
          </section>

          <BuildYourDream / >
        </Layout>
      </Suspense>
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

  3dcartLogo: file(relativePath: {regex: "/3dcart-logo.png/"}) {
    ...fluidImage
  }
  bigcommerceLogo: file(relativePath: {regex: "/bigcommerce-logo.png/"}) {
    ...fluidImage
  }
  shopifyLogo: file(relativePath: {regex: "/shopify-logo.png/"}) {
    ...fluidImage
  }
  wordpressLogo: file(relativePath: {regex: "/wordpress-logo-horiz.png/"}) {
    ...fluidImage
  }

  discoveryIcon: file(relativePath: {regex: "/discovery-icon.png/"}) {
    ...fluidImage
  }
  designIcon: file(relativePath: {regex: "/design-icon.png/"}) {
    ...fluidImage
  }
  codeIcon: file(relativePath: {regex: "/code-icon.png/"}) {
    ...fluidImage
  }
  testIcon: file(relativePath: {regex: "/test-icon.png/"}) {
    ...fluidImage
  }
  launchIcon: file(relativePath: {regex: "/launch-icon.png/"}) {
    ...fluidImage
  }

  3dcartPartner: file(relativePath: {regex: "/3dcart-certified-partner.png/"}) {
    ...fluidImage
  }
  3dcartExpert: file(relativePath: {regex: "/3dcart-certified-expert.png/"}) {
    ...fluidImage
  }
  shopifyPartner: file(relativePath: {regex: "/shopify-partner.png/"}) {
    ...fluidImage
  }
  bigcommercePartner: file(relativePath: {regex: "/bigcommerce-partner.png/"}) {
    ...fluidImage
  }

  ecommWebDesign: file(relativePath: {regex: "/ecommerce-website-design.jpg/"}) {
    ...fluidImage
  }
}
`;

export default EcommerceDesign
