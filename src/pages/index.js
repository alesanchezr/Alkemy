import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import '../utils/utils.js'
import { Card, CardText, CardImgOverlay,CardTitle,
  CardBody, CardFooter, Button, Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout.js'
import ScrollWrapper from '../components/scrollWrapper.jsx'
import BlogWidget from '../components/BlogWidget.jsx'
import ReactCounter from '../components/counter.jsx'
import FreeWebsiteAnalysis from '../components/freeWebsiteAnalysis.jsx'
import SEO from "../components/seo"

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

  return (
      <ScrollWrapper onWindowScroll={handleScroll}>
          <Layout headerTitle={[false, ""]} bodyClasses="home">
              <SEO title="Best Quality Software Development, Web Design, eCommerce Design, and Marketing" />

              {/* Section 1 - Hero */}
              <section className="homeHero">
                  <div className="container-fluid px-0 position-relative">
                      {/* Cover Video Slider */}
                      <VideoCarousel slides={slideArray} showIndicators={false}>
                          <Row className="h-100 d-flex align-items-center">
                              <Col
                                  xs={12}
                                  md={6}
                                  className="px-5 bg-transparent"
                              >
                                  {/* Cover Text */}
                                  <div className="cover-text">
                                      <h2 className="mb-5">
                                          <span className="cover-text-1a animated bounceInLeft d-block mb-3">
                                              Your Brand Deserves
                                          </span>
                                          <span className="cover-text-1b animated bounceInRight d-block">
                                              Only The Best
                                          </span>
                                      </h2>

                                      {/* Cover CTA */}
                                      <Button
                                          color="primary"
                                          size="lg"
                                          to="/about-alkemy"
                                          tag={Link}
                                          className="animated fadeInUp"
                                          block
                                      >
                                          Learn More
                                      </Button>
                                  </div>
                              </Col>
                          </Row>

                          {/* Caret */}
                          <FontAwesomeIcon
                              onClick={handleCaretClick}
                              icon="chevron-down"
                              size="3x"
                              color="white"
                              className="heroChevron animated pulse infinite"
                          />
                      </VideoCarousel>
                  </div>
              </section>
              <section ref={introSection} className="introHome my-4">
                  <div className="container-fluid px-5 py-4">
                      <h2 className="mb-4">
                          {data.homepageJson.sections[0].blocks[0].heading}
                      </h2>
                      <p className="mb-5">
                          {data.homepageJson.sections[0].blocks[0].content}
                      </p>

                      <h2 className="mb-4">
                          {data.homepageJson.sections[0].blocks[1].heading}
                      </h2>
                      <p className="mb-4">
                          {data.homepageJson.sections[0].blocks[1].content}
                      </p>
                  </div>
              </section>
              <section className="servicesHome mt-auto mb-5">
                  <Row>
                      <Col className="col-lg-3 col-sm-6 col-12">
                          <Card className="border-0 p-3 animated bounceInUp cardOne h-100">
                              {data.webDesign.childImageSharp && (
                                  <Img
                                      imgStyle={{
                                          maxHeight: "200px",
                                          maxWidth: "auto",
                                          objectFit: "contain",
                                      }}
                                      fluid={
                                          data.webDesign.childImageSharp.fluid
                                      }
                                      className="card-img-top image-services mx-auto my-auto"
                                      alt="Responsive Web Design Services"
                                  />
                              )}
                              <CardBody>
                                  <CardTitle tag="h4" className="text-center">
                                      {
                                          data.homepageJson.sections[1]
                                              .blocks[0].heading
                                      }
                                  </CardTitle>
                              </CardBody>
                              <CardImgOverlay className="h-100">
                                  <CardBody className="d-flex align-items-end justify-content-center">
                                      <CardText>
                                          {
                                              data.homepageJson.sections[1]
                                                  .blocks[0].content
                                          }
                                      </CardText>
                                  </CardBody>
                                  <CardFooter>
                                      <Button
                                          color="primary"
                                          size="md"
                                          to="/responsive-web-design"
                                          tag={Link}
                                          block
                                      >
                                          Learn More
                                      </Button>
                                  </CardFooter>
                              </CardImgOverlay>
                          </Card>
                      </Col>
                      <Col className="col-lg-3 col-sm-6 col-12">
                          <Card className="border-0 p-3 animated bounceInUp cardTwo h-100">
                              {data.webDevelopment.childImageSharp && (
                                  <Img
                                      imgStyle={{
                                          maxHeight: "200px",
                                          maxWidth: "auto",
                                          objectFit: "contain",
                                      }}
                                      className="card-img-top image-services mx-auto my-auto"
                                      fluid={
                                          data.webDevelopment.childImageSharp
                                              .fluid
                                      }
                                      alt="Quality Web Development Services"
                                  />
                              )}
                              <CardBody className="d-flex align-items-end justify-content-center">
                                  <CardTitle tag="h4" className="text-center">
                                      {
                                          data.homepageJson.sections[1]
                                              .blocks[1].heading
                                      }
                                  </CardTitle>
                              </CardBody>
                              <CardImgOverlay className="h-100">
                                  <CardBody>
                                      <CardText>
                                          {
                                              data.homepageJson.sections[1]
                                                  .blocks[1].content
                                          }
                                      </CardText>
                                  </CardBody>
                                  <CardFooter>
                                      <Button
                                          color="primary"
                                          size="md"
                                          to="/web-development"
                                          tag={Link}
                                          block
                                      >
                                          Learn More
                                      </Button>
                                  </CardFooter>
                              </CardImgOverlay>
                          </Card>
                      </Col>
                      <Col className="col-lg-3 col-sm-6 col-12">
                          <Card className="border-0 p-3 animated bounceInUp cardThree h-100">
                              {data.eCommerce.childImageSharp && (
                                  <Img
                                      imgStyle={{
                                          maxHeight: "200px",
                                          maxWidth: "auto",
                                          objectFit: "contain",
                                      }}
                                      className="card-img-top image-services mx-auto my-auto"
                                      fluid={
                                          data.eCommerce.childImageSharp.fluid
                                      }
                                      alt="Ecommerce Design Services"
                                  />
                              )}
                              <CardBody className="d-flex align-items-end justify-content-center">
                                  <CardTitle tag="h4" className="text-center">
                                      {
                                          data.homepageJson.sections[1]
                                              .blocks[2].heading
                                      }
                                  </CardTitle>
                              </CardBody>
                              <CardImgOverlay className="h-100">
                                  <CardBody>
                                      <CardText>
                                          {
                                              data.homepageJson.sections[1]
                                                  .blocks[2].content
                                          }
                                      </CardText>
                                  </CardBody>
                                  <CardFooter>
                                      <Button
                                          color="primary"
                                          size="md"
                                          tag={Link}
                                          to="/ecommerce-design"
                                          block
                                      >
                                          Learn More
                                      </Button>
                                  </CardFooter>
                              </CardImgOverlay>
                          </Card>
                      </Col>
                      <Col className="col-lg-3 col-sm-6 col-12">
                          <Card className="border-0 p-3 animated bounceInUp cardFour">
                              {data.digitalMarketing.childImageSharp && (
                                  <Img
                                      imgStyle={{
                                          maxHeight: "200px",
                                          maxWidth: "auto",
                                          objectFit: "contain",
                                      }}
                                      className="card-img-top image-services mx-auto my-auto"
                                      fluid={
                                          data.digitalMarketing.childImageSharp
                                              .fluid
                                      }
                                      alt="Digital Marketing Services"
                                  />
                              )}
                              <CardBody className="d-flex align-items-end justify-content-center">
                                  <CardTitle tag="h4" className="text-center">
                                      {
                                          data.homepageJson.sections[1]
                                              .blocks[3].heading
                                      }
                                  </CardTitle>
                              </CardBody>
                              <CardImgOverlay className="h-100">
                                  <CardBody>
                                      <CardText>
                                          {
                                              data.homepageJson.sections[1]
                                                  .blocks[3].content
                                          }
                                      </CardText>
                                  </CardBody>
                                  <CardFooter>
                                      <Button
                                          color="primary"
                                          size="md"
                                          tag={Link}
                                          to="/digital-marketing"
                                          block
                                      >
                                          Learn More
                                      </Button>
                                  </CardFooter>
                              </CardImgOverlay>
                          </Card>
                      </Col>
                  </Row>
              </section>
              <section className="statsCounter mb-4 text-center py-4">
                  <h2>{data.homepageJson.sections[3].heading}</h2>
                  <Row className="px-5 pt-4">
                      <Col xs={12} sm={6} lg={3}>
                          <ReactCounter theNumber={firstNumber} />
                          <p className="text-muted">
                              {data.homepageJson.sections[3].stats[0].title}
                          </p>
                      </Col>

                      <Col xs={12} sm={6} lg={3}>
                          <ReactCounter theNumber={secondNumber} />
                          <p className="text-muted">
                              {data.homepageJson.sections[3].stats[1].title}
                          </p>
                      </Col>

                      <Col xs={12} sm={6} lg={3}>
                          <ReactCounter theNumber={thirdNumber} />
                          <p className="text-muted">
                              {data.homepageJson.sections[3].stats[2].title}
                          </p>
                      </Col>

                      <Col xs={12} sm={6} lg={3}>
                          <ReactCounter theNumber={fourthNumber} />
                          <p className="text-muted">
                              {data.homepageJson.sections[3].stats[3].title}
                          </p>
                      </Col>
                  </Row>
              </section>
              <section className="ourPassion">
                  <div className="container-fluid px-0 px-lg-5">
                      <Row className="align-items-center">
                          <Col
                              xs={12}
                              md={5}
                              className="align-items-center px-0 px-lg-5"
                          >
                              {data.ourPassion.childImageSharp && (
                                  <Img
                                      className="ourPassionImg animated slideInLeft mb-5 mb-md-0"
                                      fluid={
                                          data.ourPassion.childImageSharp.fluid
                                      }
                                      alt="Discover our passion."
                                  />
                              )}
                          </Col>
                          <Col
                              xs={12}
                              md={7}
                              className="align-items-center px-0 px-lg-5"
                          >
                              <h2>
                                  {
                                      data.homepageJson.sections[2].blocks[0]
                                          .heading
                                  }
                              </h2>
                              <p>
                                  {
                                      data.homepageJson.sections[2].blocks[0]
                                          .content
                                  }
                              </p>
                              <Button
                                  color="primary"
                                  size="lg"
                                  tag={Link}
                                  to="/about-alkemy"
                              >
                                  Discover Our Passion
                              </Button>
                          </Col>
                      </Row>
                  </div>
              </section>
              <section className="recentBlogPosts">
                  <BlogWidget posts={data.allMarkdownRemark.edges} />
              </section>

              <FreeWebsiteAnalysis />
          </Layout>
      </ScrollWrapper>
  )
}


