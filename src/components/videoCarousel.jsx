import React from 'react'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import ReactDOM from 'react-dom';
import '../assets/video/Home_Work/Home_work.mp4';


export default class VideoCarousel extends React.Component{
  constructor(props){
    super(props);

    this.slides = [
      {
        img: '../assets/video/Home_Work/Home_work.jpg',
        mp4: '../assets/video/Home_Work/Home_work.mp4',
        webm: '../assets/video/Home_Work/Home_work.webm',
        ogv: '../assets/video/Home_Work/Home_work.ogv'
      },
      {
        img: '/Aloha-Mundo/Aloha-Mundo.jpg',
        mp4: '../assets/video/Aloha-Mundo/Aloha-Mundo.mp4',
        webm: '../assets/video/Aloha-Mundo/Aloha-Mundo.webm',
        ogv: '../assets/video/Aloha-Mundo/Aloha-Mundo.ogv'
      },
      {
        img: '../assets/video/Office-Day/Office-Day.jpg',
        mp4: '../assets/video/Office-Day/Office-Day.mp4',
        webm: '../assets/video/Office-Day/Office-Day.webm',
        ogv: ''
      },
      {
        img: '../assets/video/Aloha-Mundo/Aloha-Mundo.jpg',
        mp4: '../assets/video/Aloha-Mundo/Aloha-Mundo.mp4',
        webm: '../assets/video/Aloha-Mundo/Aloha-Mundo.webm',
        ogv: '../assets/video/Aloha-Mundo/Aloha-Mundo.ogv'
      }
    ];

    this.state = {
      counter: 0
    };

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }


  prevSlide(){
    var prevSlide = this.state.counter - 1 < 0 ? this.props.slides.length - 1 : this.state.counter - 1;
    this.setState({
      counter: prevSlide
    })
  }

  nextSlide(){
    var nextSlide = this.state.counter + 1 < this.props.slides.length ? this.state.counter + 1 : 0;
    this.setState({
      counter: nextSlide
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
      <div className="carousel" style={{height:'100vh',width:'100vw'}} >
        {this.showIndicators}
        <TransitionGroup>
          <CSSTransition
            timeout={500}
            classNames="fade"
            >
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              className="overflow-hidden"
              style={{objectFit:'cover',width:'100%',height:'100%'}}
              key={this.state.counter}
              >
              {
                (this.slides[this.state.counter].mp4!=='')
                ? (
                    <source
                      type="video/mp4"
                      src={this.slides[this.state.counter].mp4}
                    />
                  )
                :''
                (this.slides[this.state.counter].webm!=='')
                ? (
                    <source
                      type="video/webm"
                      src={this.slides[this.state.counter].webm}
                    />
                  )
                :''
                (this.slides[this.state.counter].ogv!=='')
                ? (
                    <source
                      type="video/ogg"
                      src={this.props.slides[this.state.counter].ogv}
                    />
                  )
                :''
              }
            </video>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}
