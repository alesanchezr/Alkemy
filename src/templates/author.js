import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { Context } from "../store/appContext.js"
import { addJS, fluidImageSmall } from "../utils/utils.js"
import Layout from "../components/layout"
import _ from "lodash"
import SEO from "../components/seo"
import { FormGroup, Label, Col, Row, Container } from "reactstrap"
import FreeWebsiteAnalysis from "../components/freeWebsiteAnalysis.jsx"
import Select from "react-select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/*
Layout props:
  renderHeaderSolid: Whether the top navigation should be solid or start transparent
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        string (subheader text)
      ]
  bodyClasses: additional classes to add to body tag
*/

class AuthorProfile extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      dropdown: ''
    }
    
    this.categorySelect = React.createRef()
  }
  
  handleDropdownChange = (value,actions)=>{
    this.setState({dropdown: value})

    // reset the search in store
    actions.search("")
    actions.searchTitle("")

    // redirect user to /alkemy-blog/ or /alkemy-blog/?cat=<:name> if other than home
    if (value.label.toLowerCase() === "blog home") {
        navigate("/alkemy-blog/")
    } else {
        // let category = value.label.replace(/\s/g, "+") // sanitize the name for use in url
        navigate(`/alkemy-blog/`, { state: {value} })
        // navigate(`/alkemy-blog/?cat=${category}`,{queryParam: category})
    }
  }

  render() {
    const pageTitle = "Alkemy Blog"
    const edges = this.props.data.allMarkdownRemark.edges
    const author = this.props.data.allAuthorsJson.edges[0].node

    let blogCategories = (jump = false) => {
        // create a categories array
        let categories =
            edges &&
            edges.map(e => {
                return e.node.frontmatter.category
            })
        categories = _.uniq(categories)

        // aux array
        let categoryArray = []

        // if it's the Jump to menu, push in a home case
        jump && categoryArray.push({ label: "Blog Home", value: "Blog Home" })

        // loop the category array and push in pairs to aux
        for (let i in categories) {
            categoryArray.push({ label: categories[i], value: categories[i] })
        }

        return categoryArray
    }

    // addJS(position,inner script,source) - adds JS to document dynamically for AddThis Toolbar
    addJS(
        `body`,
        null,
        `//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ae21853f0b21631`
    )

    
    return (
        <Layout
            location={this.props.location}
            title={author.name}
            headerTitle={[true, pageTitle]}
            search={true}
            bodyClasses="blog"
            renderHeaderSolid={true}
        >
            <SEO
                title={author.name}
                description={author.name + "-" + author.bio}
            />
            <Container fluid className="blog-author mb-5">
                <section className="blog-category-filter my-3">
                    <Row className="align-items-center h-100">
                        <Col md={8} className="d-none d-md-block" />
                        <Col xs={12} sm={4}>
                            {/* Category Dropdown */}
                            <FormGroup row className="align-items-center">
                                <Label
                                    for="categories"
                                    xs={3}
                                    className="text-right text-muted"
                                >
                                    Jump to:
                                </Label>
                                <Col xs={9}>
                                    <Context.Consumer>
                                        {({ actions }) => (
                                            <Select
                                                className="category-select"
                                                classNamePrefix="select"
                                                placeholder="Select a value..."
                                                name="categories"
                                                options={blogCategories(true)}
                                                ref={this.categorySelect}
                                                value={this.state.dropdown}
                                                onChange={value =>
                                                    this.handleDropdownChange(
                                                        value,
                                                        actions
                                                    )
                                                }
                                            />
                                        )}
                                    </Context.Consumer>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </section>
                <section className="blog-author-profile">
                    <Row>
                        <Col xs={12} md={4}>
                            <Img
                                className="h-100"
                                style={{ width: "90%" }}
                                fluid={author.photo.childImageSharp.fluid}
                                alt={
                                    "Photo of " +
                                    author.name +
                                    " from " +
                                    author.company
                                }
                            />
                            <Link to={"/author" + author.website}>
                                <FontAwesomeIcon
                                    icon="globe"
                                    className="authorWebsite mr-2 mt-3"
                                />
                                Visit My Website
                            </Link>
                        </Col>
                        <Col xs={12} md={8}>
                            <Row className="mb-2">
                                <Col>
                                    <h2>{author.name}</h2>
                                </Col>
                                <Col className="align-items-end">
                                    <p className="font-weight-bold">
                                        {author.position}
                                    </p>
                                </Col>
                                <Col xs={12} className="">
                                    <p className="text-muted">
                                        {author.company}
                                    </p>
                                </Col>
                            </Row>

                            <p>{author.bio}</p>
                        </Col>
                    </Row>
                </section>
            </Container>
            <FreeWebsiteAnalysis />
        </Layout>
    )
  }
}

export default AuthorProfile

export const query = graphql`
           query AuthorQuery($author: String!) {
               allMarkdownRemark {
                   edges {
                       node {
                           frontmatter {
                               category
                           }
                       }
                   }
               }
               allAuthorsJson(filter: { name: { regex: $author } }) {
                   edges {
                       node {
                           name
                           slug
                           bio
                           position
                           company
                           website
                           photo {
                               ...fluidImageSmall
                           }
                       }
                   }
               }
           }
       `
