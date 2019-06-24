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
                
            </>
        )
    }

    const renderAlternate = ()=>{
        return (
            <>
                
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
    blogdata: PropTypes.array, // Blog data from allMarkdownRemark
}

export default RecentBlogs