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


const ECommerceDesign = ({data}) => {
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
                <h1 className="mb-4">{data.ecommerceDesignJson.sections[0].blocks[0].heading}</h1>
                <p className="mb-5">{data.ecommerceDesignJson.sections[0].blocks[0].content}</p>
              </Col>
            </Row>
            <Row className="flex-column-reverse flex-md-row">
              <Col xs={12} sm={6}>
                <h2 className="mb-4">{data.ecommerceDesignJson.sections[0].blocks[1].heading}</h2>
                <p className="mb-4">{data.ecommerceDesignJson.sections[0].blocks[1].content}</p>
                <p className="mb-4">{data.ecommerceDesignJson.sections[0].blocks[2].content}</p>
                <Row>
                  <Col xs={12} sm={6}>
                    <Button href="/" className="btn btn-primary">View our Web Design Plans</Button>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Button href="/" className="btn btn-primary">Get a Custom Quote</Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={6}>
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

          {/* Section 2 */}
          <section className="deliverYourMessage mb-4 py-4">
            <h1>{data.ecommerceDesignJson.sections[1].heading}</h1>
            <Row className="px-5 pt-4">
              <Col xs={12} md={6}>
              {data.webDevFlasks.childImageSharp
                && (
                <Img
                  imgStyle={{maxHeight:'auto',maxWidth:'500px',objectFit:'contain',margin:'0 auto'}}
                  fluid={data.webDevFlasks.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
              </Col>

              <Col xs={12} md={6}>
                <h2 className="mb-4">{data.ecommerceDesignJson.sections[1].blocks[0].heading}</h2>
                <p className="text-white">{data.ecommerceDesignJson.sections[1].blocks[0].content}</p>
                <Button href="/" className="btn btn-primary">View our Web Design Plans</Button>
              </Col>
            </Row>
          </section>

          {/* Section 3 */}
          <section className="wordpressDesign mb-4 py-4">
            <h1>{data.ecommerceDesignJson.sections[1].heading}</h1>
            <Row className="px-5 pt-4">
              <Col xs={12} md={7}>
                <h2 className="mb-4">{data.ecommerceDesignJson.sections[2].blocks[0].heading}</h2>
                <p className="">{data.ecommerceDesignJson.sections[2].blocks[0].content}</p>
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
                <h2 className="text-center mb-4">{data.ecommerceDesignJson.sections[3].blocks[0].heading}</h2>
                <p>{data.ecommerceDesignJson.sections[3].blocks[0].content}</p>
              </Col>
            </Row>
            <Row className="my-5 px-5" noGutters>
              {planCards(data.ecommerceDesignJson.sections[4].plans)}
            </Row>
            <Row className="my-5 px-5" noGutters>
              {disclaimers(data.ecommerceDesignJson.sections[3].blocks[0])}
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
  ecommerceDesignJson{
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
  webDevBanner: file(relativePath: {regex: "/web-development-banner.png/"}) {
    ...fluidImage
  }
  webDevFlasks: file(relativePath: {regex: "/web-dev.png/"}) {
    ...fluidImage
  }
  webDevGraphic: file(relativePath: {regex: "/developmentbtn.png/"}) {
    ...fluidImage
  }
  codeScreen: file(relativePath: {regex: "/code-screen.jpg/"}) {
    ...fluidImage
  }
}
`;

export default EcommerceDesign
