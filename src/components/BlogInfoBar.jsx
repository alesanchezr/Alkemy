import React, { useState } from "react"
import PropTypes from 'prop-types'
import {
    Row, Col
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BlogInfoBar = (props) => {
    const {...other} = props
    return (
        // eslint-disable-next-line react/prop-types
        <Row {...other} className={props.className}>
            <Col xs={4}>
                <FontAwesomeIcon
                    icon={["far", "list-alt"]}
                    size="sm"
                    color="black"
                    className="mr-2"
                />
                {props.category}
            </Col>
            <Col xs={4} className="text-center">
                <FontAwesomeIcon
                    icon={["far", "clock"]}
                    size="sm"
                    color="black"
                    className="mr-2"
                />
                {props.time} Read
            </Col>
            <Col xs={4} className="text-right">
                <FontAwesomeIcon
                    icon={["far", "user"]}
                    size="sm"
                    color="black"
                    className="mr-2"
                />
                {props.author}
            </Col>
        </Row>
    )
}

BlogInfoBar.propTypes = {
    category: PropTypes.string, // Category of the post
    time: PropTypes.string, // Reading time
    author: PropTypes.string,
}

export default BlogInfoBar