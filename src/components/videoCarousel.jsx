import React from "react";
import PropTypes from "prop-types";

class VideoCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            slides: [],
            vidClasses: "vc-video bg-transparent",
            containerClasses: "vc-wrap bg-transparent",
        };

        this.handleEnded = this.handleEnded.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            slides: this.props.slides
        })
    }
    handlePlay = () => {
        this.video.play();
    };

    handleEnded = () => {
        const nextIndex =
            this.state.currentIndex + 1 < this.state.slides.length
                ? this.state.currentIndex + 1
                : 0;
        this.setState({ currentIndex: nextIndex });
    };

    prevSlide = () => {
        var prevSlide =
            this.state.currentIndex - 1 < 0
                ? this.state.slides.length - 1
                : this.state.currentIndex - 1;
        this.setState({
            currentIndex: prevSlide,
        });
    };

    nextSlide = () => {
        var nextSlide =
            this.state.currentIndex + 1 < this.state.slides.length
                ? this.state.currentIndex + 1
                : 0;
        this.setState({
            currentIndex: nextSlide,
        });
    };

    render() {
        return (
            <div className="vc">
                <div className={this.state.containerClasses}>
                    {this.props.showIndicators === true ? (
                        <>
                            <div
                                className="carousel__prev"
                                onClick={this.prevSlide}
                            >
                                ◀︎
                            </div>
                            <div
                                className="carousel__next"
                                onClick={this.nextSlide}
                            >
                                ▶︎
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                    {this.props.children}
                    {typeof this.state.slides !== "undefined" ? (
                        <video
                            autoPlay={true}
                            muted={true}
                            playsInline={true}
                            crossOrigin="true"
                            onPlay={this.handlePlay}
                            onEnded={this.handleEnded}
                            className={this.state.vidClasses}
                            src={this.state.slides.length>0?this.state.slides[this.state.currentIndex].mp4:this.props.slides[0].mp4}
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                            }}
                            poster={
                                this.state.slides.length > 0 ? this.state.slides[this.state.currentIndex].img : this.props.slides[0].img
                            }
                            ref={el => {
                                this.video = el;
                            }}
                        ></video>
                    ) : null}
                </div>
            </div>
        );
    }
}

VideoCarousel.propTypes = {
    slides: PropTypes.array,
    showIndicators: PropTypes.bool,
    children: PropTypes.object,
};

export default VideoCarousel;
