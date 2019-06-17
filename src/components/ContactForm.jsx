import React from 'react'
import { Button, Col, Row, Form,
  FormFeedback,FormGroup, Label, CustomInput,Input,FormText } from 'reactstrap'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'
import ThankYou from './thankYou.jsx'
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
if(typeof window !=='undefined'){
  window.recaptchaOptions = {
    useRecaptchaNet: true,
    removeOnUnmount: false,
  };
}

// @ToDo Figure out what is causing the contactForm to not submit properly in production

// @body: 
export default class ContactForm extends React.Component {
  constructor(){
    super();

    this.state={
      success: false,
      formStep: 0,
      formValues: {
        'g-recaptcha-response': '',
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        reason: '',
        comments: ''
      },
      errors: {
        fullNameLength: '',
        companyNameLength: '',
        emailFormat: '',
        phone: '',
        ReCAPTCHA: ''
      }
    }
    this.contactForm = React.createRef
  }

  handleRecaptcha = value => {
    let errors={...this.state.errors}
    let formValues = {...this.state.formValues}
    errors.ReCAPTCHA = ""
    formValues["g-recaptcha-response"] = value

    this.setState({ formValues,errors });
  };

  // handles field changes
  handleFieldChange = (e,fieldName)=> {
    let formValues = {...this.state.formValues}

    if(fieldName!=='phone'){
      formValues[fieldName] = e.target.value
    }else{
      if(e[0]===true){
        formValues[fieldName] = e[1]
      }
    }
    this.setState({formValues})
    this.setState({
      errors: {
        fullNameLength: '',
        companyNameLength: '',
        emailFormat: '',
        phone: '',
        ReCAPTCHA: ''
      }
    })
  }

  handleSubmit = e=>{
    e.preventDefault()
    if(this.validate()){
      // handle form submit here
      const encode = (data) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      }

      const recaptchaValue = this.state.formValues['g-recaptcha-response'];

      if(recaptchaValue !== ''){
        fetch('/', {
          method: 'POST',
          body: encode({
            "form-name": "contactForm",
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
  }else{
    isError=true
    errors.fullNameLength='Full name is a Required Field.'
  }

  // Email Validation
  let emailReg = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let emailValid = emailReg.test(String(this.state.formValues.email.toLowerCase()))

  if(!emailValid&&this.state.formValues.email.length>0){
    isError=true
    errors.emailFormat='Invalid format. Must be name@domain.com'
  }else if(!emailValid&&this.state.formValues.email.length===0){
    isError=true
    errors.emailFormat='Email is a Required Field.'
  }

  // Phone Validation
  let phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/
  let phone = this.state.formValues.phone
  let phoneValidate = phoneReg.test(String(phone))

  if(!phoneValidate && phone.length>0){
    isError=true
    errors.phone='Not a valid phone number.'
  }else if(phone.length===0){
    isError=true
    errors.phone='Phone is a Required Field.'
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
        ? (<ThankYou />)
        : (
          <section className="contactForm p-4">
            <h2 className="mb-3">Would you like to get in touch?</h2>
            <p>Please take a moment to fill out the following form so that we can better assist you.</p>
            <p className="muted"><small>* denotes a required field</small></p>
            
            <Form
            name="contactForm"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={e=>this.handleSubmit(e)}
            ref={this.contactForm}
            className="py-3 mb-0"
            >
              <Row form className="">
                <Col xs={12} className="">
                  <FormGroup row>
                    <Label for="fullName" sm={3}>
                      Name*
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="fullName"
                        value={this.state.formValues.fullName}
                        invalid={
                          typeof this.state.errors.fullNameLength !== 'undefined' &&
                          this.state.errors.fullNameLength.length>0
                        }
                        onBlur={e=>this.validate()}
                        onChange={e=>this.handleFieldChange(e,'fullName')}
                        placeholder="Please tell us your Full Name"
                        />
                        <FormFeedback
                          className="my-3"
                          >
                        {this.state.errors.fullNameLength}
                        </FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="companyName" sm={3}>
                      Company
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="companyName"
                        value={this.state.formValues.companyName}
                        invalid={
                          typeof this.state.errors.companyName !== 'undefined' &&
                          this.state.errors.companyName.length>0
                        }
                        onBlur={e=>this.validate()}
                        onChange={e=>this.handleFieldChange(e,'companyName')}
                        placeholder="What is your Company Name?"
                        />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="email" sm={3}>
                      Email*
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="email"
                        value={this.state.formValues.email}
                        invalid={
                          typeof this.state.errors.emailFormat !== 'undefined' &&
                          this.state.errors.emailFormat.length>0
                        }
                        onBlur={e=>this.validate()}
                        onChange={e=>this.handleFieldChange(e,'email')}
                        placeholder="Enter your Email Address"
                        />
                        <FormFeedback>{this.state.errors.emailFormat}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="phone" sm={3}>
                      Phone*
                    </Label>
                    <Col sm={9}>
                      <IntlTelInput
                        type='tel'
                        fieldName="phone"
                        format
                        containerClassName="intl-tel-input"
                        className='form-control'
                        onBlur={e=>this.validate()}
                        onPhoneNumberChange={(valid,value)=>this.handleFieldChange([valid,value],'phone')}
                        defaultValue={this.state.formValues.phone}
                        invalid={
                          typeof this.state.errors.phone !== 'undefined' &&
                          this.state.errors.phone.length>0
                        }
                        />
                        <FormFeedback className="intl-tel-input">{this.state.errors.phone}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="reason" sm={3}>
                      Reason*
                    </Label>
                    <Col sm={9}>
                      <CustomInput
                        type="select"
                        name="reason"
                        id="reason"
                        value={this.state.formValues.reason}
                        onChange={e=>this.handleFieldChange(e,'reason')}
                        invalid={
                          this.state.formValues.reason.length === 0
                        }
                        >
                        <option value="" disabled defaultValue>Please select your reason for contacting us</option>
                        <option>I'm Interested in Investing in Alkemy</option>
                        <option>I'm looking to contract Alkemy</option>
                        <option>I have a General Inquiry</option>
                        <option>Other/Unspecified</option>
                      </CustomInput>
                      <FormFeedback>Please Select a Reason for Contacting Us.</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="comments" sm={3}>
                      Comments
                    </Label>
                    <Col sm={9}>
                      <Input
                        rows={4}
                        type="textarea"
                        name="comments"
                        value={this.state.formValues.comments}
                        onChange={e=>this.handleFieldChange(e,'comments')}
                        placeholder="Please elaborate on your selected reason."
                        />
                    </Col>
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
                  <FormGroup className="text-center mb-0">
                    <Button
                      color="primary"
                      type="submit"
                      block
                      onClick={e=>this.handleSubmit(e)}
                      >
                      Submit Contact Request
                      </Button>
                  </FormGroup>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <input type="text" name="bot-field" className="hp"/>
                </Col>
              </Row>
            </Form>
          </section>
        )
      }
      </>
    )
  }
}
