import React from "react"
import PropTypes from 'prop-types'
import {
    Row, Col
} from "reactstrap"
import Chart from "react-apexcharts"

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
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
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
                            showOn: "always",
                            name: {
                                show: false,
                            },
                            value: {
                                formatter: function(value) {
                                    return value
                                },
                                textAnchor: 'middle',
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
            position: 0
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
        this.container = React.createRef()
    }

    renderSkillRows = ()=>{
        return (
            <Row>
                {this.state.series.map((e, index) => {
                    return (
                        <Col key={index}>
                            <div className="radialbar">
                                <Chart
                                    options={this.state.options}
                                    series={[e]}
                                    type="radialBar"
                                    height="200"
                                />
                            </div>
                        </Col>
                    )
                })}
            </Row>
        )
    }

    render(){
        return (
            <div ref={this.container}>
                {this.renderSkillRows()}
            </div>
        )
    }
}

SkillGraph.propTypes = {
    labels: PropTypes.array, 
    series: PropTypes.array, 
}