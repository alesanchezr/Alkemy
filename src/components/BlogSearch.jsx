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
    Popover,
    PopoverBody
} from "reactstrap"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Blog search widget 
export default class BlogSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        query: ``,
        results: [],
        popoverOpen: false
    }
    this.searchRef = React.createRef()
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  keyHandler = (e,actions)=> {
    if(e.keyCode===13 && this.searchRef.current.value.length>2){
      this.state.popoverOpen===true?this.toggle():null
      this.searchHandler(e,actions)
    }else if (e.keyCode === 13 && this.searchRef.current.value.length <= 2 && this.state.popoverOpen===false){
      this.toggle()
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
        .search(query, { expand: true, bool: "AND" })
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
                              <Popover
                                  placement="bottom-start"
                                  isOpen={this.state.popoverOpen}
                                  target={this.searchRef}
                                  toggle={this.toggle}
                              >
                                  <PopoverBody>
                                      Search query must have more than 2
                                      characters. Please try again.
                                  </PopoverBody>
                              </Popover>
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
