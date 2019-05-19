import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardImgOverlay,
  CardTitle, Row, Col, CardBody, CardFooter, Button } from "reactstrap"
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
        <Col
          key={edge.node.id}
          sm={12}
          md={4}
        >
          <Card className="blogCard">
            <CardImg top src={edge.node.frontmatter.cover} alt={edge.node.frontmatter.title} className="blogCard mb-0"/>
            <CardBody className="w-100 p-3 blogCard-body">
              <CardTitle tag="h4">{edge.node.frontmatter.title}</CardTitle>
            </CardBody>
            <CardImgOverlay>
              <CardBody className="overlayBody w-100 p-3">
                <CardText>{edge.node.frontmatter.excerpt?edge.node.frontmatter.excerpt:(<Loading />)}</CardText>
              </CardBody>
              <CardFooter className="overlayFooter w-100 p-3">
                <Button href={edge.node.frontmatter.path} className="mt-0" block size="md" color="primary">Read More...</Button>
              </CardFooter>
            </CardImgOverlay>
          </Card>
        </Col>
      )
    })
  return (
    <>

      <div className="container-fluid p-5">
        <h2 className="pb-3">Check Out Our Recent Posts</h2>
        <Row className="cardRow">
          {Posts}
        </Row>
      </div>
    </>
  )

}

export default BlogWidget

BlogWidget.propTypes = {
  posts: PropTypes.array
}
