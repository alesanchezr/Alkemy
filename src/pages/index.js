import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'

import VideoCarousel from '../components/videoCarousel'

// Import video assets
import video_1_jpg from '../assets/video/Home_Work/Home_work.jpg'
import video_1_mp4 from '../assets/video/Home_Work/Home_work.mp4'

import video_2_jpg from '../assets/video/Aloha-Mundo/Aloha-Mundo.jpg'
import video_2_mp4 from '../assets/video/Aloha-Mundo/Aloha-Mundo.mp4'

import video_3_jpg from '../assets/video/Office-Day/Office-Day.jpg'
import video_3_mp4 from '../assets/video/Office-Day/Office-Day.mp4'

import video_4_jpg from '../assets/video/Into_the_Wild/Into_the_Wild.jpg'
import video_4_mp4 from '../assets/video/Into_the_Wild/Into_the_Wild.mp4'

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
  },
  {
    img: video_4_jpg,
    mp4: video_4_mp4,
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
const HomePage = () => (
  <Layout
    pageTitle="Alkemy, Inc. | Web Design, Development, eCommerce, and Marketing"
    headerTitle={[false,""]}>

    {/* Section 1 - Hero */}
    <section className="homeHero">
    	<div  className="container-fluid px-0 position-relative">

        {/* Cover Video Slider */}
        <VideoCarousel slides={slideArray} showIndicators={false}/>

    		{/* Cover Text */}

    		<div id="cover-text">
    			<div  className="cover-text-1a">
    				Your Brand Deserves
    			</div>
    			<div  className="cover-text-1b">
    				Only The Best
    			</div>
    		</div>

    		{/* Cover CTA */}
        <div id="hero-cta-div"  className="d-none d-sm-block position-absolute">
          <a href="/about-alkemy/"  className="btn btn-primary btn-lg pulse">Learn More</a>
        </div>
      </div>
    </section>

  </Layout>
)

export default HomePage
