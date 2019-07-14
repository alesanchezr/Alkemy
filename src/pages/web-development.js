import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import "../utils/utils.js";
import { Button, Col, Row } from "reactstrap";
import Layout from "../components/layout";
import ScrollWrapper from "../components/scrollWrapper.jsx";
import BuildYourDream from "../components/BuildYourDream.jsx";
import SEO from "../components/seo";

/*
Layout props:
  pageTitle: SEO friendly title for the title bar
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        string (subheader text)
      ]
*/

const WebDevelopment = ({ data }) => {
    const pageTitle = "Web Development Services";

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout
                renderHeaderSolid={true}
                headerTitle={[true, pageTitle]}
                bodyClasses="webDesign"
            >
                <SEO title={pageTitle.name} />

                {/* Section 1 */}
                <section className="px-5 mt-4 mb-5">
                    <Row className="mb-5">
                        <Col>
                            <h2 className="mb-4">
                                {
                                    data.webDevelopmentJson.sections[0]
                                        .blocks[0].heading
                                }
                            </h2>
                            <p>
                                {
                                    data.webDevelopmentJson.sections[0]
                                        .blocks[0].content
                                }
                            </p>
                            <p>
                                {
                                    data.webDevelopmentJson.sections[0]
                                        .blocks[1].content
                                }
                            </p>
                        </Col>
                    </Row>
                    <Row className="flex-column-reverse flex-md-row">
                        <Col xs={12} sm={6}>
                            <h2 className="mb-4">
                                {
                                    data.webDevelopmentJson.sections[0]
                                        .blocks[2].heading
                                }
                            </h2>
                            <p>
                                {
                                    data.webDevelopmentJson.sections[0]
                                        .blocks[2].content
                                }
                            </p>
                            <p>
                                {
                                    data.webDevelopmentJson.sections[0]
                                        .blocks[3].content
                                }
                            </p>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <Button
                                        onClick={handleDiscussClick}
                                        color="primary"
                                        block
                                    >
                                        Let&apos;s Discuss My Project
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={6} className="text-center">
                            {data.webDevFlasks.childImageSharp && (
                                <Img
                                    className="mx-auto"
                                    imgStyle={{ objectFit: "contain" }}
                                    style={{ maxWidth: "500px" }}
                                    fluid={
                                        data.webDevFlasks.childImageSharp.fluid
                                    }
                                    alt="Alkemy knows the right languages and framworks to get the job done correctly."
                                />
                            )}
                        </Col>
                    </Row>
                </section>

                {/* Section 2 */}
                <section className="deliverYourMessage mb-4 py-4">
                    <h1>{data.webDevelopmentJson.sections[1].heading}</h1>
                    <Row className="px-5 pt-4">
                        <Col xs={12} md={6}>
                            {data.webDevGraphic.childImageSharp && (
                                <Img
                                    imgStyle={{
                                        maxHeight: "auto",
                                        maxWidth: "550px",
                                        objectFit: "contain",
                                    }}
                                    className="my-auto"
                                    fluid={
                                        data.webDevGraphic.childImageSharp.fluid
                                    }
                                    alt="Alkemy builds and crafts your application to specification."
                                />
                            )}
                        </Col>

                        <Col xs={12} md={6}>
                            <h2 className="mb-4">
                                {
                                    data.webDevelopmentJson.sections[1]
                                        .blocks[0].heading
                                }
                            </h2>
                            <p className="text-white">
                                {
                                    data.webDevelopmentJson.sections[1]
                                        .blocks[0].content
                                }
                            </p>
                            <Button
                                onClick={handleDiscussClick}
                                color="primary"
                                block
                            >
                                Let&apos;s Discuss My Project
                            </Button>
                        </Col>
                    </Row>
                </section>

                {/* Section 3 */}
                <section className="wordpressDesign mb-4 py-4">
                    <Row className="px-5 pt-4">
                        <Col xs={12} md={7}>
                            <h2 className="mb-4">
                                {
                                    data.webDevelopmentJson.sections[2]
                                        .blocks[0].heading
                                }
                            </h2>
                            <p className="">
                                {
                                    data.webDevelopmentJson.sections[2]
                                        .blocks[0].content
                                }
                            </p>
                        </Col>

                        <Col xs={12} md={5}>
                            {data.codeScreen.childImageSharp && (
                                <Img
                                    className="my-auto h-100"
                                    fluid={
                                        data.codeScreen.childImageSharp.fluid
                                    }
                                    alt="Let us handle the coding, so that your project is built skillfully."
                                />
                            )}
                        </Col>
                    </Row>
                </section>

                <section ref={dreamForm}>
                    <BuildYourDream />
                </section>
            </Layout>
        </ScrollWrapper>
    );
};

const dreamForm = React.createRef();

const handleDiscussClick = () => {
    window.scrollTo({
        top: dreamForm.current.offsetTop - 80,
        behavior: "smooth",
    });
};

const handleScroll = () => {};

export const query = graphql`
    {
        webDevelopmentJson {
            sections {
                id
                blocks {
                    heading
                    content
                }
            }
        }
        webDevFlasks: file(relativePath: { regex: "/web-dev.png/" }) {
            ...fluidImageSmall
        }
        webDevGraphic: file(relativePath: { regex: "/developmentbtn.png/" }) {
            ...fluidImageSmall
        }
        codeScreen: file(relativePath: { regex: "/code-screen.jpg/" }) {
            ...fluidImageSmall
        }
    }
`;

export default WebDevelopment;
