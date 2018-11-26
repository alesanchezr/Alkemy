import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText,
  CardTitle, CardDeck, CardBody,CardFooter, Button } from "reactstrap"

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
        <Card key={edge.node.id} className="mx-auto">
          <CardImg top width="100%" src={edge.node.frontmatter.cover} alt={edge.node.frontmatter.title} className="mb-1"/>
          <CardBody>
            <CardTitle className="my-0">{edge.node.frontmatter.title}</CardTitle>
          </CardBody>
          <CardFooter>
            <Button href={edge.node.frontmatter.path} className="btn btn-primary form-control mt-0">Read Blog Post</Button>
          </CardFooter>
        </Card>
      )
    })
  return (
    <div>
      <h2 className="text-center">Recent Activity from the Alkemy Blog</h2>
      <div className="container">
        <CardDeck>{Posts}</CardDeck>
      </div>
    </div>
  )

}

export default BlogWidget

BlogWidget.propTypes = {
  posts: PropTypes.array
}
