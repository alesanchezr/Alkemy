import React from 'react'
import { Button, Col, Row, Form,
  FormGroup, Label, Input,FormText } from 'reactstrap'
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
        companyName: '',
        industry: '',
        logo: '',
        designExamples: '',
        budget: '',
        timeframe: ''
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

  // handles field changes
  handleFieldChange = (e,fieldName)=> {
    let formValues = {...this.state.formValues}
    formValues[fieldName] = e.target.value
    this.setState({formValues})
  }

  // handles button click (next or back)
  handleButtonClick = (action)=>{
    if(action==='next' &&
      this.state.formStep!==this.state.stepperSteps.length)
      this.setState({
        formstep: this.state.formStep++
      })
    if(action==='back' &&
      this.state.formStep>0)
      this.setState({
        formstep: this.state.formStep--
      })
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
          <Row form className="my-4 py-0">
            <Col xs={12} md={4} className="my-2 py-0">
              <FormGroup>
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  onChange={e=>this.handleFieldChange(e,'fullName')}
                  placeholder="Please tell us your Full Name"
                  />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} className="my-2 py-0">
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={e=>this.handleFieldChange(e,'email')}
                  placeholder="Enter your Email Address"
                  />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} className="my-2 py-0">
              <FormGroup>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={e=>this.handleFieldChange(e,'phone')}
                  placeholder="Enter your Telephone Number"
                  />
              </FormGroup>
            </Col>
          </Row>
        )
      case 1:
        return (
          <Row form className="my-4 py-0">
            <Col xs={12} className="my-2 py-0 text-center">
              <FormGroup>
                <p className="text-center">Do you presently have a website?</p>
                <Label check className="mr-5">
                  <Input
                    type="radio"
                    name="hasWebsite"
                    value="no"
                    defaultChecked={this.state.formValues.hasWebsite === 'no'}
                    onChange={e=>this.handleFieldChange(e,'hasWebsite')}
                  />{' '}No
                </Label>
                <Label check className="ml-5">
                  <Input
                    type="radio"
                    name="hasWebsite"
                    value="yes"
                    defaultChecked={this.state.formValues.hasWebsite === 'yes'}
                    onChange={e=>this.handleFieldChange(e,'hasWebsite')}
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
                        onChange={e=>this.handleFieldChange(e,'websiteURL')}
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
          <Row form className="my-4 py-0">
            <Col xs={12} md={6} className="my-2 py-0 pr-3">
              <FormGroup>
                <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  onChange={e=>this.handleFieldChange(e,'companyName')}
                  placeholder="What is your Company Name?"
                  />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="industry"
                  id="industry"
                  onChange={e=>this.handleFieldChange(e,'industry')}
                  placeholder="What industry is your business in?"
                  />
              </FormGroup>
            </Col>
            <Col xs={12} md={6} className="my-2 py-0 pl-3">
              <FormGroup>
                <Label for="logo">Company Logo</Label>
                <Input
                  type="file"
                  name="logo"
                  id="logo"
                  bsSize="sm"
                  className="pl-0"
                  onChange={e=>this.handleFieldChange(e,'logo')}
                  />
                <FormText color="muted">
                  Please upload a logo for your company. This will help provide a general idea of your style and color scheme.
                </FormText>
              </FormGroup>
            </Col>
            <Col xs={12} className="my-2 py-0">
              <FormGroup>
                <Input
                  type="textarea"
                  name="designExamples"
                  id="designExamples"
                  onChange={e=>this.handleFieldChange(e,'designExamples')}
                  placeholder="Please provide any websites that should serve as design examples. (Comma separate if more than one.) "
                  />
              </FormGroup>
            </Col>
          </Row>
        )
      case 3:
        return (
          <Row form className="my-4 py-0">
            <Col xs={12} md={6} className="my-2 py-0 pr-md-3">
              <FormGroup>
                <Label for="budget">What is your budget for this project?</Label>
                <Input
                  type="select"
                  name="budget"
                  id="budget"
                  onChange={e=>this.handleFieldChange(e,'budget')}
                  >
                  <option>$5k-$7k</option>
                  <option>$7k-$1k</option>
                  <option>$10k-$15k</option>
                  <option>$15k-$25k</option>
                  <option>Greater than $25k</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={6} className="my-2 py-0 pl-md-3">
              <FormGroup>
                <Label for="timeframe">Do you have a specific launch timeframe?</Label>
                <Input
                  type="select"
                  name="timeframe"
                  id="timeframe"
                  onChange={e=>this.handleFieldChange(e,'timeframe')}
                  >
                  <option>No, there are no time constraints.</option>
                  <option>1 month or less.</option>
                  <option>1-2 months</option>
                  <option>3-5 months</option>
                  <option>Greater than 5 months.</option>
                </Input>
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

            <div ref='formArea' className="my-3">{this.renderForm(this.state.formStep)}</div>

            <FormGroup className="text-center">
              <Button
                className={
                  this.state.formStep===0
                    ? "d-none"
                    : "mr-5"
                }
                onClick={e=>this.handleButtonClick('back')}
                >
                Back
                </Button>
              <Button
                className="btn btn-primary"
                type={
                  this.state.formStep<this.state.stepperSteps.length
                  ? 'button'
                  : 'submit'
                }
                onClick={e=>this.handleButtonClick('next')}>
                {
                  this.state.formStep<this.state.stepperSteps.length
                  ? 'Next Step'
                  : 'Submit My Request'
                }
                </Button>
            </FormGroup>
            <Input className='hp' autoComplete="off" type="text" name="name" id="name" placeholder="Please tell us your Name" />
          </Form>
        </div>
      </section>
    )
  }
}
