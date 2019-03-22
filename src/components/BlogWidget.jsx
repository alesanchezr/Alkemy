import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText,
  CardTitle, CardDeck, CardBody, Button } from "reactstrap"
import Loading from './loading.jsx'

// Blog post widget to display 3 blog posts from graphQL data.
// When using this widget, make sure to pass a prop, "posts",
// that contains the result of data.allMarkdownRemark.edges

const BlogWidget = (props) => {
  const size = 3
  const Posts = props.posts
    .filter(edge => !!edge.node.frontmatter.date) // filter based on date
    .slice(0, size) // select only 3 posts (query should organize by DESC)
    .map(edge => {
      return(
        <Card key={edge.node.id} className="mx-lg-3 mb-5 h-100">
          <CardImg top src={edge.node.frontmatter.cover} alt={edge.node.frontmatter.title} className="mb-1"/>
          <CardBody>
            <CardTitle className="my-0">{edge.node.frontmatter.title}</CardTitle>
            <CardText>{edge.node.frontmatter.excerpt?edge.node.frontmatter.excerpt:(<Loading />)}</CardText>
            <Button href={edge.node.frontmatter.path} className="mt-0 w-100" size="md" color="primary">Read More...</Button>
          </CardBody>
        </Card>
      )
    })
  return (
    <>

      <div className="container-fluid px-5">
        <h2>Latest Blogs</h2>
        <CardDeck className='h-100'>
          {Posts}
        </CardDeck>
      </div>
    </>
  )

}

export default BlogWidget

BlogWidget.propTypes = {
  posts: PropTypes.array
}
