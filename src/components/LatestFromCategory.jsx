/* eslint-disable no-console */
import React,{useState} from "react"
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
} from "reactstrap"
import CustomSelect from "../components/CustomSelect.jsx"

const RecentBlogs = (props) => {
    const {...other} = props

    const [dropdown, setDropdown] = useState('')
    
    const trunc = data => {
        return data.substring(0, 50) + "..."
    }

   
    const renderCards = ()=>{
        // eslint-disable-next-line no-undef
        return props.blogdata
            .filter(e => {
                if(dropdown.length>0){
                    return e.node.frontmatter.category === dropdown
                }else return e
                
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
                        ref={byCategorySelect}
                        onChange={() =>
                            setDropdown(
                                byCategorySelect.current.state.selectedOption
                            )
                        }
                    />
                </Col>
            </Row>
            <Row>
                {byCategorySelect.current &&
                byCategorySelect.current.state.selectedOption.length > 0
                    ? renderCards()
                    : renderCards()}
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