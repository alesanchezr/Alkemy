import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import "../utils/utils.js";
import { Col, Row } from "reactstrap";
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
        {
            name: string (subheader text),
            url: string (link for subheader text)
        }
      ]
  bodyClasses: additional classes to add to body tag
*/

const AboutAlkemy = ({ data }) => {
    // pageTitle: SEO friendly title for the title bar
    const pageTitle = { name: "About Alkemy", url: "/about-alkemy" };

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout
                renderHeaderSolid={true}
                headerTitle={[true, pageTitle]}
                bodyClasses="webDesign"
            >
                <SEO title={pageTitle.name} />

                {/* Section 1 */}
                <section className="whoWeAre">
                    <Row className="align-items-center h-100">
                        <Col
                            xs={12}
                            lg={6}
                            className="text-center mb-5 img-col"
                        >
                            {data.puzzlePieces.childImageSharp && (
                                <Img
                                    imgStyle={{ objectFit: "cover" }}
                                    className="h-100"
                                    fluid={
                                        data.puzzlePieces.childImageSharp.fluid
                                    }
                                    alt="Alkemy is always the best fit for your business and digital presence."
                                />
                            )}
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="alk-container">
                                <h2 className="mb-4">
                                    {data.aboutJson &&
                                        data.aboutJson.sections[0].blocks[0]
                                            .heading}
                                </h2>
                                <p className="mb-4">
                                    {data.aboutJson &&
                                        data.aboutJson.sections[0].blocks[0]
                                            .content}
                                </p>
                            </div>

                            <div className="arrow ml-4 ml-lg-0">
                                {data.arrowLine.childImageSharp && (
                                    <Img
                                        objectFit="contain"
                                        className="h-100"
                                        fluid={
                                            data.arrowLine.childImageSharp.fluid
                                        }
                                        alt="Arrow showing a journey from one point down to the next section."
                                    />
                                )}
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Section 2 */}
                <section className="aboutValues py-4 alk-container ">
                    <Row className="py-4 px-0">
                        <Col xs={12} md={8}>
                            <div className="coreValues py-4 pl-5 pr-3 p-lg-5 font-weight-light">
                                <ol>
                                    <li>
                                        <span className="valueTitle">
                                            {data.aboutJson &&
                                                data.aboutJson.sections[1]
                                                    .blocks[0].heading}
                                        </span>
                                        <br />
                                        {data.aboutJson &&
                                            data.aboutJson.sections[1].blocks[0]
                                                .content}
                                    </li>
                                    <li>
                                        <span className="valueTitle">
                                            {data.aboutJson &&
                                                data.aboutJson.sections[1]
                                                    .blocks[1].heading}
                                        </span>
                                        <br />
                                        {data.aboutJson &&
                                            data.aboutJson.sections[1].blocks[1]
                                                .content}
                                        <ul>
                                            <li>
                                                <span className="valueTitle">
                                                    {data.aboutJson &&
                                                        data.aboutJson
                                                            .sections[1]
                                                            .blocks[2].heading}
                                                </span>{" "}
                                                {data.aboutJson &&
                                                    data.aboutJson.sections[1]
                                                        .blocks[2].content}
                                            </li>
                                            <li>
                                                <span className="valueTitle">
                                                    {data.aboutJson &&
                                                        data.aboutJson
                                                            .sections[1]
                                                            .blocks[3].heading}
                                                </span>{" "}
                                                {data.aboutJson &&
                                                    data.aboutJson.sections[1]
                                                        .blocks[3].content}
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="valueTitle">
                                            {data.aboutJson &&
                                                data.aboutJson.sections[1]
                                                    .blocks[4].heading}
                                        </span>
                                        <br />
                                        {data.aboutJson &&
                                            data.aboutJson.sections[1].blocks[4]
                                                .content}
                                    </li>
                                </ol>
                            </div>
                        </Col>
                    </Row>
                </section>

                {/* Section 3 */}
                <section className="ourPassion py-4 alk-container">
                    <Row className="py-2">
                        <Col xs={12}>
                            <div>
                                <h2 className="mb-4">
                                    {data.aboutJson &&
                                        data.aboutJson.sections[2].blocks[0]
                                            .heading}
                                </h2>
                                <p>
                                    {data.aboutJson &&
                                        data.aboutJson.sections[2].blocks[0]
                                            .content}
                                </p>
                                <p>
                                    {data.aboutJson &&
                                        data.aboutJson.sections[2].blocks[1]
                                            .content}
                                </p>
                                <blockquote className="blockquote default my-4 py-3">
                                    <h2 className="text-gray bold">kai·zen</h2>
                                    <p>
                                        /ˈkīzən/
                                        <br />
                                        noun
                                    </p>
                                    <p>
                                        a Japanese business philosophy of
                                        continuous improvement of working
                                        practices, personal efficiency, etc.
                                    </p>
                                </blockquote>
                                <p>
                                    {data.aboutJson &&
                                        data.aboutJson.sections[2].blocks[2]
                                            .content}
                                </p>
                            </div>
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

const handleScroll = () => {};

export const query = graphql`
    {
        aboutJson {
            sections {
                id
                blocks {
                    heading
                    content
                }
            }
        }
        puzzlePieces: file(relativePath: { regex: "/puzzle-pieces.jpg/" }) {
            ...fluidImage
        }
        arrowLine: file(relativePath: { regex: "/arrowline.png/" }) {
            ...fluidImageSmall
        }
    }
`;

export default AboutAlkemy;
