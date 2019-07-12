import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

export default class SkillGraph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: [],
        };
    }

    componentDidMount() {
        this.setState({
            skills: this.props.skills,
        });
    }

    renderSkillRows = () => {
        return (
            <Row>
                {this.state.skills.map((e, index) => {
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
                                        {e.level}%
                                    </text>
                                    <circle
                                        className="donut-ring"
                                        filter="url(#Bevel)"
                                        cx="21"
                                        cy="21"
                                        r="15.91549430918954"
                                        fill="transparent"
                                        stroke="#bdbdbe"
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
                                                stopColor="#2bb3e5"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#1E5E8D"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <filter
                                        id="Bevel"
                                        filterUnits="objectBoundingBox"
                                        x="-10%"
                                        y="-10%"
                                        width="150%"
                                        height="150%"
                                    >
                                        <feGaussianBlur
                                            in="SourceAlpha"
                                            stdDeviation="3"
                                            result="blur"
                                        />
                                        <feSpecularLighting
                                            in="blur"
                                            surfaceScale="5"
                                            specularConstant="0.5"
                                            specularExponent="10"
                                            result="specOut"
                                            lightingColor="white"
                                        >
                                            <fePointLight
                                                x="-5000"
                                                y="-10000"
                                                z="20000"
                                            />
                                        </feSpecularLighting>
                                        <feComposite
                                            in="specOut"
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="specOut2"
                                        />
                                        <feComposite
                                            in="SourceGraphic"
                                            in2="specOut2"
                                            operator="arithmetic"
                                            k1="0"
                                            k2="1"
                                            k3="1"
                                            k4="0"
                                            result="litPaint"
                                        />
                                    </filter>
                                    <filter
                                        id="Bevel2"
                                        filterUnits="objectBoundingBox"
                                        x="-10%"
                                        y="-10%"
                                        width="150%"
                                        height="150%"
                                    >
                                        <feGaussianBlur
                                            in="SourceAlpha"
                                            stdDeviation="0.5"
                                            result="blur"
                                        />
                                        <feSpecularLighting
                                            in="blur"
                                            surfaceScale="5"
                                            specularConstant="0.5"
                                            specularExponent="10"
                                            result="specOut"
                                            lightingColor="white"
                                        >
                                            <fePointLight
                                                x="-5000"
                                                y="-10000"
                                                z="0000"
                                            />
                                        </feSpecularLighting>
                                        <feComposite
                                            in="specOut"
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="specOut2"
                                        />
                                        <feComposite
                                            in="SourceGraphic"
                                            in2="specOut2"
                                            operator="arithmetic"
                                            k1="0"
                                            k2="1"
                                            k3="1"
                                            k4="0"
                                            result="litPaint"
                                        />
                                    </filter>
                                    <circle
                                        className="donut-segment"
                                        cx="21"
                                        cy="-21"
                                        r="15.91549430918954"
                                        fill="transparent"
                                        filter="url(#Bevel2)"
                                        stroke="url(#linear)"
                                        strokeWidth="3"
                                        strokeDasharray={e.level}
                                        strokeDashoffset="0"
                                        transform="rotate(90)"
                                    ></circle>
                                </svg>
                                <h6>{e.name}</h6>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        );
    };

    render() {
        return <div>{this.renderSkillRows()}</div>;
    }
}

SkillGraph.propTypes = {
    skills: PropTypes.array,
};
