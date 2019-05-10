import React from 'react'
import { Button, Col, Row, Form, FormFeedback,
  FormGroup, Label, Input,FormText } from 'reactstrap'
import ThankYou from './thankYou.jsx'
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
if(typeof window !=='undefined'){
  window.recaptchaOptions = {
    useRecaptchaNet: true,
    removeOnUnmount: false,
  };
}

export default class FreeWebsiteAnalysis extends React.Component {
  constructor(){
    super();

    this.state={
      success: false,
      formValues: {
        'g-recaptcha-response': '',
        fullName: '',
        email: '',
        webAddress: '',
        authCheck: false
      },
      errors: {
        fullNameLength: '',
        emailFormat: '',
        websiteURLFormat: '',
        authCheck: '',
        ReCAPTCHA: ''
      }
    }
    this.recaptchaRef = React.createRef();
  }

  handleRecaptcha = value => {
    let errors={...this.state.errors}
    let formValues = {...this.state.formValues}
    errors.ReCAPTCHA = ""
    formValues["g-recaptcha-response"] = value

    this.setState({ formValues,errors });
  };

  handleSubmit = e=>{
    e.preventDefault()
    let valid = this.validate()
    // handle form submit here

    const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }

    const recaptchaValue = this.state.formValues['g-recaptcha-response'];

    if(valid && recaptchaValue!==''){
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "freeWebsiteAnalysis",
          ...this.state.formValues
        })
        }).then((res) => {
          this.setState({
            success: true
          })
        })
        .catch(error => console.log(error))
    }else{
      let errors = {...this.state.errors}
      errors.ReCAPTCHA = 'ReCAPTCHA Verification Needed to Submit Form.'
      this.setState({
        errors
      })
    }
  }

  handleFieldChange = e => {
    let formValues = this.state.formValues
    if(e.target.name==='authCheck'){
      formValues[e.target.name] = !this.state.formValues.authCheck
    }else{
      formValues[e.target.name] = e.target.value
    }
    this.setState({
      formValues
    })
  }

  validate = ()=>{
    let isError = false
    let errors = {}

    // Full Name Field Validation
    if (this.state.formValues.fullName.length>0){
      let nameArray=this.state.formValues.fullName.split(' ')
      // check name is at least 2 words
      if(nameArray.length<2){
        isError=true
        errors.fullNameLength='Only first name was entered.'
      }else if(nameArray.length>=2){
        for(let val in nameArray){
          if(nameArray[val].length < 2){
               isError=true
               errors.fullNameLength='Length of each name must be 2 or more characters.'
             }
        }
      }
    }else if(this.state.formValues.fullName.length===0){
      isError=true
      errors.fullNameLength='You did not provide your Full Name.'
    }

    // Email Validation
    let emailReg = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let emailValid = emailReg.test(String(this.state.formValues.email.toLowerCase()))
    console.log('email valid: ',emailValid)
    if(!emailValid){
      if(this.state.formValues.email.length===0){
        isError=true
        errors.emailFormat='You did not provide your Email Address.'
      }else{
        isError=true
        errors.emailFormat='Invalid format. Must be name@domain.com'
      }
    }


    // websiteURLFormat Validation
    let urlReg = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    let url = this.state.formValues.webAddress
    let urlValidate = urlReg.test(String(url))

    if(
      urlValidate === false
    ){
      if(url.length===0){
        isError=true
        errors.websiteURLFormat='You did not provide your Website Address.'
      }else{
        isError=true
        errors.websiteURLFormat='Website format is invalid. Must be of type www.yoursite.com'
      }
    }

    if(this.state.formValues.authCheck===false){
      isError=true
      errors.authCheck='You must agree to email contact for us to process your request.'
    }

    if(isError){
      this.setState({
        ...this.state,
        errors: {...errors}
      })
      return false
    }
    if(!isError) return true

  }

  render(){
    return(
      <>
        {
          this.state.success
          ?(<ThankYou />)
          :(
            <section className="contactForm py-5 px-3">
              <h1 className="text-center">LET'S GET STARTED</h1>
              <div className="container">
                <p>Are you interested in a Completely FREE Analysis of your Website and it's current SEO issues? Please provide us with your name, email address, and website’s URL and we’ll handle the rest!</p>
                <Form
                  name="freeWebsiteAnalysis"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  data-netlify-recaptcha="true"
                  onSubmit={(e)=>this.handleSubmit(e)}
                  className="py-3 mb-0"
                  >
                  <Row form className="my-2 py-0">
                    <Col xs={12} md={6} className="my-2 py-0">
                      <FormGroup>
                        <Input
                          type="text"
                          name="fullName"
                          invalid={
                            typeof this.state.errors.fullNameLength !== 'undefined' &&
                            this.state.errors.fullNameLength.length>0
                          }
                          onChange={e=>this.handleFieldChange(e)}
                          placeholder="Please tell us your Full Name"
                          />
                          <FormFeedback
                            className="my-3"
                            >
                          {this.state.errors.fullNameLength}
                          </FormFeedback>
                      </FormGroup>
                    </Col>
                    <Col xs={12} md={6} className="my-2 py-0">
                      <FormGroup>
                        <Input
                          type="text"
                          name="email"
                          invalid={
                            typeof this.state.errors.emailFormat !== 'undefined' &&
                            this.state.errors.emailFormat.length>0
                          }
                          onChange={e=>this.handleFieldChange(e)}
                          placeholder="Enter your Email Address"
                          />
                          <FormFeedback
                            className="my-3"
                            >
                          {this.state.errors.emailFormat}
                          </FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className="my-2">
                    <Input
                      type="text"
                      name="webAddress"
                      invalid={
                        typeof this.state.errors.websiteURLFormat !== 'undefined' &&
                        this.state.errors.websiteURLFormat.length>0
                      }
                      onChange={e=>this.handleFieldChange(e)}
                      placeholder="What is your Website Address? (ex. www.yourwebsite.com)"
                      />
                      <FormFeedback
                        className="my-3"
                        >
                      {this.state.errors.websiteURLFormat}
                      </FormFeedback>
                  </FormGroup>
                  <FormGroup check className="mt-4 mb-0 text-center">
                    <Input
                      type="checkbox"
                      name="authCheck"
                      id="authCheck"
                      invalid={
                        typeof this.state.errors.authCheck !== 'undefined'
                      }
                      checked={this.state.formValues.authCheck}
                      onChange={e=>this.handleFieldChange(e)}
                      />
                    <Label for="authCheck">
                      I authorize Alkemy, Inc. to contact me via email so that I may recieve my free website analysis.
                    </Label>
                    <FormFeedback
                      className="text-center mb-4"
                      >
                    {this.state.errors.authCheck}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <ReCAPTCHA
                      className="recaptcha"
                      sitekey={RECAPTCHA_KEY}
                      onChange={this.handleRecaptcha}
                    />
                    <FormText color="danger" className="text-center">
                      {this.state.errors.ReCAPTCHA}
                    </FormText>
                  </FormGroup>
                  <FormGroup className="text-center">
                    <Button
                      className="btn btn-primary"
                      type="submit"
                      value="submit"
                      >Send me my FREE Website Analysis</Button>
                  </FormGroup>
                  <input type="hidden" name="form-name" value="freeWebsiteAnalysis" />
                  <input type="text" name="bot-field" className="hp"/>
                </Form>
              </div>
            </section>
          )
        }
      </>
    )
  }
}
