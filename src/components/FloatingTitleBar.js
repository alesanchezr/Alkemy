import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { Col, Row, Container } from "reactstrap"
import { propTypes } from 'react-typography/dist/GoogleFont';
import BlogInfoBar from "./BlogInfoBar.jsx"


const FloatingTitleBar = props => {
    const {...style} = props.style
    const {className} = props
    return (
        <Container
            fluid
            className="d-none d-md-block position-sticky text-white blog-title-bar"
            style={{ ...style }}
        >
            <Row className="align-items-center">
                <Col md={9}>
                    <h3 className="mb-0">{props.title}</h3>
                </Col>
                <Col md={3}>
                    <BlogInfoBar
                        category={props.category}
                        time={props.time}
                        layout="horizontal"
                        iconColor="white"
                    />
                </Col>
            </Row>
        </Container>
    )
}

FloatingTitleBar.PropTypes = {
    title: propTypes.string,
    category: propTypes.string,
    time: propTypes.string
}
export default FloatingTitleBar
