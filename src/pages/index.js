import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import VideoCarousel from '../components/videoCarousel'

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
    <section id="hero"  className="homeHero">
    	<div  className="container-fluid px-0 position-relative">

        {/* Cover Video Slider */}
        <VideoCarousel/>

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
