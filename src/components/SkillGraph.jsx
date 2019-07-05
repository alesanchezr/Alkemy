import React from "react"
import {isBrowser} from "gatsby"
import PropTypes from 'prop-types'
import {
    Row, Col
} from "reactstrap"

const Chart = isBrowser && import("react-apexcharts")


export default class SkillGraph extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: "70%",
                            background: "#fff",
                            position: "front",
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24,
                            },
                        },
                        track: {
                            background: "#fff",
                            strokeWidth: "67%",
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35,
                            },
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                formatter: function(value) {
                                    return value
                                },
                                textAnchor: "middle",
                                offsetY: 9,
                                offsetX: 5,
                                color: "#111",
                                fontSize: "30px",
                                show: true,
                            },
                        },
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: ["#ABE5A1"],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100],
                    },
                },
                stroke: {
                    lineCap: "round",
                },
                labels: ["Percent"],
            },
            series: [68],
        }
    }

    componentDidMount(){
        this.setState({
            options: {
                ...this.state.options,
                labels: this.props.labels,
            },
            series: this.props.series,
        })
    }

    renderSkillRows = ()=>{
        return (
            <Row>
                {this.state.series.map((e, index) => {
                    return (
                        <Col xs={12} sm={4} md={2} key={index}>
                            <div className="radialbar text-center">
                                <Chart
                                    options={this.state.options}
                                    series={[e]}
                                    type="radialBar"
                                    height="100%"
                                />
                                <h6>{this.state.options.labels[index]}</h6>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        )
    }

    render(){
        return <div>{this.renderSkillRows()}</div>
    }
}

SkillGraph.propTypes = {
    labels: PropTypes.array, 
    series: PropTypes.array, 
}