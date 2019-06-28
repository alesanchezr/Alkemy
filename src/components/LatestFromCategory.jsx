/* eslint-disable no-console */
import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import _ from 'lodash'
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
import CustomSelect from "../components/CustomSelect.jsx"

const RecentBlogs = (props) => {
    const {...other} = props
    
    const trunc = data => {
        return data.substring(0, 50) + "..."
    }

    const renderCards = ()=>{
        // eslint-disable-next-line no-undef
        let blogsArray = props.blogdata
        console.log(blogsArray)
        if(categorySelect.current && 
            categorySelect.current.state.selectedOption.length > 0){
            blogsArray = props.blogdata.filter(e => {
                return _.includes(
                    e.node.frontmatter.category,
                    categorySelect.current.state.selectedOption
                )
            })
        }

        

        blogsArray.length>0 && (blogsArray.map((e,index)=>{
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
        }))
    }

    return (
        // eslint-disable-next-line react/prop-types
        <>
            <Row>
                <Col
                    xs={12}
                    {...other}
                    className={
                        "p-4 h-100 latestFromCategory" +
                        (props.className ? " " + props.className : "")
                    }
                >
                    {/* Category Dropdown */}
                    <CustomSelect
                        arrowcolor="blue"
                        classes="text-muted"
                        selectlabel=""
                        placeholder="Select a value..."
                        options={props.categories}
                        ref={categorySelect}
                    />
                </Col>
            </Row>
            <Row>{props.blogdata.length > 0 ? renderCards() : null}</Row>
        </>
    )
}

const categorySelect = React.createRef()

RecentBlogs.propTypes = {
    blogdata: PropTypes.array, // Blog data from allMarkdownRemark
    categories: PropTypes.array
}

export default RecentBlogs