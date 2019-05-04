import React, {Suspense} from 'react'
import { graphql } from 'gatsby'
import { Card, CardImg, CardText, CardImgOverlay,
  CardTitle,CardBody, CardFooter, CardDeck, Button,
  Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
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


const WebDesign = ({data}) => {
  // function for creating a list of Plan features
  const planFeatures = (plan)=>{
    return(
      <ul className='fa-ul'>
        {
          (
            plan.features.map(feature=>{
              return <li><span className="fa-li"><FontAwesomeIcon icon="check" className="planFeatureIcon"/></span>{feature}</li>
            })
          )
        }
      </ul>
    )
  }

  const planCards = (plans)=>{
    return plans.map(plan=>{
      return (
        <Col className='my-auto plan'>
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
    return block.disclaimers.map(note=>{
      return <p><small>{note}</small></p>
    })
  }

  return(
    <ScrollWrapper onWindowScroll={handleScroll}>
      <Suspense fallback={<Loading size='2x'/>}>
        <Layout
          pageTitle="Responsive Web Design | Alkemy, Inc."
          renderHeaderSolid={true}
          headerTitle={[false,""]}
          bodyClasses="webDesign"
          >

          {/* Page Hero */}
          <section className='pageHero'>
            <img src='' className='img-fluid mx-0 px-0'/>
          </section>

          {/* Section 1 */}
          <section className="px-5 mt-4 mb-5">
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
                    <Button href="/" className="btn btn-primary">View our Web Design Plans</Button>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Button href="/" className="btn btn-primary">Get a Custom Quote</Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={6}>
                <img src='' className='my-5 md-my-auto img-fluid'/>
              </Col>
            </Row>
          </section>

          {/* Section 2 */}
          <section className="deliverYourMessage mb-4 py-4">
            <h1>{data.webDesignJson.sections[1].heading}</h1>
            <Row className="px-5 pt-4">
              <Col xs={12} md={6}>
                <img src='' />
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
                <img src='' />
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
              {planCards(data.webDesignJson.sections[4].plans)}
            </Row>
            <Row className="my-5 px-5" noGutters>
              {disclaimers(data.webDesignJson.sections[3].blocks[0])}
            </Row>
          </section>

          <BuildYourDream / >
        </Layout>
      </Suspense>
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
}
`;


export default WebDesign
