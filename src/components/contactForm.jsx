import React from 'react'
import { Button, Col, Row, Form,
  FormGroup, Label, Input } from 'reactstrap'


const ContactForm = () => {
  return(
    <section className="contactForm py-5 px-3">
      <h1 className="text-center">LET'S GET STARTED</h1>
      <div className="container">
        <p>Are you interested in a Completely FREE Analysis of your Website and it's current SEO issues? Please provide us with your name, email address, and website’s URL and we’ll handle the rest!</p>
        <Form
          onSubmit={(e)=>e.preventDefault()}
          className="py-3 mb-0"
          >
          <Row form className="my-2 py-0">
            <Col xs={12} md={6} className="my-2 py-0">
              <FormGroup>
                <Input type="text" name="fullName" id="fullName" placeholder="Please tell us your Full Name" />
              </FormGroup>
            </Col>
            <Col xs={12} md={6} className="my-2 py-0">
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Enter your Email Address" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="my-2">
            <Input type="url" name="webAddress" id="webAddress" placeholder="What is your Website Address? (ex. www.yourwebsite.com)"/>
          </FormGroup>
          <FormGroup check className="my-4 text-center">
            <Input type="checkbox" id="authCheck"/>
            <Label for="authCheck">
              I authorize Alkemy, Inc. to contact me via email so that I may recieve my free website analysis.
            </Label>
          </FormGroup>
          <FormGroup className="text-center">
            <Button className="btn btn-primary" type="submit" value="submit">Send me my FREE Website Analysis</Button>
          </FormGroup>
        </Form>
      </div>
    </section>
  )
}


export default ContactForm;