const introSection = React.createRef();


const handleCaretClick = () => {
  // eslint-disable-next-line no-undef
  requestAnimationFrame(() => {
      // eslint-disable-next-line no-undef
      document.body.scrollTo({
          top: introSection.current.offsetTop - 100,
          behavior: "smooth",
      })
  })
}

const handleScroll = () => {
    // header opacity
    const topBoundary = window.innerHeight - 100
    if (window.pageYOffset >= topBoundary) {
        document.body.classList.add("solid")
    } else {
        document.body.classList.remove("solid")
    }
}

export const query = graphql`
{
  homepageJson{
    sections{
      id
      blocks {
        heading
        content
      }
      heading
      stats{
        title
        value
      }
    }
  }
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          cover {
            ...fluidImageSmall
          }
          title
          path
          excerpt
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
  webDesign: file(relativePath: {regex: "/responsive.png/"}) {
    ...fluidImageSmall
  }
  webDevelopment: file(relativePath: {regex: "/development.png/"}) {
    ...fluidImageSmall
  }
  eCommerce: file(relativePath: {regex: "/ecommerce.png/"}) {
    ...fluidImageSmall
  }
  digitalMarketing: file(relativePath: {regex: "/marketing.png/"}) {
    ...fluidImageSmall
  }
  ourPassion: file(relativePath: {regex: "/our-passion.jpg/"}) {
    ...fluidImageSmall
  }
}
`;


export default HomePage
