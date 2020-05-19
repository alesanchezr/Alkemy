import React,{useEffect,useState} from "react";
import {Link} from "gatsby";
import { Col, Row } from "reactstrap";
import { addJS } from "../utils/utils.js";
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

const TermsAndConditions = ({ data }) => {
    // pageTitle: SEO friendly title for the title bar
    const pageTitle = { name: "Terms & Conditions", url: "/terms-and-conditions" };
    
    const [state,setState] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined" && terms.current !== null) {
            fetch(
                "https://app.termageddon.com/api/policy/ZFdwUE1IVmlTMFpKY1ZwNGJVRTlQUT09?no-title=true"
            )
                .then(res => res.text())
                .then(res => setState(res));
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" ) {
            terms.current.innerHTML = state
        }
    });

    addJS(
        `body`,
        false,
        `//app.termageddon.com/js/termageddon.js`
    );

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout
                renderHeaderSolid={true}
                headerTitle={[true, pageTitle]}
                bodyClasses="terms"
            >
                <SEO title={pageTitle.name} />

                {/* Section 1 */}
                <section
                    className="wrap alk-container my-5"
                    ref={terms}
                    data-policy-key="ZFdwUE1IVmlTMFpKY1ZwNGJVRTlQUT09"
                />

                <section ref={dreamForm}>
                    <BuildYourDream />
                </section>
            </Layout>
        </ScrollWrapper>
    );
};
const terms = React.createRef();
const dreamForm = React.createRef();

const handleScroll = () => {};

export default TermsAndConditions;
