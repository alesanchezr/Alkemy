import React,{Component} from "react";
import {
    Button,
    Col,
    Row,
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    FormText,
} from "reactstrap";
import Stepper from "react-stepper-horizontal";

export default class ProjectEstimationTool extends Component {
    constructor() {
        super();

        this.state = {
            success: false,
            formStep: 0,
            formValues: {
                
            },
            errors: {
                
            },
            stepperSteps: [
                {
                    title: "FrontEnd",
                    onClick: e =>
                        this.state.formStep[e.currentTarget.innerHTML],
                },
                {
                    title: "BackEnd",
                    onClick: e =>
                        this.state.formStep[e.currentTarget.innerHTML],
                },
                {
                    title: "Marketing",
                    onClick: e =>
                        this.state.formStep[e.currentTarget.innerHTML],
                },
                {
                    title: "Extra Services",
                    onClick: e =>
                        this.state.formStep[e.currentTarget.innerHTML],
                },
            ],
        };
    }

    // handles field changes
    handleFieldChange = (e, fieldName) => {
        let formValues = { ...this.state.formValues };

        if (fieldName !== "phone") {
            formValues[fieldName] = e.target.value;
        } else {
            if (e[0] === true) {
                formValues[fieldName] = e[1];
            }
        }
        this.setState({ formValues });
    };

    // handles button click (next or back)
    handleButtonClick = (e, action) => {
        e.preventDefault();
        // handle regular form next click
        if (
            action === "next" &&
            this.state.formStep < this.state.stepperSteps.length - 1
        ) {
            
            this.setState(prevState => {
                return {
                    formstep: prevState.formStep++,
                };
            });
        }

        // handle regular form back click
        if (action === "back" && this.state.formStep > 0)
            this.setState(prevState => {
                return {
                    formstep: prevState.formStep--,
                };
            });
    };

    handleSubmit = e => {
        e.preventDefault();
        
    };

