import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { Card, CardImg, CardText, CardImgOverlay,
  CardTitle,CardBody, CardFooter, CardDeck, Button,
  Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'
import BlogWidget from '../components/BlogWidget.jsx'

// Images
import webDesign from '../assets/images/responsive.png'
import webDevelopment from '../assets/images/development.png'
import eCommerce from '../assets/images/ecommerce.png'
import digitalMarketing from '../assets/images/marketing.png'
import ourPassion from '../assets/images/pexels-photo-450271.jpeg'

// Carousel
import VideoCarousel from '../components/videoCarousel'

// Import video assets
import video_1_jpg from '../assets/video/Home_Work/Home_work.jpg'
import video_1_mp4 from '../assets/video/Home_Work/Home_work.mp4'

import video_2_jpg from '../assets/video/Aloha-Mundo/Aloha-Mundo.jpg'
import video_2_mp4 from '../assets/video/Aloha-Mundo/Aloha-Mundo.mp4'

import video_3_jpg from '../assets/video/Office-Day/Office-Day.jpg'
import video_3_mp4 from '../assets/video/Office-Day/Office-Day.mp4'

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

const HomePage = ({data}) => (
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
          <div className="hero-cta-div d-none d-sm-block position-absolute">
            <Button to="/about-alkemy" className="btn btn-primary btn-lg pulse">Learn More</Button>
          </div>

          {/* Caret */}
          <FontAwesomeIcon onClick={handleCaretClick} icon="chevron-down" size="3x" color="white" className="heroChevron"/>
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
    <section className="servicesHome my-auto">
      <CardDeck className="d-flex flex-row align-items-stretch">
          <Card className="border-0 p-3">
            <CardImg top className="image-services mx-auto" src={webDesign} alt="Responsive Web Design Service" />
            <CardBody>
              <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[0].heading}</CardTitle>
            </CardBody>
            <CardImgOverlay>
              <CardBody>
                <CardText>{data.homepageJson.sections[1].blocks[0].content}</CardText>
              </CardBody>
              <CardFooter>
                <Button href="/responsive-web-design" color="primary" block>Learn More</Button>
              </CardFooter>
            </CardImgOverlay>
          </Card>


          <Card className="border-0 p-3">
            <CardImg top className="image-services mx-auto" src={webDevelopment} alt="Quality Web Development Service" />
            <CardBody>
              <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[1].heading}</CardTitle>
            </CardBody>
            <CardImgOverlay>
              <CardBody>
                <CardText>{data.homepageJson.sections[1].blocks[1].content}</CardText>
              </CardBody>
              <CardFooter>
                <Button href="/quality-web-development" color="primary" block>Learn More</Button>
              </CardFooter>
            </CardImgOverlay>
          </Card>


          <Card className="border-0 p-3">
            <CardImg top className="image-services mx-auto" src={eCommerce} alt="Ecommerce Design Services" />
            <CardBody>
              <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[2].heading}</CardTitle>
            </CardBody>
            <CardImgOverlay>
              <CardBody>
                <CardText>{data.homepageJson.sections[1].blocks[2].content}</CardText>
              </CardBody>
              <CardFooter>
                <Button href="/responsive-web-design" color="primary" block>Learn More</Button>
              </CardFooter>
            </CardImgOverlay>
          </Card>

          <Card className="border-0 p-3">
            <CardImg top className="image-services mx-auto" src={digitalMarketing} alt="Digital Marketing Services" />
            <CardBody>
              <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[3].heading}</CardTitle>
            </CardBody>
            <CardImgOverlay>
              <CardBody>
                <CardText>{data.homepageJson.sections[1].blocks[3].content}</CardText>
              </CardBody>
              <CardFooter>
                <Button href="/responsive-web-design" color="primary" block>Learn More</Button>
              </CardFooter>
            </CardImgOverlay>
          </Card>

        </CardDeck>
    </section>
    <section className="statsCounter mb-4 text-center py-4">
      <h1>{data.homepageJson.sections[3].statsCounter[0].heading}</h1>
      <Row className="px-5 pt-4">
        <Col xs={12} sm={6} lg={3}>
          <h1>{data.homepageJson.sections[3].statsCounter[0].stats[0].value}</h1>
          <p className="text-muted">{data.homepageJson.sections[3].statsCounter[0].stats[0].title}</p>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <h1>{data.homepageJson.sections[3].statsCounter[0].stats[1].value}</h1>
          <p className="text-muted">{data.homepageJson.sections[3].statsCounter[0].stats[1].title}</p>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <h1>{data.homepageJson.sections[3].statsCounter[0].stats[2].value}</h1>
          <p className="text-muted">{data.homepageJson.sections[3].statsCounter[0].stats[2].title}</p>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <h1>{data.homepageJson.sections[3].statsCounter[0].stats[3].value}</h1>
          <p className="text-muted">{data.homepageJson.sections[3].statsCounter[0].stats[3].title}</p>
        </Col>
      </Row>
    </section>
    <section className="ourPassion">
      <div className="container px-0">
        <Row className="align-items-center">
          <Col xs={12} md={5} className="align-items-center">
            <img src={ourPassion} className="ourPassionImg" alt="About Alkemy, Inc."/>
          </Col>
          <Col xs={12} md={7} className="align-items-center">
            <h2>{data.homepageJson.sections[2].blocks[0].heading}</h2>
            <p>{data.homepageJson.sections[2].blocks[0].content}</p>
            <Button href="/about-alkemy/" className="btn btn-primary">Discover Our Passion</Button>
          </Col>
        </Row>
      </div>
    </section>
    <section className="recentBlogPosts py-4">
      <BlogWidget posts={data.allMarkdownRemark.edges}/>
    </section>
    <section className="contactForm py-5">
      <h1 className="text-center">LET'S GET STARTED</h1>
      <div className="container">
        <p>Are you interested in a Completely FREE Analysis of your Website and it's SEO ? Please provide us with your name, email address, and website’s URL and we’ll handle the rest!</p>
        <Form onSubmit={(e)=>e.preventDefault()}>
          <Row form className="my-4 py-0">
            <Col xs={12} md={6}>
              <FormGroup>
                <Input type="text" name="fullName" id="fullName" placeholder="Please tell us your Full Name" />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Enter your Email Address" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="my-4">
            <Input type="url" name="webAddress" id="webAddress" placeholder="What is your Website Address? (ex. www.yourwebsite.com)"/>
          </FormGroup>
          <FormGroup check className="my-4 text-center">
            <Input type="checkbox" id="authCheck"/>
            <Label for="authCheck">
              I authorize Alkemy, Inc. to contact me via email so that I may recieve my free website analysis.
            </Label>
          </FormGroup>
          <FormGroup className="text-center">
            <Button className="btn btn-primary" type="submit" value="submit">Send me my FREE Website and SEO Analysis</Button>
          </FormGroup>
        </Form>
      </div>
    </section>
  </Layout>
</ScrollWrapper>
)


var introSection = React.createRef();

const handleCaretClick = () =>{
  window.scrollTo({
    top: introSection.current.offsetTop-130,
    behavior: "smooth"
  })
}

const handleScroll = () =>{
  var top = window.innerHeight-130;
  if(window.pageYOffset>=top){
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
      statsCounter{
        heading
        stats{
          title
          value
        }
      }
    }
  }
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
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
}
`;


export default HomePage
