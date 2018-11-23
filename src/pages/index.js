import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'
import Image from '../components/image'

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
    <section ref={introSection}>
      <div className="container-fluid p-5">
        <h1 className="mb-4">{data.homepageJson.sections[0].blocks[0].heading}</h1>
        <p className="mb-5">{data.homepageJson.sections[0].blocks[0].content}</p>

        <h1 className="mb-4">{data.homepageJson.sections[0].blocks[1].heading}</h1>
        <p className="mb-4">{data.homepageJson.sections[0].blocks[1].content}</p>
      </div>
    </section>
    <section style={{height:"400px"}}>
      <div className="row px-5">
        <div className="col-12 col-sm-6 col-lg-3">
          <Card>
            <div className="rounded-circle bg-light">
              <CardImg top width="100%" src={data.homepageJson.sections[1].blocks[0].image} alt="Professional Web Design Services" />
            </div>
            <CardBody>
              <CardTitle>{data.homepageJson.sections[1].blocks[0].heading}</CardTitle>
              <CardText>{data.homepageJson.sections[1].blocks[0].content}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <Card>
            <div className="rounded-circle bg-light">
              <CardImg top width="100%" src={data.homepageJson.sections[1].blocks[1].image} alt="Professional Web Design Services" />
            </div>
            <CardBody>
              <CardTitle>{data.homepageJson.sections[1].blocks[1].heading}</CardTitle>
              <CardText>{data.homepageJson.sections[1].blocks[1].content}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <Card>
            <div className="rounded-circle bg-light">
              <CardImg top width="100%" src={data.homepageJson.sections[1].blocks[2].image} alt="Professional Web Design Services" />
            </div>
            <CardBody>
              <CardTitle>{data.homepageJson.sections[1].blocks[2].heading}</CardTitle>
              <CardText>{data.homepageJson.sections[1].blocks[2].content}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <Card>
            <div className="rounded-circle bg-light">
              <CardImg top width="100%" src={data.homepageJson.sections[1].blocks[3].image} alt="Professional Web Design Services" />
            </div>
            <CardBody>
              <CardTitle>{data.homepageJson.sections[1].blocks[3].heading}</CardTitle>
              <CardText>{data.homepageJson.sections[1].blocks[3].content}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
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
  var top = introSection.current.offsetTop-130;
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