    // handles the cases for rendering each step of the form
    renderForm = () => {
        switch (this.state.formStep) {
            case 0:
                return (
                    <Row form className="my-4 py-0">
                        <Col xs={12} md={4} className="my-2 py-0">
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="fullName"
                                    value={this.state.formValues.fullName}
                                    invalid={
                                        typeof this.state.errors
                                            .fullNameLength !== "undefined" &&
                                        this.state.errors.fullNameLength
                                            .length > 0
                                    }
                                    onChange={e =>
                                        this.handleFieldChange(e, "fullName")
                                    }
                                    placeholder="Full Name"
                                />
                                <FormFeedback className="my-3">
                                    {this.state.errors.fullNameLength}
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={4} className="my-2 py-0">
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="email"
                                    value={this.state.formValues.email}
                                    invalid={
                                        typeof this.state.errors.emailFormat !==
                                            "undefined" &&
                                        this.state.errors.emailFormat.length > 0
                                    }
                                    onChange={e =>
                                        this.handleFieldChange(e, "email")
                                    }
                                    placeholder="Email Address"
                                />
                                <FormFeedback>
                                    {this.state.errors.emailFormat}
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={4} className="my-2 py-0">
                            <FormGroup>
                                
                                <FormFeedback>
                                    {this.state.errors.phone}
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                );
            case 1:
                return (
                    <Row form className="my-4 py-0">
                        <Col xs={12} className="my-2 py-0 text-center">
                            <FormGroup>
                                <p className="text-center">
                                    Do you presently have a website?
                                </p>
                                <Label check className="mr-5">
                                    <Input
                                        type="radio"
                                        name="hasWebsite"
                                        value="no"
                                        defaultChecked={
                                            this.state.formValues.hasWebsite ===
                                            "no"
                                        }
                                        onChange={e =>
                                            this.handleFieldChange(
                                                e,
                                                "hasWebsite"
                                            )
                                        }
                                    />{" "}
                                    No
                                </Label>
                                <Label check className="ml-5">
                                    <Input
                                        type="radio"
                                        name="hasWebsite"
                                        value="yes"
                                        defaultChecked={
                                            this.state.formValues.hasWebsite ===
                                            "yes"
                                        }
                                        onChange={e =>
                                            this.handleFieldChange(
                                                e,
                                                "hasWebsite"
                                            )
                                        }
                                    />{" "}
                                    Yes
                                </Label>
                            </FormGroup>
                        </Col>
                        {this.state.formValues.hasWebsite === "yes" ? (
                            <Col xs={12} className="my-2 py-0">
                                <FormGroup>
                                    <Input
                                        type="url"
                                        name="websiteAddress"
                                        value={this.state.formValues.websiteURL}
                                        invalid={
                                            typeof this.state.errors
                                                .websiteURLFormat !==
                                                "undefined" &&
                                            this.state.errors.websiteURLFormat
                                                .length > 0
                                        }
                                        onChange={e =>
                                            this.handleFieldChange(
                                                e,
                                                "websiteURL"
                                            )
                                        }
                                        placeholder="Website Address"
                                    />
                                    <FormFeedback>
                                        {this.state.errors.websiteURLFormat}
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                        ) : null}
                    </Row>
                );
            case 2:
                return (
                    <Row form className="my-4 py-0">
                        <Col xs={12} md={6} className="my-2 py-0 pr-md-3">
                            <FormGroup>
                                <Label for="budget">
                                    What is your budget for this project?
                                </Label>
                                <Input
                                    type="select"
                                    name="budget"
                                    value={this.state.formValues.budget}
                                    onChange={e =>
                                        this.handleFieldChange(e, "budget")
                                    }
                                >
                                    <option value="">Select Budget</option>
                                    <option>$5k-$6999k</option>
                                    <option>$7k-$9999k</option>
                                    <option>$10k-$14999k</option>
                                    <option>$15k-$25k</option>
                                    <option>Greater than $25k</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={6} className="my-2 py-0 pl-md-3">
                            <FormGroup>
                                <Label for="timeframe">
                                    Do you have a specific launch timeframe?
                                </Label>
                                <Input
                                    type="select"
                                    name="timeframe"
                                    value={this.state.formValues.timeframe}
                                    onChange={e =>
                                        this.handleFieldChange(e, "timeframe")
                                    }
                                >
                                    <option value="">
                                        Select Time Constraints
                                    </option>
                                    <option>
                                        No, there are no time constraints.
                                    </option>
                                    <option>1 month or less.</option>
                                    <option>1-2 months</option>
                                    <option>3-5 months</option>
                                    <option>Greater than 5 months.</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs={12} className="my-2 py-0">
                            <FormGroup>
                                <Label for="designExamples">
                                    Design Examples:
                                </Label>
                                <Input
                                    type="textarea"
                                    name="designExamples"
                                    value={this.state.formValues.designExamples}
                                    onChange={e =>
                                        this.handleFieldChange(
                                            e,
                                            "designExamples"
                                        )
                                    }
                                    placeholder="If you have any websites that should serve as design examples, please provide them here. (Comma separate if more than one.) "
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                );
            case 3:
                return (
                    <Row form className="my-4 pt-0 pb-2">
                        <Col xs={12} sm={6} className="my-2 py-0 pr-3">
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="companyName"
                                    value={this.state.formValues.companyName}
                                    invalid={
                                        typeof this.state.errors.companyName !==
                                            "undefined" &&
                                        this.state.errors.companyName.length > 0
                                    }
                                    onChange={e =>
                                        this.handleFieldChange(e, "companyName")
                                    }
                                    placeholder="Company Name"
                                />
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6} className="my-2 py-0 pr-3">
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="industry"
                                    invalid={
                                        typeof this.state.errors.industry !==
                                            "undefined" &&
                                        this.state.errors.industry.length > 0
                                    }
                                    value={this.state.formValues.industry}
                                    onChange={e =>
                                        this.handleFieldChange(e, "industry")
                                    }
                                >
                                    <option value="" disabled>
                                        Select Your Industry
                                    </option>
                                    <option>Food & Beverage</option>
                                    <option>Government</option>
                                    <option>HR/Payroll Services</option>
                                    <option>Insurance/Healthcare</option>
                                    <option>
                                        Internet/Software/Development
                                    </option>
                                    <option>Legal Services</option>
                                    <option>Non-Profit</option>
                                    <option>Other/Not Listed</option>
                                    <option>Real Estate</option>
                                    <option>Restaurant/Hospitality</option>
                                    <option>Retail</option>
                                    <option>
                                        Sales/Marketing/Digital Marketing
                                    </option>
                                </Input>
                                {this.state.formValues.industry ===
                                "Other/Not Listed" ? (
                                    <Input
                                        type="text"
                                        className="my-2"
                                        name="otherIndustry"
                                        value={
                                            this.state.formValues.otherIndustry
                                        }
                                        invalid={
                                            typeof this.state.errors
                                                .otherIndustry !==
                                                "undefined" &&
                                            this.state.errors.otherIndustry
                                                .length > 0
                                        }
                                        onChange={e =>
                                            this.handleFieldChange(
                                                e,
                                                "otherIndustry"
                                            )
                                        }
                                        placeholder="Your Industry"
                                    />
                                ) : null}
                            </FormGroup>
                        </Col>
                    </Row>
                );
            default:
                return null;
        }
    };
    
    render() {
        return (
            <Form
                name="projectEstimator"
                onSubmit={e => this.handleSubmit(e)}
                className="py-3 mb-0"
            >
                <Stepper
                    activeColor="#2bb3e5"
                    activeTitleColor="#2bb3e5"
                    completeColor="#206a98"
                    completeTitleColor="#206a98"
                    steps={this.state.stepperSteps}
                    activeStep={this.state.formStep}
                />

                <div className="my-3">
                    {this.renderForm(this.state.formStep)}
                </div>
                <FormGroup className="text-center">
                    <Button
                        color="secondary"
                        className={
                            this.state.formStep === 0
                                ? "d-none"
                                : "mr-5"
                        }
                        onClick={e =>
                            this.handleButtonClick(e, "back")
                        }
                    >
                        Back
                    </Button>
                    <Button
                        color="primary"

                        type={
                            this.state.formStep <
                            this.state.stepperSteps.length - 1
                                ? "button"
                                : "submit"
                        }
                        onClick={e => {
                            this.state.formStep <
                            this.state.stepperSteps.length - 1
                                ? this.handleButtonClick(
                                        e,
                                        "next"
                                    )
                                : this.handleSubmit(e);
                        }}
                    >
                        {this.state.formStep <
                        this.state.stepperSteps.length - 1
                            ? "Next Step"
                            : "Calculate Total"}
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}
