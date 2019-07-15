/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import InjectContext from "../store/appContext.js";
import { Location } from "@reach/router";
import Header from "./header";
import Footer from "./footer";

const Modernizr = typeof window!=='undefined' && require("../utils/modernizr-custom");

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faChevronDown,
    faSpinner,
    faMobileAlt,
    faArrowDown,
    faArrowUp,
    faCheck,
    faChartPie,
    faChartLine,
    faRocket,
    faMoneyBillAlt,
    faGem,
    faStar,
    faSearch,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
    faCalendarAlt,
    faCalendarPlus,
    faCheckCircle,
    faListAlt,
    faClock,
    faUser,
} from "@fortawesome/free-regular-svg-icons";

library.add(
    fab,
    faArrowDown,
    faArrowUp,
    faChevronDown,
    faCalendarAlt,
    faCalendarPlus,
    faSpinner,
    faMobileAlt,
    faCheck,
    faCheckCircle,
    faChartPie,
    faChartLine,
    faClock,
    faListAlt,
    faRocket,
    faMoneyBillAlt,
    faGem,
    faGlobe,
    faStar,
    faSearch,
    faUser
);

const Layout = ({
    location,
    children,
    renderHeaderSolid,
    headerTitle,
    headerType,
    bodyClasses,
    search,
}) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.body.classList = bodyClasses;
        }
    }, []);
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <div key={`body`} id="bodyWrap">
                    {/* Google Tag Manager (noscript) */}
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-TRL98WJ"
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                            title="googletagmanager"
                        />
                    </noscript>
                    {/* End Google Tag Manager (noscript) */}

                    <Header
                        hideHeader={headerTitle ? headerTitle[0] : null}
                        pageTitle={headerTitle ? headerTitle[1] : {}}
                        renderHeaderSolid={renderHeaderSolid}
                        search={search}
                    />
                    <div
                        id="main"
                        style={{
                            margin: "0 auto",
                            maxWidth: 1920,
                            paddingTop: 0,
                        }}
                    >
                        {children}
                    </div>
                    <div className="callNow d-lg-none">
                        <a href="tel:8774255369" title="Call Now!">
                            <FontAwesomeIcon
                                icon="mobile-alt"
                                size="3x"
                                color="white"
                                className="callNowButton"
                            />
                        </a>
                    </div>
                    <Footer />
                </div>
            )}
        />
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    headerTitle: PropTypes.array,
    renderHeaderSolid: PropTypes.bool,
    search: PropTypes.bool,
};

export default InjectContext(Layout);
