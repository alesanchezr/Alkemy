/* eslint-disable no-console */
import React, { useState, useEffect } from "react"
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
} from "reactstrap"
// import CustomSelect from "../components/CustomSelect.jsx"
import Select from "react-select"

const RecentBlogs = (props) => {
    const {...other} = props

    const [latestDropdown, setLatestDropdown] = useState(props.categories[0].label)

    const trunc = data => {
        return data.substring(0, 50) + "..."
    }

    const handleSelectChange = option =>{
        setLatestDropdown(option)
        console.log(option)
    }

    const renderCards = ()=>{
        // eslint-disable-next-line no-undef
        return props.blogdata
            .filter(e => {
                if (latestDropdown.length>0) {
                    return e.node.frontmatter.category === latestDropdown
                } else return e
                
            })
            .map((e,index)=>{
            return (
                <Col xs={12} key={index} className="latestFromCategory">
                    <Card className="categoryCard mb-2">
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
                            </CardBody>
                        </Link>
                    </Card>
                </Col>
            )
        })
    }

    return (
        // eslint-disable-next-line react/prop-types
        <>
            <Row>
                <Col
                    xs={12}
                    {...other}
                    className={
                        "h-100 latestFromCategory py-4" +
                        (props.className ? " " + props.className : "")
                    }
                >
                    {/* Category Dropdown */}
                    <p className="text-muted">Latest Posts From:</p>
                    <Select
                        className="category-select"
                        classNamePrefix="select"
                        defaultValue={props.categories[0]}
                        name="categories"
                        options={props.categories}
                        ref={byCategorySelect}
                        onChange={value => handleSelectChange(value.label)}
                    />
                </Col>
            </Row>
            <Row>
                {latestDropdown.length > 0 ? renderCards() : renderCards()}
            </Row>
        </>
    )
}

const byCategorySelect = React.createRef()

RecentBlogs.propTypes = {
    blogdata: PropTypes.array, // Blog data from allMarkdownRemark
    categories: PropTypes.array
}

export default RecentBlogs