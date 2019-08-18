import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Col, Row, Container } from "reactstrap";
import { propTypes } from "react-typography/dist/GoogleFont";
import BlogInfoBar from "./BlogInfoBar.jsx";

const FloatingTitleBar = props => {
    const { ...style } = props.style && props.style;
    return (
        <Container
            fluid
            className="position-sticky text-white blog-title-bar alk-container"
            style={{ ...style }}
        >
            <Row className="align-items-center h-100">
                <Col xs={12} md={9}>
                    <h3 className="mb-0">{props.title}</h3>
                </Col>
                <Col md={3} className="d-none d-md-block">
                    <BlogInfoBar
                        category={props.category}
                        time={props.time}
                        layout="horizontal"
                        iconColor="white"
                    />
                </Col>
            </Row>
        </Container>
    );
};

FloatingTitleBar.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    time: PropTypes.string,
    style: PropTypes.object,
};
export default FloatingTitleBar;
