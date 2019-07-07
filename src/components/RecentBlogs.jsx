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
    CardFooter,
} from "reactstrap"
import BlogInfoBar from "./BlogInfoBar.jsx"

const RecentBlogs = (props) => {
    const {...other} = props
    
    const trunc = data => {
        return data.substring(0, 50) + "..."
    }

    const blogData = props.blogdata
    console.log('blogdata: ',blogData)

    const renderBlogHome = ()=>{
        if(blogData.length>1)
            return (
                <>
                    <CardDeck className="mb-3">
                        <Row className="no-gutters">
                            <Col xs={12} md={3}>
                                <Card className="blogCard">
                                    <Row className="no-gutters">
                                        <Col xs={12}>
                                            <Link
                                                to={
                                                    blogData[1].node.frontmatter
                                                        .path
                                                }
                                            >
                                                <Img
                                                    imgStyle={{
                                                        minHeight: "200px",
                                                        height: "200px",
                                                    }}
                                                    className="card-img-top"
                                                    fluid={
                                                        blogData[1].node.frontmatter
                                                            .cover.childImageSharp
                                                            .fluid
                                                    }
                                                    alt={
                                                        blogData[1].node.frontmatter
                                                            .title
                                                    }
                                                />
                                                <CardBody className="d-flex flex-column align-items-center">
                                                    <CardTitle className="font-weight-bold">
                                                        {
                                                            blogData[1].node
                                                                .frontmatter.title
                                                        }
                                                    </CardTitle>
                                                    <CardText>
                                                        {trunc(
                                                            blogData[1].node
                                                                .frontmatter.excerpt
                                                        )}
                                                    </CardText>
                                                    <BlogInfoBar
                                                        category={
                                                            blogData[1].node
                                                                .frontmatter
                                                                .category
                                                        }
                                                        time={
                                                            blogData[1].node
                                                                .frontmatter
                                                                .readingTime
                                                        }
                                                        author={
                                                            blogData[1].node
                                                                .frontmatter.author
                                                        }
                                                        layout="vertical"
                                                        className="my-4"
                                                    />
                                                </CardBody>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col xs={12} md={9}>
                                <Card className="blogCard">
                                    <Row className="align-items-center no-gutters">
                                        <Col xs={12} md={6} className="p-4">
                                            {/* Latest Blog Information */}
                                            <Link
                                                to={
                                                    blogData[0].node.frontmatter
                                                        .path
                                                }
                                            >
                                                <CardTitle tag="h3">
                                                    {
                                                        blogData[0].node.frontmatter
                                                            .title
                                                    }
                                                </CardTitle>
                                                <p className="my-2">
                                                    {
                                                        blogData[0].node.frontmatter
                                                            .excerpt
                                                    }
                                                </p>
                                                <BlogInfoBar
                                                    category={
                                                        blogData[0].node.frontmatter
                                                            .category
                                                    }
                                                    time={
                                                        blogData[0].node.frontmatter
                                                            .readingTime
                                                    }
                                                    author={
                                                        blogData[0].node.frontmatter
                                                            .author
                                                    }
                                                    layout="vertical"
                                                    className="mt-4"
                                                />
                                            </Link>
                                        </Col>
                                        <Col
                                            xs={12}
                                            md={6}
                                            className="mb-5 mb-md-0 mb-lg-0 mb-xl-0 order-first order-md-last h-100"
                                        >
                                            {/* Latest Blog Image */}
                                            <Img
                                                className="h-100"
                                                fluid={
                                                    blogData[0].node.frontmatter
                                                        .cover.childImageSharp.fluid
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
        else renderAlternate()
    }

    const renderRow = ()=>{
        // eslint-disable-next-line no-undef
        const blogsArray = blogData

        blogData.length>0 &&
            blogsArray.splice(0,2)
        
        blogsArray.length>4 &&
            blogsArray.slice(0,4)

        return blogsArray.map((e,index)=>{
            return (
                <Col xs={12} md={3} key={index}>
                    <Card className="blogCard">
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
                                <CardTitle className="text-bold">
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
                                    className="my-2"
                                />
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
            )
        })
    }

    const renderAlternate = ()=>{
        for(let i=0;i<props.blogdata.length;i+4){
            let segment = props.blogdata.slice(i-4,4)
            console.log('segment ',segment,i)
            return (
                <CardDeck>
                    {segment.map((e, index) => {
                        return (
                            <Card
                                className="blogCard alt"
                                key={index}
                            >
                                <Link to={e.node.frontmatter.path}>
                                    <Img
                                        className="card-img-top"
                                        fluid={
                                            e.node.frontmatter.cover
                                                .childImageSharp.fluid
                                        }
                                        alt={e.node.frontmatter.title}
                                    />
                                    <CardBody>
                                        <CardTitle className="text-bold">
                                            {e.node.frontmatter.title}
                                        </CardTitle>
                                        <CardText>
                                            {trunc(
                                                e.node.frontmatter.excerpt
                                            )}
                                        </CardText>
                                    </CardBody>
                                    <CardFooter>
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
                                    </CardFooter>
                                </Link>
                            </Card>
                        )
                    })}
                </CardDeck>
            )
        }
    }

    return (
        // eslint-disable-next-line react/prop-types
        <div {...other} className={props.className + "h-100"}>
            {props.layout.toLowerCase() === "home" ? (
                renderBlogHome()
            ) : renderAlternate()}
        </div>
    )
}

RecentBlogs.propTypes = {
    layout: PropTypes.string, // How to render
    blogdata: PropTypes.array, // Blog data from allMarkdownRemark
}

export default RecentBlogs