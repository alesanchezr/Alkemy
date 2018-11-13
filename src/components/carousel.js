import React from "react";
import { Carousel } from "react-responsive-carousel";


export default () => (

  <Carousel
    showArrows={false}
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    autoPlay={true}
    infiniteLoop={true}
    swipeable={false}
    interval={10000}
    style={{width:'100vw',height:'100vh'}}
  >
    <div style={{width:'100vw',height:'100vh'}}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className="overflow-hidden"
        style={{objectFit:'cover',width:'100%',height:'100%'}}>
        <source
          type="video/mp4"
          src="https://staging.coverr.co/s3/mp4/Indian%20Tea.mp4"
        />
        <source
          type="video/webm"
          src="https://staging.coverr.co/s3/webm/Indian%20Tea.webm"
        />
      </video>
    </div>
    <div style={{width:'100vw',height:'100vh'}}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className="overflow-hidden"
        style={{objectFit:'cover',width:'100%',height:'100%'}}>
        <source
          type="video/mp4"
          src="https://staging.coverr.co/s3/mp4/Office-Day.mp4"
        />
        <source
          type="video/webm"
          src="https://staging.coverr.co/s3/mp4/Office-Day.webm"
        />
      </video>
    </div>
  </Carousel>
);
