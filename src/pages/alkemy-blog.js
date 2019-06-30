import React,{useState} from "react"
import _ from "lodash"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Context } from "../store/appContext.js"
import { addJS, fluidImageSmall } from "../utils/utils.js"
import Layout from "../components/layout"
import ScrollWrapper from "../components/scrollWrapper.jsx"
import { Button, Col, Row, Label, FormGroup } from "reactstrap"
import FreeWebsiteAnalysis from "../components/freeWebsiteAnalysis.jsx"
import SEO from "../components/seo"
import Select from "react-select"
import BlogInfoBar from "../components/BlogInfoBar.jsx"
import RecentBlogs from "../components/RecentBlogs.jsx"
import LatestFromCategory from "../components/LatestFromCategory.jsx"


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

// eslint-disable-next-line
const AlkemyBlog = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    // pageTitle: SEO friendly title for the title bar
    const pageTitle = "Alkemy Blog"
    // define state hook for category dropdown
    const [dropdown, setDropdown] = useState('')
    const [filterBySearch, setFilter] = useState(false)
    const [searchResults, setSearchResults] = useState(0)

    // addJS(position,inner script,source) - adds JS to document dynamically for AddThis Toolbar
    addJS(
        `body`,
        null,
        `//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ae21853f0b21631`
    )

    let createBlogArray = (arr,home=true) => {
        let blogArray = arr.map(e=>e)
        if (home && blogArray.length > 0) blogArray.shift()
        return blogArray
    }

    let resetDropdown = ()=>{
        setDropdown("")
    }
    let resetSearch = actions => {
        setFilter(false)
        setSearchResults(0)
        actions.search("")
        actions.searchTitle("")
    }

    let blogCategories = (jump=false) => {
        // create a categories array
        let categories =
            edges && edges.map(e => {
                return e.node.frontmatter.category
            })
        categories = _.uniq(categories)

        // aux array
        let categoryArray = []

        // if it's the Jump to menu, push in a home case
        jump && categoryArray.push({ label: "Blog Home", value: "Blog Home" })

        // loop the category array and push in pairs to aux
        for(let i in categories){
            categoryArray.push({label: categories[i],value: categories[i]})
        }

        return categoryArray
    }

    const handleDropdownChange = (value,actions)=>{
        setDropdown(value)
        resetSearch(actions)
    }

    const renderView = (store)=>{
        let blogs = edges.map(e => e)
        if (store.searchResults.length > 0) {
            let results = store.searchResults
            blogs = blogs.filter(e => {
                for (let item in results) {
                    if (results[item].path === e.node.frontmatter.path) return e
                }
            })
            setFilter(true)
            setSearchResults(blogs.length)
            resetDropdown()
        } else if (dropdown.value && dropdown.value.length > 0) {
            if(dropdown.value.toLowerCase()!='blog home'){
                blogs = blogs.filter(e => {
                    return e.node.frontmatter.category === dropdown.value
                })
            }else{
                blogs = edges.map(e => e)
            }
            
            setFilter(false)
            setSearchResults(0)
        }
        
        if (filterBySearch === false) {
            return (
                <>
                    {_.isEqual(_.sortBy(blogs), _.sortBy(edges)) ? (
                        <section className="blog-featured position-relative px-4">
                            <Row className="h-100 align-items-center">
                                <Col xs={12} md={6} className="h-100 px-5">
                                    <h2>
                                        {blogs &&
                                            blogs[0].node.frontmatter.title}
                                    </h2>
                                    <p className="my-4">
                                        {blogs &&
                                            blogs[0].node.frontmatter.excerpt}
                                    </p>
                                    <BlogInfoBar
                                        category={
                                            blogs[0].node.frontmatter.category
                                        }
                                        time={
                                            blogs[0].node.frontmatter
                                                .readingTime
                                        }
                                        author={
                                            blogs[0].node.frontmatter.author
                                        }
                                        layout="horizontal"
                                        className="my-4"
                                    />
                                    <Button
                                        to={blogs[0].node.frontmatter.path}
                                        tag={Link}
                                        color="primary"
                                        className="my-4"
                                        block
                                    >
                                        Read Full Post
                                    </Button>
                                </Col>
                                <Col
                                    xs={12}
                                    md={6}
                                    className="mb-5 mb-md-0 order-first order-md-last px-4"
                                >
                                    <Img
                                        className="h-100"
                                        fluid={
                                            blogs[0].node.frontmatter.cover
                                                .childImageSharp.fluid
                                        }
                                        alt="Alkemy is always the best fit for your business and digital presence."
                                    />
                                </Col>
                            </Row>
                        </section>
                    ) : null}

                    {_.isEqual(_.sortBy(blogs), _.sortBy(edges)) ? (
                        <section className="py-4 blog-post-listing px-5">
                            <Row>
                                <Col xs={12} md={9}>
                                    <RecentBlogs
                                        className=""
                                        blogdata={
                                            blogs && createBlogArray(blogs)
                                        }
                                        layout="home"
                                    />
                                </Col>
                                <Col md={3} className="d-none d-md-block">
                                    <LatestFromCategory
                                        blogdata={blogs && blogs}
                                        categories={blogs && blogCategories()}
                                    />
                                </Col>
                            </Row>
                        </section>
                    ) : (
                        <section className="py-4 blog-post-listing px-4">
                            <Row>
                                <Col xs={12}>
                                    <RecentBlogs
                                        className="px-4"
                                        blogdata={createBlogArray(blogs,false)}
                                        layout="alt"
                                    />
                                </Col>
                            </Row>
                        </section>
                    )}
                </>
            )
        } else {
            return (
                <section className="py-4 blog-post-listing px-4">
                    <Row>
                        <Col xs={12}>
                            <RecentBlogs blogdata={blogs} layout="alt" />
                        </Col>
                    </Row>
                </section>
            )
        }
        
        
    }

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout
                renderHeaderSolid={true}
                headerTitle={[true, pageTitle]}
                search={true}
                bodyClasses="blog"
            >
                <SEO title={pageTitle} />
                <Context.Consumer>
                    {({ actions }) => {
                        return (
                            <section className="blog-category-filter my-3">
                                <Row className="align-items-center h-100 px-4">
                                    <Col md={8} className="d-none d-md-block" />
                                    <Col xs={12} sm={4} className="px-4">
                                        {/* Category Dropdown */}
                                        <FormGroup
                                            row
                                            className="align-items-center"
                                        >
                                            <Label
                                                for="categories"
                                                xs={3}
                                                className="text-right text-muted"
                                            >
                                                Jump to:
                                            </Label>
                                            <Col xs={9}>
                                                <Select
                                                    className="category-select"
                                                    classNamePrefix="select"
                                                    placeholder="Select a value..."
                                                    name="categories"
                                                    options={blogCategories(true)}
                                                    ref={categorySelect}
                                                    value={dropdown}
                                                    onChange={value =>
                                                        handleDropdownChange(
                                                            value,
                                                            actions
                                                        )
                                                    }
                                                />
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </section>
                        )
                    }}
                </Context.Consumer>

                <Context.Consumer>
                    {({ store }) => {
                        filterBySearch === true ? (
                            <Row>
                                <Col className="my-4 px-5">
                                    Displaying results for {store.searchTitle}.
                                </Col>
                                <Col className="my-4 px-5 text-right-md">
                                    {searchResults} Posts Found.
                                </Col>
                            </Row>
                        ) : null
                    }}
                </Context.Consumer>
                <Context.Consumer>
                    {({ store }) => renderView(store)}
                </Context.Consumer>
                <section ref={dreamForm}>
                    <FreeWebsiteAnalysis />
                </section>
            </Layout>
        </ScrollWrapper>
    )
}

const dreamForm = React.createRef()
const categorySelect = React.createRef()


const handleScroll = () => {

}


export const query = graphql`
    {
        siteSearchIndex {
            index
        }
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        path
                        date
                        title
                        author
                        authorURL
                        category
                        readingTime
                        tags
                        excerpt
                        cover {
                            ...fluidImageSmall
                        }
                    }
                    children {
                        id
                    }
                }
            }
        }
    }
`

export default AlkemyBlog
