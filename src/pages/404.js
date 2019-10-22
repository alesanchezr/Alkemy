import React from "react";
import ScrollWrapper from "../components/scrollWrapper.jsx";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import "../utils/utils.js";
import { Col, Row } from "reactstrap";

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

const pageTitle = { name: "404: Not Found" ,url:"/"};

const NotFoundPage = ({ data }) => (
    <ScrollWrapper onWindowScroll={handleScroll}>
        <Layout
            renderHeaderSolid={true}
            headerTitle={[true, pageTitle]}
            bodyClasses="page-404"
        >
            <SEO title={pageTitle.name} />
            <Row className="alk-container h-100 align-items-end py-0 mx-auto">
                <Col xs={12} md={4}>
                    {data.wizard.childImageSharp && (
                        <Img
                            imgStyle={{
                                objectFit: "cover",
                                objectPostion: "bottom center",
                            }}
                            className="wizard"
                            fluid={data.wizard.childImageSharp.fluid}
                            alt="404 Wizard can't find your resource"
                        />
                    )}
                </Col>
                <Col xs={12} md={8} className="scroll">
                    <div className="scroll-text">
                        <h2>I have no memory of this place...</h2>
                        <p>
                            Oh dear, the alkemist doesn&apos;t recognize this
                            route. Here are some reasons that may have made
                            his memory foggy:
                        </p>
                        <ol>
                            <li>This location was just a dream</li>
                            <li>
                                You may have given the wrong directions (check
                                your spelling!)
                            </li>
                            <li>You purposely mislead him, you scoundral!</li>
                            <li>
                                You were provided the wrong directions. You
                                should scold the evil sorcerer that refered you!
                            </li>
                        </ol>
                    </div>
                </Col>
            </Row>
        </Layout>
    </ScrollWrapper>
);

const handleScroll = () => {};

export const query = graphql`
    {
        wizard: file(relativePath: { regex: "/wizard.png/" }) {
            ...fluidImage
        }
        scroll: file(relativePath: { regex: "/scroll.png/" }) {
            ...fluidImage
        }
    }
`;

export default NotFoundPage;


