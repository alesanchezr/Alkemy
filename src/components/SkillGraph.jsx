import React from "react"
import PropTypes from 'prop-types'
import {
    Row, Col
} from "reactstrap"


export default class SkillGraph extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            labels: ["Percent"],
            series: [68],
        }
    }

    componentDidMount(){
        this.setState({
            labels: this.props.labels,
            series: this.props.series,
        })
    }

    renderSkillRows = ()=>{
        return (
            <Row>
                {this.state.series.map((e, index) => {
                    return (
                        <Col xs={12} sm={4} md={2} key={index}>
                            <div className="radialbar text-center mb-2">
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 42 42"
                                    className="donut"
                                >
                                    <circle
                                        className="donut-hole"
                                        cx="21"
                                        cy="21"
                                        r="15.91549430918954"
                                        fill="#fff"
                                    ></circle>
                                    <text
                                        x="50%"
                                        y="50%"
                                        textAnchor="middle"
                                        fill="black"
                                        dy=".3em"
                                        fontSize="10"
                                    >
                                        {e}%
                                    </text>
                                    <circle
                                        className="donut-ring"
                                        cx="21"
                                        cy="21"
                                        r="15.91549430918954"
                                        fill="transparent"
                                        stroke="#d2d3d4"
                                        strokeWidth="3"
                                    ></circle>
                                    <defs>
                                        <linearGradient
                                            id="linear"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="0%"
                                            gradientTransform="rotate(90)"
                                        >
                                            <stop
                                                offset="0%"
                                                stop-color="#2bb3e5"
                                            />
                                            <stop
                                                offset="100%"
                                                stop-color="#1E5E8D"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <circle
                                        className="donut-segment"
                                        cx="21"
                                        cy="-21"
                                        r="15.91549430918954"
                                        fill="transparent"
                                        stroke="url(#linear)"
                                        strokeWidth="3"
                                        strokeDasharray={e}
                                        strokeDashoffset="0"
                                        transform="rotate(90)"
                                    ></circle>
                                </svg>
                                <h6>{this.state.labels[index]}</h6>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        )
    }

    calcDasharray = (e)=>{
        // format "size remaining", ex. "85 15" - 85% of donut
        return (e+" "+(100-e))
    }

    render(){
        return <div>{this.renderSkillRows()}</div>
    }
}

SkillGraph.propTypes = {
    labels: PropTypes.array, 
    series: PropTypes.array, 
}