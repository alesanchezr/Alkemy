import React, {Suspense} from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Button, Col, Row } from 'reactstrap'
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
          {data.marketingHero.childImageSharp
            && (
            <Img
              className="platforms"
              fluid={data.marketingHero.childImageSharp.fluid}
              alt="Alkemy knows the right languages and framworks to get the job done correctly." />
            )
          }
          </section>

          {/* Section 1 */}
          <section className="px-5 my-4">
            <Row>
              <Col>
                <h1 className="mb-4">{data.digitalMarketingJson && data.digitalMarketingJson.sections[0].blocks[0].heading}</h1>
                <p className="mb-5">{data.digitalMarketingJson && data.digitalMarketingJson.sections[0].blocks[0].content}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <h2 className="mb-4">{data.digitalMarketingJson && data.digitalMarketingJson.sections[0].blocks[1].heading}</h2>
                <p className="mb-5">{data.digitalMarketingJson && data.digitalMarketingJson.sections[0].blocks[1].content}</p>
                <Row>
                  <Col xs={12} sm={6}>
                    <Button href="/" className="btn btn-primary form-control">Let’s Grow My Traffic</Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={6}>
              {data.seoGraphic.childImageSharp
                && (
                <Img
                  imgStyle={{
                    maxHeight:'350px',
                    objectFit: 'contain',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    margin: '0'
                  }}
                  fluid={data.seoGraphic.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
              </Col>
            </Row>
          </section>

          {/* Section 2 */}
          <section className="deliverYourMessage mb-4">
            <Row className="px-5 py-4 d-flex justify-content-center align-items-center">
              <Col xs={12} md={6}>
              {data.marketingImg.childImageSharp
                && (
                <Img
                  imgStyle={{
                    maxHeight:'auto',
                    maxWidth: '600px',
                    objectFit: 'contain',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    margin: '0'
                  }}
                  fluid={data.marketingImg.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
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
              {data.growthCharts.childImageSharp
                && (
                <Img
                  imgStyle={{
                    maxHeight:'auto',
                    objectFit: 'contain',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    margin: '0'
                  }}
                  fluid={data.growthCharts.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
              </Col>
            </Row>
          </section>

          {/* Section 4 */}
          <section className="webDesignPlans mb-4 py-4">
            <Row className="px-5">
              <Col xs={12} md={5}>
              {data.socialMedia.childImageSharp
                && (
                <Img
                  imgStyle={{
                    maxHeight:'auto',
                    objectFit: 'contain',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    margin: '0'
                  }}
                  fluid={data.socialMedia.childImageSharp.fluid}
                  alt="Alkemy knows the right languages and framworks to get the job done correctly." />
                )
              }
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
  marketingHero: file(relativePath: {regex: "/digital-marketing-banner.png/"}) {
    ...fluidImage
  }
  seoGraphic: file(relativePath: {regex: "/seo-marketing.png/"}) {
    ...fluidImage
  }
  marketingImg: file(relativePath: {regex: "/marketingbtn.png/"}) {
    ...fluidImage
  }
  growthCharts: file(relativePath: {regex: "/analytics-growth.jpg/"}) {
    ...fluidImage
  }
  socialMedia: file(relativePath: {regex: "/social-media-marketing.jpg/"}) {
    ...fluidImage
  }
}
`;


export default DigitalMarketing
