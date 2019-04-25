import React from 'react'
import PropTypes from 'prop-types'

class VideoCarousel extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentIndex: 0,
      slides: this.props.slides,
      vidClasses: "vc-video",
      containerClasses: "vc-wrap"
    };

    this.handleEnded = this.handleEnded.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }


  handlePlay = (e) => {
    this.video.play();
  }

  handleEnded = (e) =>{
    const nextIndex = this.state.currentIndex + 1 < this.state.slides.length ? this.state.currentIndex + 1 : 0
    this.setState({ currentIndex: nextIndex });
  }

  prevSlide = () =>{
    var prevSlide = this.state.currentIndex - 1 < 0 ? this.state.slides.length - 1 : this.state.currentIndex - 1;
    this.setState({
      currentIndex: prevSlide
    })
  }

  nextSlide = () =>{
    var nextSlide = this.state.currentIndex + 1 < this.state.slides.length ? this.state.currentIndex + 1 : 0;
    this.setState({
      currentIndex: nextSlide
    })
  }


  render(){
    return(
      <div className="vc">
        <div className={this.state.containerClasses} >
          {
            (this.props.showIndicators===true)
            ? (
                <>
                <div className="carousel__prev" onClick={this.prevSlide}>◀︎</div>
                <div className="carousel__next" onClick={this.nextSlide}>▶︎</div>
                </>
              )
            : ("")
          }
          <div style={{background:'transparent'}}>{this.props.children}</div>
          {
            typeof this.state.slides !=='undefined'
            ?(
              <video
                autoPlay={true}
                muted={true}
                playsInline={true}
                crossOrigin="true"
                onPlay={this.handlePlay}
                onEnded={this.handleEnded}
                className={this.state.vidClasses}
                src={this.state.slides[this.state.currentIndex].mp4}
                style={{objectFit:'cover',width:'100%',height:'100%',overflow:'hidden'}}
                poster={this.state.slides[this.state.currentIndex].img}
                ref={el => {this.video = el}}
                >
              </video>
            ):null}
        </div>
      </div>
    )
  }
}

VideoCarousel.propTypes = {
  slides: PropTypes.array
}

export default VideoCarousel;
