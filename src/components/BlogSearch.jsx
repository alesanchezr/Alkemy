import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types';
import { Index } from "elasticlunr"
import { Context } from "../store/appContext.js"
import qs from 'qs';
import {
    Row,
    Col,
    Form,
    InputGroup,
    Input,
    InputGroupAddon,
    Button,
  } from "reactstrap"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Blog search widget 

export default class BlogSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
    this.searchRef = React.createRef()
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = e => {
    e.preventDefault()
    const query = this.searchRef.current.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }

  render() {
    return (
        <Row className="blogSearch">
            <Col>
                <Context.Consumer>
                  {
                    ({store,actions})=>{
                      return (
                          <Form className="m-0" onSubmit={e => this.search(e)}>
                              <InputGroup>
                                  <Input
                                      placeholder="Search..."
                                      type="text"
                                      innerRef={this.searchRef}
                                  />
                                  <InputGroupAddon
                                      addonType="append"
                                      className="align-items-center justify-content-center"
                                  >
                                      <Button
                                          onClick={e => this.search(e)}
                                          className="searchButton"
                                      >
                                          <FontAwesomeIcon
                                              icon="search"
                                              size="1x"
                                              color="white"
                                          />
                                      </Button>
                                  </InputGroupAddon>
                              </InputGroup>
                          </Form>
                      )
                    }
                  } 
                </Context.Consumer>
            </Col>
        </Row>
    )
  }
}
