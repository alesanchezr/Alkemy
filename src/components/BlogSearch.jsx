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

const getSearch = ({ location }) => {
  if (!location) return '';
  if (!location.search) return '';

  const query = location.search.substring(1);
  const parsed = qs.parse(query);
  if (!parsed.q) return '';
  return parsed.q;
};
export default class BlogSearch extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.updateQuery = evt => {
      const text = evt.target.value;
      const newQuery = qs.stringify({ q: text }, { format: 'RFC1738' });
      const hits = this.getHits(text);
      this.props.onSearch(text, hits);
      this.setState(s => {
        return {
          ...s,
          hits,
          query: text,
        };
      });
    };

    const query = getSearch(props);
    this.state = {
      query,
      hits: this.getHits(query),
    };
  }

  createIndex() {
    this.index = Index.load(this.props.data.index);
  }

  getHits(query) {
    if (!query) return [];

    if (!this.index) this.createIndex();
    const hits = this.index.search(query);
    return hits.map(({ ref }) => this.index.documentStore.getDoc(ref));
  }

  render() {
    const { query, hits } = this.state;

    return (
        <Row className="blogSearch">
            <Col>
                <Context.Consumer>
                  {
                    ({store,actions})=>{
                      return (
                          <Form
                              className="m-0"
                              onSubmit={(e, actions) =>
                                  handleSearchSubmit(e, actions)
                              }
                          >
                              <InputGroup>
                                  <Input
                                      placeholder="Search..."
                                      type="text"
                                      innerRef={searchRef}
                                  />
                                  <InputGroupAddon
                                      addonType="append"
                                      className="align-items-center justify-content-center"
                                  >
                                      <Button
                                          onClick={() =>
                                              actions.search(searchRef.current.value)
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

const searchRef = React.createRef()

const handleSearchSubmit = (e) => {
  e.preventDefault()
  search()
}

export default BlogSearch

Search.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.object.isRequired,
  }).isRequired,
  onSearch: PropTypes.func.isRequired,
};