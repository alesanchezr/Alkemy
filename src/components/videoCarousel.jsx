import React from 'react'
import PropTypes from 'prop-types'

export default class VideoCarousel extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentIndex: 0,
      slides: this.props.slides
    };

    this.handleEnded = this.handleEnded.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount(){
    this.video.addEventListener("ended", e => this.handleEnded);
  }
  componentDidUpdate(prevProps, prevState) {
    this.video.play();
  }

  handleEnded(e) {
    const nextIndex = this.state.currentIndex + 1 < this.state.slides.length ? this.state.currentIndex + 1 : 0
    this.setState({ currentIndex: nextIndex });
  }

  prevSlide(){
    var prevSlide = this.state.currentIndex - 1 < 0 ? this.state.slides.length - 1 : this.state.currentIndex - 1;
    this.setState({
      currentIndex: prevSlide
    })
  }

  nextSlide(){
    var nextSlide = this.state.currentIndex + 1 < this.state.slides.length ? this.state.currentIndex + 1 : 0;
    this.setState({
      currentIndex: nextSlide
    })
  }

  showIndicators(){
    if(this.props.showIndicators===true){
      return(<div className="carousel__prev" onClick={this.prevSlide}>◀︎</div>)
    }
    if(this.props.showIndicators===true){
      return(<div className="carousel__next" onClick={this.nextSlide}>▶︎</div>)
    }
  }

  render(){
    return(
      <div className="vc-wrap" style={{height:'100vh',width:'100vw',overflow:'hidden'}} >
        {this.showIndicators}
        <video
          autoPlay="true"
          muted="true"
          playsInline="true"
          crossOrigin="true"
          onEnded={this.handleEnded}
          src={this.state.slides[this.state.currentIndex].mp4}
          style={{objectFit:'cover',width:'100%',height:'100%',overflow:'hidden'}}
          poster={this.state.slides[this.state.currentIndex].img}
          ref={el => {this.video = el}}
          />
      </div>
    )
  }
}

VideoCarousel.propTypes = {
  slides: PropTypes.array
}
