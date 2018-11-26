import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText,
  CardTitle, CardDeck, CardBody,CardFooter, Button } from "reactstrap"


const BlogWidget = (props) => {
  const size = 3
  const Posts = props.posts
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .slice(0, size)
    .map(edge => {
      return(
        <Card key={edge.node.id} className="mx-auto">
          <CardImg top width="100%" src={edge.node.frontmatter.cover} alt={edge.node.frontmatter.title}/>
          <CardBody>
            <CardTitle>{edge.node.frontmatter.title}</CardTitle>
          </CardBody>
          <CardFooter>
            <Button href={edge.node.frontmatter.path} className="btn btn-primary form-control">Read Blog Post</Button>
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
