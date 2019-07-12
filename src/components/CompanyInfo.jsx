import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Col, Row } from "reactstrap";
import SocialLinks from "./SocialLinks.jsx";

const CompanyInfo = () => {
    return (
        <StaticQuery
            query={graphql`
                query CompanyDataQuery {
                    site {
                        siteMetadata {
                            company
                            address
                            city
                            state
                            zip
                            phone
                            phoneDial
                        }
                    }
                }
            `}
            render={data => (
                <div className="companyInfo p-4">
                    <Row>
                        <Col>
                            <h2>{data.site.siteMetadata.company}</h2>
                            <Row>
                                <Col xs={12} md={7}>
                                    <address>
                                        {data.site.siteMetadata.address}
                                        <br />
                                        {data.site.siteMetadata.city},{" "}
                                        {data.site.siteMetadata.state}{" "}
                                        {data.site.siteMetadata.zip}
                                        <br />
                                        <a
                                            href={
                                                `tel:` +
                                                data.site.siteMetadata.phoneDial
                                            }
                                        >
                                            {data.site.siteMetadata.phone}
                                        </a>
                                    </address>
                                </Col>
                                <Col xs={12} md={5}>
                                    <h6>On Social Media:</h6>
                                    <SocialLinks className="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            )}
        />
    );
};

export default CompanyInfo;
