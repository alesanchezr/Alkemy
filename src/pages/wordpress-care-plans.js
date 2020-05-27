import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import "../utils/utils.js";
import { Card, Button, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/layout";
import ScrollWrapper from "../components/scrollWrapper.jsx";
import CarePlanEnrollment from "../components/carePlanEnrollment.jsx";
import FreeWebsiteAnalysis from "../components/freeWebsiteAnalysis.jsx";
import SEO from "../components/seo";

/*
Layout props:
  pageTitle: SEO friendly title for the title bar
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        {
            name: string (subheader text),
            url: string (link for subheader text)
        }
      ]
  bodyClasses: additional classes to add to body tag
*/

const WebDesign = ({ data }) => {
    // function for creating a list of Plan features
    const planFeatures = plan => {
        return (
            <ul className="fa-ul w-50 w-lg-100 mx-auto my-3">
                {plan.features.map((feature, index) => {
                    return (
                        <li key={index}>
                            <span className="fa-li">
                                <FontAwesomeIcon
                                    icon="check"
                                    className="planFeatureIcon"
                                />
                            </span>
                            {feature}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const planCards = plans => {
        return plans.map((plan, index) => {
            return (
                <Col key={index} xs={12} lg={4} className="my-auto plan">
                    <Card className="my-4 px-2 py-4 p-md-4 planCard">
                        <h2 className="text-center mb-4">{plan.name}</h2>
                        <p className="text-center my-4">
                            Only ${plan.price} per month *
                        </p>
                        {planFeatures(plan)}
                    </Card>
                </Col>
            );
        });
    };

    const disclaimers = block => {
        return block.disclaimers.map((note, index) => {
            return (
                <p key={index}>
                    <small>{note}</small>
                </p>
            );
        });
    };

    const pageTitle = {
        name: "Wordpress Care Plans",
        url: "/wordpress-care-plans",
    };

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout
                renderHeaderSolid={true}
                headerTitle={[true, pageTitle]}
                bodyClasses="wordpressCarePlans"
            >
                <SEO title={pageTitle.name} />

                {/* Hero Section */}
                <section className="hero">
                    <Row className="alk-container mx-0 align-items-center">
                        <Col xs={12} lg={6}>
                            <p className="mb-5">
                                Let us keep your site running at it&apos;s best,
                                with first class hosting and website support.
                            </p>
                            <Button
                                block
                                onClick={handleViewPlansClick}
                                color="primary"
                            >
                                See Our Care Plans
                            </Button>
                        </Col>
                    </Row>
                </section>

                {/* Section 1 */}
                <section className="alk-container my-5">
                    <Row>
                        <Col xs={12} lg={6}>
                            <h2 className="mb-4">
                                {
                                    data.websiteCarePlansJson.sections[0]
                                        .blocks[0].heading
                                }
                            </h2>
                            <p className="mb-5">
                                {
                                    data.websiteCarePlansJson.sections[0]
                                        .blocks[0].content
                                }
                            </p>
                            <p className="mb-5">
                                {
                                    data.websiteCarePlansJson.sections[0]
                                        .blocks[1].content
                                }
                            </p>
                            <p className="mb-5">
                                {
                                    data.websiteCarePlansJson.sections[0]
                                        .blocks[2].content
                                }
                            </p>
                        </Col>
                        <Col xs={12} lg={6}>
                            {data.wordpressDashboard.childImageSharp && (
                                <Img
                                    className="my-5 my-lg-0"
                                    fluid={
                                        data.wordpressDashboard.childImageSharp
                                            .fluid
                                    }
                                    alt="Wordpress plugins updated by professionals"
                                />
                            )}
                        </Col>
                    </Row>
                </section>

                {/* Section 2 */}
                <section className="deliverYourMessage mb-lg-4 py-5">
                    <Row className="alk-container">
                        <Col xs={12} lg={6}>
                            {data.wordpressDashboard.childImageSharp && (
                                <Img
                                    className="my-lg-auto mb-5"
                                    fluid={
                                        data.wordpressDashboard.childImageSharp
                                            .fluid
                                    }
                                    alt="Clean, Professional, Handcrafted websites that are designed to convert."
                                />
                            )}
                        </Col>

                        <Col xs={12} lg={6}>
                            <h2 className="mb-4">
                                {
                                    data.websiteCarePlansJson.sections[1]
                                        .blocks[0].heading
                                }
                            </h2>
                            <p className="text-white">
                                {
                                    data.websiteCarePlansJson.sections[1]
                                        .blocks[0].content
                                }
                            </p>
                            <Row>
                                <Col xs={12} md={6} className="my-4">
                                    <Button
                                        block
                                        onClick={handleViewPlansClick}
                                        color="primary"
                                    >
                                        View our Web Design Plans
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>

                {/* Section 3 */}
                <section className="wordpressDesign mb-4 pb-4 py-lg-4">
                    <h1>{data.websiteCarePlansJson.sections[1].heading}</h1>
                    <Row className="alk-container pt-lg-4 flex-column-reverse flex-lg-row">
                        <Col xs={12} lg={7}>
                            <h2 className="mb-4">
                                {
                                    data.websiteCarePlansJson.sections[2]
                                        .blocks[0].heading
                                }
                            </h2>
                            <p className="">
                                {
                                    data.websiteCarePlansJson.sections[2]
                                        .blocks[0].content
                                }
                            </p>
                        </Col>

                        <Col xs={12} lg={5}>
                            {data.wordpressDashboard.childImageSharp && (
                                <Img
                                    className="my-4 my-lg-0"
                                    fluid={
                                        data.wordpressDashboard.childImageSharp
                                            .fluid
                                    }
                                    alt="Wordpress Websites, built from the ground up on the best CMS in the world."
                                />
                            )}
                        </Col>
                    </Row>
                </section>

                {/* Section 4 */}
                <section
                    ref={plansSection}
                    className="webDesignPlans mb-4 py-4"
                >
                    <Row className="alk-container">
                        <Col>
                            <h2 className="text-center mb-4">
                                {
                                    data.websiteCarePlansJson.sections[3]
                                        .blocks[0].heading
                                }
                            </h2>
                            <p>
                                {
                                    data.websiteCarePlansJson.sections[3]
                                        .blocks[0].content
                                }
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-4 alk-container" noGutters>
                        {planCards(data.websiteCarePlansJson.sections[4].plans)}
                    </Row>
                    <Row className="my-5 alk-container" noGutters>
                        {disclaimers(
                            data.websiteCarePlansJson.sections[3].blocks[0]
                        )}
                    </Row>
                </section>

                <FreeWebsiteAnalysis />
            </Layout>
        </ScrollWrapper>
    );
};

const dreamForm = React.createRef();
const plansSection = React.createRef();

const handleViewPlansClick = () => {
    window.scrollTo({
        top: plansSection.current.offsetTop - 80,
        behavior: "smooth",
    });
};
const handleQuoteClick = () => {
    window.scrollTo({
        top: dreamForm.current.offsetTop - 80,
        behavior: "smooth",
    });
};

const handleScroll = () => {};

export const query = graphql`
    {
        websiteCarePlansJson {
            sections {
                id
                blocks {
                    heading
                    content
                    disclaimers
                }
                plans {
                    name
                    icon
                    price
                    features
                }
            }
        }
        wordpressDashboard: file(relativePath: { regex: "/wordpress-dashboard.jpg/" }) {
            ...fluidImageXS
        }
    }
`;

export default WebDesign;
