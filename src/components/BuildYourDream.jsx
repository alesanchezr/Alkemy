import React from 'react'
import { Button, Col, Row, Form,
  FormGroup, Label, Input } from 'reactstrap'
import Stepper from 'react-stepper-horizontal';

export default class BuildYourDream extends React.Component {
  constructor(){
    super();

    this.state={
      formStep: 0,
      formValues: {
        fullName: '',
        email: '',
        phone: '',
        hasWebsite: 'no',
        websiteURL: '',

      },
      stepperSteps: [
        {
          title: 'Step One',
          onClick: (e)=>this.state.formStep[e.currentTarget.innerHTML]
        },
        {
          title: 'Step Two',
          onClick: (e)=>this.state.formStep[e.currentTarget.innerHTML]
        },
        {
          title: 'Step Three',
          onClick: (e)=>this.state.formStep[e.currentTarget.innerHTML]
        },
        {
          title: 'Step Four',
          onClick: (e)=>this.state.formStep[e.currentTarget.innerHTML]
        }
      ]
    }
    const formArea = React.createRef()
  }

  // handles selection of radio button for hasWebsite
  handleOptionChange = (e)=> {
    this.setState({
      formValues: {
        hasWebsite: e.target.value
      }
    })
  }

  // handles click of the next button
  handleNextClick = ()=>{
    if(this.state.formStep!==this.state.stepperSteps.length){
      this.setState({
        formstep: this.state.formStep++
      })
    }
  }

  // handles click of the back button
  handleBackClick = ()=>{
    if(this.state.formStep>0){
      this.setState({
        formstep: this.state.formStep--
      })
    }
  }

  // handles form submit action
  handleSubmit = (e)=>{
    e.preventDefault()

    // send object bundle via email

  }

  // handles the cases for rendering each step of the form
  renderForm = ()=>{
    switch(this.state.formStep){
      case 0:
        return (
          <Row form className="my-5 py-0">
            <Col xs={12} md={4} className="my-2 py-0">
              <FormGroup>
                <Input type="text" name="fullName" id="fullName" placeholder="Please tell us your Full Name" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} className="my-2 py-0">
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Enter your Email Address" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} className="my-2 py-0">
              <FormGroup>
                <Input type="tel" name="phone" id="phone" placeholder="Enter your Telephone Number" />
              </FormGroup>
            </Col>
          </Row>
        )
      case 1:
        return (
          <Row form className="my-5 py-0">
            <Col xs={12} className="my-2 py-0 text-center">
              <FormGroup>
                <p className="text-center">Do you presently have a website?</p>
                <Label check className="mr-5">
                  <Input
                    type="radio"
                    name="hasWebsite"
                    value="no"
                    defaultChecked={this.state.formValues.hasWebsite === 'no'}
                    onChange={this.handleOptionChange}
                  />{' '}No
                </Label>
                <Label check>
                  <Input
                    type="radio"
                    name="hasWebsite"
                    value="yes"
                    defaultChecked={this.state.formValues.hasWebsite === 'yes'}
                    onChange={this.handleOptionChange}
                    />{' '}Yes
                </Label>
              </FormGroup>
            </Col>
            {
              this.state.formValues.hasWebsite === 'yes'
              ? (
                  <Col xs={12} className="my-2 py-0">
                    <FormGroup>
                      <Input
                        type="url"
                        name="websiteAddress"
                        id="websiteAddress"
                        placeholder="What is the address for your site? (www.yoursite.com)"
                        />
                    </FormGroup>
                  </Col>
                )
              : ''
            }
          </Row>
        )
      case 2:
        return (
          <Row form className="my-2 py-0">
            <Col xs={12} md={4} className="my-2 py-0">
              <FormGroup>
                <Input type="text" name="fullName" id="fullName" placeholder="Please tell us your Full Name" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} className="my-2 py-0">
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Enter your Email Address" />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} className="my-2 py-0">
              <FormGroup>
                <Input type="tel" name="phone" id="phone" placeholder="Enter your Telephone Number" />
              </FormGroup>
            </Col>
          </Row>
        )
        default:
          return null
      }
  }

  render(){
    return(
      <section className="dreamForm py-5 px-3">
        <h1 className="text-center">Let Us Build Your Dream</h1>
        <div className="container">
          <p>Didn’t find what you need in our above plans? No problem! We can prepare a custom estimate based on your specific needs. Just fill out the fields below so that we can get a better picture of what kind of site you will need and we’ll do the rest. As soon as we have had a chance to review your information, you’ll get a follow-up call from one of our team members to discuss your project further and iron out all of the details.</p>

          <Form
          onSubmit={(e)=>this.handleSubmit(e)}
          className="py-3 mb-0"
          >
            <Stepper
              activeColor='#2bb3e5'
              activeTitleColor='#2bb3e5'
              completeColor='#206a98'
              completeTitleColor='#206a98'
              steps={this.state.stepperSteps}
              activeStep={ this.state.formStep }
              />

            <div ref='formArea'>{this.renderForm(this.state.formStep)}</div>

            <FormGroup className="text-center">
              <Button
                className={
                  this.state.formStep===0
                    ? "d-none"
                    : ""
                }
                onClick={this.handleBackClick}
                >
                Back
                </Button>
              <Button className="btn btn-primary" type={this.state.formStep<this.state.stepperSteps.length?'button':'submit'} onClick={this.handleNextClick}>{this.state.formStep<this.state.stepperSteps.length?'Next Step':'Submit My Request'}</Button>
            </FormGroup>
            <Input className='hp' autoComplete="off" type="text" name="name" id="name" placeholder="Please tell us your Name" />
          </Form>
        </div>
      </section>
    )
  }
}
