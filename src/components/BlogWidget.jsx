import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText,
  CardTitle, CardDeck, CardBody, Button } from "reactstrap"


const BlogWidget = (props) => {

  const Posts = props.posts
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => {
      return(
        <div className="col-12 col-md-6 col-xl-4" key={edge.node.id}>
          <Card>
            <CardImg top width="100%" src={edge.node.frontmatter.cover} alt={edge.node.frontmatter.title} />
            <CardBody>
              <CardTitle>{edge.node.frontmatter.title}</CardTitle>
              <CardText>{edge.node.frontmatter.excerpt}</CardText>
              <Button href={edge.node.frontmatter.path} className="btn btn-primary form-control">Read More</Button>
            </CardBody>
          </Card>
        </div>
      )
    })
  return (
    <div>
      <h2 className="text-center">Recent Blog Posts</h2>
      <CardDeck className="row">{Posts}</CardDeck>
    </div>
  )

}

export default BlogWidget

BlogWidget.propTypes = {
  posts: PropTypes.array
}
