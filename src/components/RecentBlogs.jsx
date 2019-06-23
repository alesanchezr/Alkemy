import React, { useState } from "react"
import PropTypes from 'prop-types'
import {
    Row, Col
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BlogInfoBar from "./BlogInfoBar.jsx"

const RecentBlogs = (props) => {
    const {...other} = props

    const renderBlogHome = ()=>{
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
                    <p className="d-flex align-items-center text-center">
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

    const renderAlternate = ()=>{
        return (
            <>
                <Col xs={12}>
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
                <Col xs={12}>
                    <p className="d-flex align-items-center">
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
        <Row {...other} className={props.className+"h-100 px-5"}>
            {
                props.layout.toLowerCase()==='home'
                ? renderBlogHome()
                : renderAlternate()
            }
        </Row>
    )
}

RecentBlogs.propTypes = {
    layout: PropTypes.string, // How to render
    data: PropTypes.array, // Blog data from allMarkdownRemark
}

export default RecentBlogs