import React from 'react'
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
// When using this widget, make sure to pass a prop, "posts",
// that contains the result of data.allMarkdownRemark.edges

const BlogSearch = () => {
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

const searchRef = React.createRef()

const handleSearchSubmit = (e,actions) => {
  e.preventDefault()
  console.log(searchRef.current.value)
  actions.search(searchRef.current.value)
}

export default BlogSearch