import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { Card, CardImg, CardText, CardBody,CardImgOverlay,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'

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
      <div className="row px-5">
        <div className="col-12 col-sm-6 col-xl-3 h-100">
          <Card className="border-0 h-100 p-3">
            <CardImg top className="image-services mx-auto" src={webDesign} alt="Responsive Web Design Service" />
            <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[0].heading}</CardTitle>
            <CardImgOverlay>
              <CardText>{data.homepageJson.sections[1].blocks[0].content}</CardText>
              <Button href="/responsive-web-design" className="btn btn-primary form-control">Learn More</Button>
            </CardImgOverlay>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 h-100">
          <Card className="border-0 h-100 p-3">
            <CardImg top className="image-services mx-auto" src={webDevelopment} alt="Quality Web Development Service" />
            <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[1].heading}</CardTitle>
            <CardImgOverlay>
              <CardText>{data.homepageJson.sections[1].blocks[1].content}</CardText>
              <Button href="/quality-web-development" className="btn btn-primary form-control">Learn More</Button>
            </CardImgOverlay>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 h-100">
          <Card className="border-0 h-100 p-3">
            <CardImg top className="image-services mx-auto" src={eCommerce} alt="Ecommerce Design Services" />
            <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[2].heading}</CardTitle>
            <CardImgOverlay>
              <CardText>{data.homepageJson.sections[1].blocks[2].content}</CardText>
              <Button href="/responsive-web-design" className="btn btn-primary form-control">Learn More</Button>
            </CardImgOverlay>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-xl-3 h-100">
          <Card className="border-0 h-100 p-3">
            <CardImg top className="image-services mx-auto" src={digitalMarketing} alt="Digital Marketing Services" />
            <CardTitle tag="h4" className="text-center">{data.homepageJson.sections[1].blocks[3].heading}</CardTitle>
            <CardImgOverlay>
              <CardText>{data.homepageJson.sections[1].blocks[3].content}</CardText>
              <Button href="/responsive-web-design" className="btn btn-primary form-control">Learn More</Button>
            </CardImgOverlay>
          </Card>
        </div>
      </div>
    </section>
    <section className="statsCounter mb-4 text-center py-4">
      <h1>{data.homepageJson.sections[3].statsCounter[0].heading}</h1>
      <div className="row px-5 pt-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <h1>{data.homepageJson.sections[3].statsCounter[0].stats[0].value}</h1>
          <p className="text-muted">{data.homepageJson.sections[3].statsCounter[0].stats[0].title}</p>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <h1>{data.homepageJson.sections[3].statsCounter[0].stats[1].value}</h1>
          <p className="text-muted">{data.homepageJson.sections[3].statsCounter[0].stats[1].title}</p>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <h1>{data.homepageJson.sections[3].statsCounter[0].stats[2].value}</h1>
          <p className="text-muted">{data.homepageJson.sections[3].statsCounter[0].stats[2].title}</p>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <h1>{data.homepageJson.sections[3].statsCounter[0].stats[3].value}</h1>
          <p className="text-muted">{data.homepageJson.sections[3].statsCounter[0].stats[3].title}</p>
        </div>
      </div>
    </section>
    <section className="ourPassion">
      <div className="container px-0">
        <div className="row align-items-center">
          <div className="col-5 align-items-center">
            <img src={ourPassion} className="ourPassionImg"/>
          </div>
          <div className="col-7 align-items-center">
            <h2>{data.homepageJson.sections[2].blocks[0].heading}</h2>
            <p>{data.homepageJson.sections[2].blocks[0].content}</p>
            <Button href="/about-alkemy/" className="btn btn-primary">Discover Our Passion</Button>
          </div>
        </div>
      </div>
    </section>
    <section className="recentBlogPosts">
    </section>
    <section className="contactForm">
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
}
`;


export default HomePage
