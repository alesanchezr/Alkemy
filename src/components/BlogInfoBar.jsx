import React, { useState } from "react"
import PropTypes from 'prop-types'
import {
    Row, Col
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BlogInfoBar = (props) => {
    const {...other} = props

    const renderHorizontal = ()=>{
        return (
            <>
                <Col xs={4}>
                    <p className="d-flex align-items-center">
                        <FontAwesomeIcon
                            icon={["far", "list-alt"]}
                            size="sm"
                            color="black"
                            className="mr-2"
                        />
                        {props.category}
                    </p>
                </Col>
                <Col xs={4}>
                    <p className="d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                            icon={["far", "clock"]}
                            size="sm"
                            color="black"
                            className="mr-2"
                        />
                        {props.time} Read
                    </p>
                </Col>
                <Col xs={4}>
                    <p className="d-flex align-items-center justify-content-end">
                        <FontAwesomeIcon
                            icon={["far", "user"]}
                            size="sm"
                            color="black"
                            className="mr-2"
                        />
                        {props.author}
                    </p>
                </Col>
            </>
        )
    }

    const renderVertical = ()=>{
        return (
            <>
                <Col xs={12}>
                    <p className="d-flex align-items-center mb-0">
                        <FontAwesomeIcon
                            icon={["far", "list-alt"]}
                            size="sm"
                            color="black"
                            className="mr-2"
                        />
                        {props.category}
                    </p>
                </Col>
                <Col xs={12}>
                    <p className="d-flex align-items-center mb-0">
                        <FontAwesomeIcon
                            icon={["far", "clock"]}
                            size="sm"
                            color="black"
                            className="mr-2"
                        />
                        {props.time} Read
                    </p>
                </Col>
            </>
        )
    }

    return (
        // eslint-disable-next-line react/prop-types
        <Row {...other} className={props.className+' align-items-center'}>
            {
                props.layout.toLowerCase()==='horizontal'
                ? renderHorizontal()
                : renderVertical()
            }
        </Row>
    )
}

BlogInfoBar.propTypes = {
    category: PropTypes.string, // Category of the post
    time: PropTypes.string, // Reading time
    author: PropTypes.string, // Who Wrote the Post
    layout: PropTypes.string // Horizontal or Vertical
}

export default BlogInfoBar