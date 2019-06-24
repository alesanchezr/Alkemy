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

    const renderBlogHome = ()=>{
        return (
            <>
                <CardDeck className="mb-3">
                    <Row>
                        <Col xs={12} md={3}>
                            <Card className="blogCard h-100">
                                <Img
                                    className="card-img-top"
                                    fluid={
                                        props.blogdata[1].node.frontmatter.cover
                                            .childImageSharp.fluid
                                    }
                                    alt={
                                        props.blogdata[1].node.frontmatter.title
                                    }
                                />
                                <CardBody>
                                    <CardTitle>
                                        {
                                            props.blogdata[1].node.frontmatter
                                                .title
                                        }
                                    </CardTitle>
                                    <CardText>
                                        {trunc(
                                            props.blogdata[1].node.frontmatter
                                                .excerpt
                                        )}
                                    </CardText>
                                    <BlogInfoBar
                                        category={
                                            props.blogdata[1].node.frontmatter
                                                .category
                                        }
                                        time={
                                            props.blogdata[1].node.frontmatter
                                                .readingTime
                                        }
                                        author={
                                            props.blogdata[1].node.frontmatter
                                                .author
                                        }
                                        layout="vertical"
                                        className="my-4"
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={9}>
                            <Card className="blogCard h-100">
                                <Row className="h-100 align-items-center">
                                    <Col
                                        xs={12}
                                        md={6}
                                        className="h-100 px-5 align-items-center"
                                    >
                                        {/* Latest Blog Information */}
                                        <Link
                                            to={
                                                props.blogdata[0].node
                                                    .frontmatter.path
                                            }
                                        >
                                            <h3>
                                                {
                                                    props.blogdata[0].node
                                                        .frontmatter.title
                                                }
                                            </h3>
                                            <p className="my-2">
                                                {
                                                    props.blogdata[0].node
                                                        .frontmatter.excerpt
                                                }
                                            </p>
                                            <BlogInfoBar
                                                category={
                                                    props.blogdata[0].node
                                                        .frontmatter.category
                                                }
                                                time={
                                                    props.blogdata[0].node
                                                        .frontmatter.readingTime
                                                }
                                                author={
                                                    props.blogdata[0].node
                                                        .frontmatter.author
                                                }
                                                layout="vertical"
                                                className="my-4"
                                            />
                                        </Link>
                                    </Col>
                                    <Col
                                        xs={12}
                                        md={6}
                                        className="mb-5 mb-md-0 order-first order-md-last h-100"
                                    >
                                        {/* Latest Blog Image */}
                                        <Img
                                            className="h-100"
                                            fluid={
                                                props.blogdata[0].node
                                                    .frontmatter.cover
                                                    .childImageSharp.fluid
                                            }
                                            alt="Alkemy is always the best fit for your business and digital presence."
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </CardDeck>
                <CardDeck>
                    <Row>{renderRow()}</Row>
                </CardDeck>
            </>
        )
    }

    const renderRow = ()=>{
        const blogsArray = props.blogdata.splice(0,2)
        return blogsArray.map((e,index)=>{
            return (
                <Col xs={12} md={3} key={index}>
                    <Card className="blogCard">
                        <Img
                            className="card-img-top h-50"
                            fluid={
                                e.node.frontmatter.cover
                                    .childImageSharp.fluid
                            }
                            alt={e.node.frontmatter.title}
                        />
                        <CardBody>
                            <CardTitle>
                                {e.node.frontmatter.title}
                            </CardTitle>
                            <CardText>
                                {trunc(
                                    e.node.frontmatter.excerpt
                                )}
                            </CardText>
                            <BlogInfoBar
                                category={
                                    e.node.frontmatter.category
                                }
                                time={
                                    e.node.frontmatter
                                        .readingTime
                                }
                                author={
                                    e.node.frontmatter.author
                                }
                                layout="vertical"
                                className="my-4"
                            />
                        </CardBody>
                    </Card>
                </Col>
            )
        })
    }

    const renderAlternate = ()=>{
        return (
            <>
                
            </>
        )
    }

    return (
        // eslint-disable-next-line react/prop-types
        <div {...other} className={props.className+"h-100 px-5"}>
            {
                props.layout.toLowerCase()==='home'
                ? renderBlogHome()
                : renderAlternate()
            }
        </div>
    )
}

RecentBlogs.propTypes = {
    layout: PropTypes.string, // How to render
    blogdata: PropTypes.array, // Blog data from allMarkdownRemark
}

export default RecentBlogs