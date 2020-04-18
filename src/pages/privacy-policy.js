import React from "react";
import {Link} from "gatsby";
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

const PrivacyPolicy = ({ data }) => {
    // pageTitle: SEO friendly title for the title bar
    const pageTitle = { name: "Privacy Policy", url: "/privacy-policy" };

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout
                renderHeaderSolid={true}
                headerTitle={[true, pageTitle]}
                bodyClasses="privacy"
            >
                <SEO title={pageTitle.name} />

                {/* Section 1 */}
                <section className="wrap alk-container my-4">
                    <Row className="align-items-center h-100">
                        <Col xs={12}>
                            <h3>Your privacy is critically important to us.</h3>
                            <br />
                            <span className="text-capitalize">
                                Alkemy, Inc
                            </span>{" "}
                            is located at:
                            <br />
                            <address>
                                <br />
                                9055 wiles road, 202 <br />
                                Coral Springs, FL 33067 <br />
                                Tel: 877-425-5369{" "}
                            </address>
                            <p>
                                It is Alkemy&apos;s policy to respect your
                                privacy regarding any information we may collect
                                while operating our website. This Privacy Policy
                                applies to{" "}
                                <Link to="/">https://www.alkemyinc.com</Link>{" "}
                                (hereinafter, &lsquo;us&rsquo;,
                                &lsquo;we&rsquo;, or
                                &lsquo;https://www.alkemyinc.com&rsquo;). We
                                respect your privacy and are committed to
                                protecting personally identifiable information
                                you may provide us through the Website. We have
                                adopted this privacy policy (&lsquo;Privacy
                                Policy&rsquo;) to explain what information may
                                be collected on our Website, how we use this
                                information, and under what circumstances we may
                                disclose the information to third parties. This
                                Privacy Policy applies only to information we
                                collect through the Website and does not apply
                                to our collection of information from other
                                sources.
                            </p>
                            <p>
                                This Privacy Policy, together with the Terms and
                                conditions posted on our Website, set forth the
                                general rules and policies governing your use of
                                our Website. Depending on your activities when
                                visiting our Website, you may be required to
                                agree to additional terms and conditions.
                            </p>
                            <h2>Website Visitors</h2>
                            <p>
                                Like most website operators, Alkemy
                                collects non-personally-identifying information
                                of the sort that web browsers and servers
                                typically make available, such as the browser
                                type, language preference, referring site, and
                                the date and time of each visitor request.
                                Alkemy&apos;s purpose in collecting
                                non-personally identifying information is to
                                better understand how Alkemy&apos;s
                                visitors use its website. From time to time,
                                Alkemy may release
                                non-personally-identifying information in the
                                aggregate, e.g., by publishing a report on
                                trends in the usage of its website.
                            </p>
                            <p>
                                Alkemy also collects potentially
                                personally-identifying information like Internet
                                Protocol (IP) addresses for logged in users and
                                for users leaving comments on
                                <Link to="/">
                                    https://www.alkemyinc.com
                                </Link>{" "}
                                blog posts. Alkemy only discloses logged
                                in user and commenter IP addresses under the
                                same circumstances that it uses and discloses
                                personally-identifying information as described
                                below.
                            </p>
                            <h2>
                                Gathering of Personally-Identifying Information
                            </h2>
                            <p>
                                Certain visitors to Alkemy&apos;s websites
                                choose to interact with Alkemy in ways
                                that require Alkemy to gather
                                personally-identifying information. The amount
                                and type of information that Alkemy
                                gathers depends on the nature of the
                                interaction.
                            </p>
                            <h2>Security</h2>
                            <p>
                                The security of your Personal Information is
                                important to us, but remember that no method of
                                transmission over the Internet, or method of
                                electronic storage is 100% secure. While we
                                strive to use commercially acceptable means to
                                protect your Personal Information, we cannot
                                guarantee its absolute security.
                            </p>
                            <h2>Links To External Sites</h2>
                            <p>
                                Our Service may contain links to external sites
                                that are not operated by us. If you click on a
                                third party link, you will be directed to that
                                third party&apos;s site. We strongly advise you
                                to review the Privacy Policy and terms and
                                conditions of every site you visit.
                            </p>
                            <p>
                                We have no control over, and assume no
                                responsibility for the content, privacy policies
                                or practices of any third party sites, products
                                or services.
                            </p>
                            <h2>
                                Protection of Certain Personally-Identifying
                                Information
                            </h2>
                            <p>
                                Alkemy discloses potentially
                                personally-identifying and
                                personally-identifying information only to those
                                of its employees, contractors and affiliated
                                organizations that (i) need to know that
                                information in order to process it on Alkemy,
                                Inc.&apos;s behalf or to provide services
                                available at Alkemy&apos;s website, and
                                (ii) that have agreed not to disclose it to
                                others. Some of those employees, contractors and
                                affiliated organizations may be located outside
                                of your home country; by using Alkemy,
                                Inc.&apos;s website, you consent to the transfer
                                of such information to them. Alkemy will
                                not rent or sell potentially
                                personally-identifying and
                                personally-identifying information to anyone.
                                Other than to its employees, contractors and
                                affiliated organizations, as described above,
                                Alkemy discloses potentially
                                personally-identifying and
                                personally-identifying information only in
                                response to a subpoena, court order or other
                                governmental request, or when Alkemy
                                believes in good faith that disclosure is
                                reasonably necessary to protect the property or
                                rights of Alkemy, third parties or the
                                public at large.
                            </p>
                            <p>
                                If you are a registered user of
                                <Link to="/">
                                    https://www.alkemyinc.com
                                </Link>{" "}
                                and have supplied your email address, Alkemy,
                                Inc. may occasionally send you an email to tell
                                you about new features, solicit your feedback,
                                or just keep you up to date with what&apos;s
                                going on with Alkemy and our products. We
                                primarily use our blog to communicate this type
                                of information, so we expect to keep this type
                                of email to a minimum. If you send us a request
                                (for example via a support email or via one of
                                our feedback mechanisms), we reserve the right
                                to publish it in order to help us clarify or
                                respond to your request or to help us support
                                other users. Alkemy takes all measures
                                reasonably necessary to protect against the
                                unauthorized access, use, alteration or
                                destruction of potentially
                                personally-identifying and
                                personally-identifying information.
                            </p>
                            <h2>Aggregated Statistics</h2>
                            <p>
                                Alkemy may collect statistics about the
                                behavior of visitors to its website. Alkemy,
                                Inc. may display this information publicly or
                                provide it to others. However, Alkemy does
                                not disclose your personally-identifying
                                information.
                            </p>
                            <h2>Cookies</h2>
                            <p>
                                To enrich and perfect your online experience,
                                Alkemy uses &lsquo;Cookies&rsquo;, similar
                                technologies and services provided by others to
                                display personalized content, appropriate
                                advertising and store your preferences on your
                                computer.
                            </p>
                            <p>
                                A cookie is a string of information that a
                                website stores on a visitor&apos;s computer, and
                                that the visitor&apos;s browser provides to the
                                website each time the visitor returns. Alkemy,
                                Inc. uses cookies to help Alkemy identify
                                and track visitors, their usage of
                                <Link to="/">https://www.alkemyinc.com</Link>,
                                and their website access preferences. Alkemy,
                                Inc. visitors who do not wish to have cookies
                                placed on their computers should set their
                                browsers to refuse cookies before using Alkemy,
                                Inc.&apos;s websites, with the drawback that
                                certain features of Alkemy&apos;s websites
                                may not function properly without the aid of
                                cookies.
                            </p>
                            <p>
                                By continuing to navigate our website without
                                changing your cookie settings, you hereby
                                acknowledge and agree to Alkemy&apos;s use
                                of cookies.
                            </p>
                            <h2>Privacy Policy Changes</h2>
                            <p>
                                Although most changes are likely to be minor,
                                Alkemy may change its Privacy Policy from
                                time to time, and in Alkemy&apos;s sole
                                discretion. Alkemy encourages visitors to
                                frequently check this page for any changes to
                                its Privacy Policy. Your continued use of this
                                site after any change in this Privacy Policy
                                will constitute your acceptance of such change.
                            </p>
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

export default PrivacyPolicy;
