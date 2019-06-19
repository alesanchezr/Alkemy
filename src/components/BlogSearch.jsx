import React from 'react'
import { Index } from "elasticlunr"
import { Context } from "../store/appContext.js"
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

  keyHandler = (e,actions)=> {
    if(e.keyCode==13){
      this.searchHandler(e,actions)
      console.log("data about evt: ", e, e.keyCode)
    }
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props&&this.props.searchIndex)

  searchHandler = (e,actions) => {
    const query = this.searchRef.current.value
    this.index = this.getOrCreateIndex()
    let results = this.index
            .search(query, { expand: true })
            // Map over each ID and return the full document
            .map(({ ref }) => this.index.documentStore.getDoc(ref))
    this.setState({
        query,
        // Query the index with search string to get an [] of IDs
        results: results
    })
    actions.search(results)
  }

  render() {
    return (
        <Row className="blogSearch">
            <Col>
                <Context.Consumer>
                  {
                    ({actions})=>{
                      return (
                          <InputGroup>
                              <Input
                                  placeholder="Search..."
                                  type="text"
                                  innerRef={this.searchRef}
                                  onKeyDown={e => this.keyHandler(e, actions)}
                              />
                              <InputGroupAddon
                                  addonType="append"
                                  className="align-items-center justify-content-center"
                              >
                                  <Button
                                      onClick={e =>
                                          this.searchHandler(e, actions)
                                      }
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
                      )
                    }
                  } 
                </Context.Consumer>
            </Col>
        </Row>
    )
  }
}
