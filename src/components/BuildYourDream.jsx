import React from 'react'
import { Button, Col, Row, Form,
  FormGroup, Label, Input } from 'reactstrap'
import Stepper from 'react-stepper-horizontal';

const BuildYourDream = () => {
  return(
    <section className="dreamForm py-5 px-3">
      <h1 className="text-center">Let Us Build Your Dream</h1>
      <div className="container">
        <p>Didn’t find what you need in our above plans? No problem! We can prepare a custom estimate based on your specific needs. Just fill out the fields below so that we can get a better picture of what kind of site you will need and we’ll do the rest. As soon as we have had a chance to review your information, you’ll get a follow-up call from one of our team members to discuss your project further and iron out all of the details.</p>
        <Form
          onSubmit={(e)=>handleClick(e)}
          className="py-3 mb-0"
          >
          <Stepper steps={stepperSteps} activeStep={ formStep } />
          {renderForm}
          <FormGroup className="text-center">
            <Button className="btn btn-primary" type="submit" value="submit">{formStep<stepperSteps.length?'Next Step':'Submit My Request'}</Button>
          </FormGroup>
          <Input className='hp' autoComplete="off" type="text" name="name" id="name" placeholder="Please tell us your Name" />
        </Form>
      </div>
    </section>
  )
}

const dreamForm = React.createRef();

let formStep = 1;
const stepperSteps = [
  {title: 'Step One'},
  {title: 'Step Two'},
  {title: 'Step Three'},
  {title: 'Step Four'}
]

const handleClick = (e)=>{
  e.preventDefault()

  if(formStep!==stepperSteps.length){
    formStep++
    console.log('step: ',formStep)
  }else{
    alert("we're done")
    //send form
  }
  renderForm()
}

const renderForm = ()=>{
    if(formStep===1){
        return(
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
    }else if(formStep===2){
      return 'hello'
    }
}

export default BuildYourDream;
