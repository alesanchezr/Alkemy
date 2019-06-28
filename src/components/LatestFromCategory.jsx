/* eslint-disable no-console */
import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardDeck,
} from "reactstrap"
import BlogInfoBar from "./BlogInfoBar.jsx"

const RecentBlogs = (props) => {
    const {...other} = props
    
    const trunc = data => {
        return data.substring(0, 50) + "..."
    }

    const renderCards = ()=>{
        // eslint-disable-next-line no-undef
        const blogsArray = props.blogdata
        if(props.blogdata.length>0) { 
            blogsArray.splice(0,2) 
        }
        return blogsArray.map((e,index)=>{
            return (
                <Col xs={12} key={index}>
                    <Card className="categoryCard">
                        <Link to={e.node.frontmatter.path}>
                            <Img
                                className="card-img-top"
                                fluid={
                                    e.node.frontmatter.cover.childImageSharp
                                        .fluid
                                }
                                alt={e.node.frontmatter.title}
                            />
                            <CardBody>
                                <CardTitle>
                                    {e.node.frontmatter.title}
                                </CardTitle>
                                <CardText>
                                    {trunc(e.node.frontmatter.excerpt)}
                                </CardText>
                                <BlogInfoBar
                                    category={e.node.frontmatter.category}
                                    time={e.node.frontmatter.readingTime}
                                    author={e.node.frontmatter.author}
                                    layout="vertical"
                                    className="my-4"
                                />
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
            )
        })
    }

    return (
        // eslint-disable-next-line react/prop-types
        <div {...other} className={props.className + "h-100 px-5"}>
            
            {renderCards}
        </div>
    )
}

RecentBlogs.propTypes = {
    blogdata: PropTypes.array, // Blog data from allMarkdownRemark
}

export default RecentBlogs