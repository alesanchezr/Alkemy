import React,{useEffect} from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { fluidImageSmall } from "../utils/utils.js";
import {
    CardDeck,
    Card,
    CardText,
    CardImgOverlay,
    CardTitle,
    CardBody,
    CardFooter,
    Button,
    Col,
    Row,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/layout.js";
import ScrollWrapper from "../components/scrollWrapper.jsx";
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

const ProjectCalculator = ({ data }) => {
    const pageTitle = {
        name: "Project Calculator",
        url: "/project-calculator",
    };

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout headerTitle={[true, pageTitle]} bodyClasses="projectCalculator">
                <SEO title={pageTitle.name} />

                {/* Section 1 */}
                <section className="">
                    
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
