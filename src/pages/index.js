import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import fluidImage from '../utils/utils.js'
import { Card, CardImg, CardText, CardImgOverlay,
  CardTitle,CardBody, CardFooter, Button, Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'
import BlogWidget from '../components/BlogWidget.jsx'
import ReactCounter from '../components/counter.jsx'
import FreeWebsiteAnalysis from '../components/freeWebsiteAnalysis.jsx'

// Carousel
import VideoCarousel from '../components/videoCarousel'

// Import video assets
import video_1_jpg from '../assets/video/home-work/home-work.jpg'
import video_1_mp4 from '../assets/video/home-work/home-work.mp4'

import video_2_jpg from '../assets/video/aloha-mundo/aloha-mundo.jpg'
import video_2_mp4 from '../assets/video/aloha-mundo/aloha-mundo.mp4'

import video_3_jpg from '../assets/video/office-day/office-day.jpg'
import video_3_mp4 from '../assets/video/office-day/office-day.mp4'

/* Define Slide Array
Each object(slide) in array should have 2 keys:
    1. img - image for the video fallback poster
    2. mp4 - mp4 video file to use
*/
const slideArray = [
  {
    img: video_1_jpg,
    mp4: video_1_mp4,
  },
  {
    img: video_2_jpg,
    mp4: video_2_mp4,
  },
  {
    img: video_3_jpg,
    mp4: video_3_mp4,
  }
];

/*
Layout props:
  pageTitle: SEO friendly title for the title bar
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        string (subheader text)
      ]
*/


const HomePage = ({data}) => {
  const firstNumber = data.homepageJson.sections[3].stats[0].value
  const secondNumber = data.homepageJson.sections[3].stats[1].value
  const thirdNumber = data.homepageJson.sections[3].stats[2].value
  const fourthNumber = data.homepageJson.sections[3].stats[3].value
  return(
    <ScrollWrapper onWindowScroll={handleScroll}>
      <Layout
        pageTitle="Alkemy, Inc. | Web Design, Development, eCommerce, and Marketing"
        headerTitle={[false,""]}
        bodyClasses="home"
        >

        {/* Section 1 - Hero */}
        <section className="homeHero">
        	<div className="container-fluid px-0 position-relative" style={{position: 'relative'}}>

            {/* Cover Video Slider */}
            <VideoCarousel slides={slideArray} showIndicators={false} >

              {/* Cover Text */}
          		<div id="cover-text">
          			<div className="cover-text-1a">Your Brand Deserves</div>
          			<div className="cover-text-1b">Only The Best</div>
          		</div>

              {/* Cover CTA */}
              <div className="hero-cta-div d-block position-absolute">
                <Button href="/about-alkemy" className="btn btn-primary btn-lg">Learn More</Button>
              </div>

              {/* Caret */}
              <FontAwesomeIcon onClick={handleCaretClick} icon="chevron-down" size="2x" color="white" className="heroChevron"/>
            </VideoCarousel>
          </div>
        </section>
        <section ref={introSection} className="introHome my-4">
          <div className="container-fluid px-5 py-4">
            <h1 className="mb-4">{data.homepageJson.sections[0].blocks[0].heading}</h1>
            <p className="mb-5">{data.homepageJson.sections[0].blocks[0].content}</p>

            <h1 className="mb-4">{data.homepageJson.sections[0].blocks[1].heading}</h1>
            <p className="mb-4">{data.homepageJson.sections[0].blocks[1].content}</p>
          </div>
        </section>
        <section className="servicesHome mt-auto mb-5">
          <Row>
            <Col className="col-lg-3 col-sm-6 col-12">
              <Card className="border-0 p-3 wow bounceInUp cardOne h-100">
              {data.webDesign.childImageSharp
                && (
                <Img
                  imgStyle={{maxHeight:'200px',maxWidth:'auto',objectFit:'contain'}}
                  fluid={data.webDesign.childImageSharp.fluid}
                  className="card-img-top image-services mx-auto my-auto"
                  alt="Responsive Web Design Services"
                  />
                )
              }
                <CardBody>
                  <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[0].heading}</CardTitle>
                </CardBody>
                <CardImgOverlay className="h-100">
                  <CardBody className="d-flex align-items-end justify-content-center">
                    <CardText>{data.homepageJson.sections[1].blocks[0].content}</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button href="/responsive-web-design" color="primary" block>Learn More</Button>
                  </CardFooter>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col className="col-lg-3 col-sm-6 col-12">
              <Card className="border-0 p-3 wow bounceInUp cardTwo h-100">
              {data.webDevelopment.childImageSharp
                && (
                <Img
                  imgStyle={{maxHeight:'200px',maxWidth:'auto',objectFit:'contain'}}
                  className="card-img-top image-services mx-auto my-auto"
                  fluid={data.webDevelopment.childImageSharp.fluid}
                  alt="Quality Web Development Services" />
                )
              }
                <CardBody className="d-flex align-items-end justify-content-center">
                  <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[1].heading}</CardTitle>
                </CardBody>
                <CardImgOverlay className="h-100">
                  <CardBody>
                    <CardText>{data.homepageJson.sections[1].blocks[1].content}</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button href="/quality-web-development" color="primary" block>Learn More</Button>
                  </CardFooter>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col className="col-lg-3 col-sm-6 col-12">
              <Card className="border-0 p-3 wow bounceInUp cardThree h-100">
                {data.eCommerce.childImageSharp
                  && (
                  <Img
                    imgStyle={{maxHeight:'200px',maxWidth:'auto',objectFit:'contain'}}
                    className="card-img-top image-services mx-auto my-auto"
                    fluid={data.eCommerce.childImageSharp.fluid}
                    alt="Ecommerce Design Services" />
                  )
                }
                <CardBody className="d-flex align-items-end justify-content-center">
                  <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[2].heading}</CardTitle>
                </CardBody>
                <CardImgOverlay className="h-100">
                  <CardBody>
                    <CardText>{data.homepageJson.sections[1].blocks[2].content}</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button href="/ecommerce-web-design" color="primary" block>Learn More</Button>
                  </CardFooter>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col className="col-lg-3 col-sm-6 col-12">
              <Card className="border-0 p-3 wow bounceInUp cardFour">
                {data.digitalMarketing.childImageSharp
                  && (
                  <Img
                    imgStyle={{maxHeight:'200px',maxWidth:'auto',objectFit:'contain'}}
                    className="card-img-top image-services mx-auto my-auto"
                    fluid={data.digitalMarketing.childImageSharp.fluid}
                    alt="Digital Marketing Services" />
                  )
                }
                <CardBody className="d-flex align-items-end justify-content-center">
                  <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[3].heading}</CardTitle>
                </CardBody>
                <CardImgOverlay className="h-100">
                  <CardBody>
                    <CardText>{data.homepageJson.sections[1].blocks[3].content}</CardText>
                  </CardBody>
                  <CardFooter>
                    <Button href="/digital-marketing" color="primary" block>Learn More</Button>
                  </CardFooter>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="statsCounter mb-4 text-center py-4">
          <h1>{data.homepageJson.sections[3].heading}</h1>
          <Row className="px-5 pt-4">
            <Col xs={12} sm={6} lg={3}>
              <ReactCounter theNumber={firstNumber}/>
              <p className="text-muted">{data.homepageJson.sections[3].stats[0].title}</p>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <ReactCounter theNumber={secondNumber}/>
              <p className="text-muted">{data.homepageJson.sections[3].stats[1].title}</p>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <ReactCounter theNumber={thirdNumber}/>
              <p className="text-muted">{data.homepageJson.sections[3].stats[2].title}</p>
            </Col>

            <Col xs={12} sm={6} lg={3}>
              <ReactCounter theNumber={fourthNumber}/>
              <p className="text-muted">{data.homepageJson.sections[3].stats[3].title}</p>
            </Col>
          </Row>
        </section>
        <section className="ourPassion">
          <div className="container-fluid px-0 px-lg-5">
            <Row className="align-items-center">
              <Col xs={12} md={5} className="align-items-center px-0 px-lg-5">
              {data.ourPassion.childImageSharp
                && (
                <Img
                  className="ourPassionImg wow slideInLeft"
                  fluid={data.ourPassion.childImageSharp.fluid}
                  alt="Discover our passion." />
                )
              }
              </Col>
              <Col xs={12} md={7} className="align-items-center px-0 px-lg-5">
                <h2>{data.homepageJson.sections[2].blocks[0].heading}</h2>
                <p>{data.homepageJson.sections[2].blocks[0].content}</p>
                <Button href="/about-alkemy/" className="btn btn-primary">Discover Our Passion</Button>
              </Col>
            </Row>
          </div>
        </section>
        <FreeWebsiteAnalysis / >
        <section className="recentBlogPosts">
          <BlogWidget posts={data.allMarkdownRemark.edges}/>
        </section>
      </Layout>
    </ScrollWrapper>
  )
}


const introSection = React.createRef();


const handleCaretClick = () => {
  window.scrollTo({
    top: introSection.current.offsetTop-100,
    behavior: "smooth"
  })
}

const handleScroll = () => {
  // header opacity
  const topBoundary = window.innerHeight-100;
  if(window.pageYOffset>=topBoundary){
    document.body.classList.add('solid');
  }else{
    document.body.classList.remove('solid');
  }
}

export const query = graphql`
{
  homepageJson{
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
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          excerpt
          cover
        }
      }
    }
  }
  webDesign: file(relativePath: {regex: "/responsive.png/"}) {
    ...fluidImage
  }
  webDevelopment: file(relativePath: {regex: "/development.png/"}) {
    ...fluidImage
  }
  eCommerce: file(relativePath: {regex: "/ecommerce.png/"}) {
    ...fluidImage
  }
  digitalMarketing: file(relativePath: {regex: "/marketing.png/"}) {
    ...fluidImage
  }
  ourPassion: file(relativePath: {regex: "/our-passion.jpeg/"}) {
    ...fluidImage
  }
}
`;


export default HomePage
