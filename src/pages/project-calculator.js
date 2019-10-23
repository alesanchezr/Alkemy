import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { fluidImageSmall } from "../utils/utils.js";
import {
    Button,Col,Row
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/layout.js";
import ScrollWrapper from "../components/scrollWrapper.jsx";
import SEO from "../components/seo";
import ProjectEstimationTool from "../components/ProjectEstimationTool";

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

const ProjectCalculator = ({ data }) => {
    const pageTitle = {
        name: "Project Calculator",
        url: "/project-calculator",
    };

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout
                renderHeaderSolid={true}
                headerTitle={[true, pageTitle]}
                bodyClasses="projectCalculator"
            >
                <SEO title={pageTitle.name} />

                {/* Section 1 */}
                <section className="intro alk-container my-4">
                    <h2 className="mb-4">
                        Welcome to our Project Estimation Tool!
                    </h2>
                    <p>
                        We understand that sometimes, estimating a project
                        budget can be tough. However, setting aside a budget is
                        crucial to being successful with any development
                        project. So to help you get a ballpark ready, we have
                        decided to provide this convenient project estimation
                        tool.
                    </p>
                    <p>
                        To use the tool, just fill out the questions on the form
                        and our system will estimate your project cost.
                    </p>
                </section>

                {/* Section 2 */}
                <section className="main-calulator alk-container">
                    <ProjectEstimationTool />
                </section>

                {/* Section 3 */}
                <section className="disclaimer alk-container">
                    <p className="small">
                        These numbers shouldn&apos;t be taken as a final amount,
                        but rather, should be used to get an idea of where your
                        costs may be.
                    </p>
                </section>
            </Layout>
        </ScrollWrapper>
    );
};

const introSection = React.createRef();

const handleScroll = () => {

};

// export const query = graphql`
//     {
        
//     }
// `;

export default ProjectCalculator;
