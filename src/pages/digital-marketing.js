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


const DigitalMarketing = ({data}) => {

  return(
    <ScrollWrapper onWindowScroll={handleScroll}>
      <Suspense fallback={<Loading size='2x'/>}>
        <Layout
          pageTitle="Responsive Web Design | Alkemy, Inc."
          renderHeaderSolid={true}
          headerTitle={[false,""]}
          bodyClasses="digitalMarketing"
          >

          {/* Page Hero */}
          <section className='pageHero'>
            <img src='' className='img-fluid mx-0 px-0'/>
          </section>

          {/* Section 1 */}
          <section className="px-5 mt-4 mb-5">
            <Row>
              <Col>
                <h1 className="mb-4">{data.digitalMarketingJson && data.digitalMarketingJson.sections[0].blocks[0].heading}</h1>
                <p className="mb-5">{data.digitalMarketingJson && data.digitalMarketingJson.sections[0].blocks[0].content}</p>
              </Col>
            </Row>
            <Row className="flex-column-reverse flex-md-row">
              <Col xs={12} sm={6}>
                <h2 className="mb-4">{data.digitalMarketingJson && data.digitalMarketingJson.sections[0].blocks[1].heading}</h2>
                <p className="mb-4">{data.digitalMarketingJson && data.digitalMarketingJson.sections[0].blocks[1].content}</p>
                <Row>
                  <Col xs={12} sm={6}>
                    <Button href="/" className="btn btn-primary form-control">Let’s Grow My Traffic</Button>
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
            <h1>{data.digitalMarketingJson && data.digitalMarketingJson.sections[1].heading}</h1>
            <Row className="px-5 pt-4">
              <Col xs={12} md={6}>
                <img src='' />
              </Col>

              <Col xs={12} md={6}>
                <h2 className="mb-4">{data.digitalMarketingJson && data.digitalMarketingJson.sections[1].blocks[0].heading}</h2>
                <p className="text-white">{data.digitalMarketingJson && data.digitalMarketingJson.sections[1].blocks[0].content}</p>
                <p className="text-white">{data.digitalMarketingJson && data.digitalMarketingJson.sections[1].blocks[1].content}</p>
                <p className="text-white">{data.digitalMarketingJson && data.digitalMarketingJson.sections[1].blocks[2].content}</p>
                <Button href="/" className="btn btn-primary form-control">I’m Ready to Discuss My Project</Button>
              </Col>
            </Row>
          </section>

          {/* Section 3 */}
          <section className="wordpressDesign mb-4 py-4">
            <h1>{data.digitalMarketingJson && data.digitalMarketingJson.sections[1].heading}</h1>
            <Row className="px-5 pt-4">
              <Col xs={12} md={7}>
                <h2 className="mb-4">{data.digitalMarketingJson && data.digitalMarketingJson.sections[2].blocks[0].heading}</h2>
                <p className="">{data.digitalMarketingJson && data.digitalMarketingJson.sections[2].blocks[0].content}</p>
                <p className="">{data.digitalMarketingJson && data.digitalMarketingJson.sections[2].blocks[1].content}</p>
                <p className="">{data.digitalMarketingJson && data.digitalMarketingJson.sections[2].blocks[2].content}</p>
              </Col>

              <Col xs={12} md={5}>
                <img src='' />
              </Col>
            </Row>
          </section>

          {/* Section 4 */}
          <section className="webDesignPlans mb-4 py-4">
            <Row className="px-5">
              <Col xs={12} md={5}>
                <img src='' />
              </Col>
              <Col xs={12} md={7}>
              <h2 className="text-left font-weight-normal">{data.digitalMarketingJson && data.digitalMarketingJson.sections[3].blocks[0].heading}</h2>
              <h2 className="text-right mb-4">{data.digitalMarketingJson && data.digitalMarketingJson.sections[3].blocks[1].heading}</h2>
              <p>{data.digitalMarketingJson && data.digitalMarketingJson.sections[3].blocks[2].content}</p>
              <p>{data.digitalMarketingJson && data.digitalMarketingJson.sections[3].blocks[3].content}</p>
              <p>{data.digitalMarketingJson && data.digitalMarketingJson.sections[3].blocks[4].content}</p>
              </Col>
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
  digitalMarketingJson{
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


export default DigitalMarketing
