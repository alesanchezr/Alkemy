/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from './header'
import Footer from './footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronDown,
  faSpinner,
  faMobileAlt,
  faCheck,
  faChartPie,
  faChartLine,
  faRocket,
  faMoneyBillAlt,
  faGem,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt,faCalendarPlus,faCheckCircle } from '@fortawesome/free-regular-svg-icons'

library.add(
  fab,
  faChevronDown,
  faCalendarAlt,
  faCalendarPlus,
  faSpinner,
  faMobileAlt,
  faCheck,
  faCheckCircle,
  faChartPie,
  faChartLine,
  faRocket,
  faMoneyBillAlt,
  faGem,
  faStar
)

const Layout = ({ children, location, renderHeaderSolid, headerTitle, headerType, bodyClasses }) => (
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
      <div
        key={`body`}
        id="bodyWrap"
        >
        {/* Google Tag Manager (noscript) */}
      	<noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TRL98WJ"
      	height="0" width="0" style={{display:'none',visibility:'hidden'}} title="googletagmanager"/>
        </noscript>
      	{/* End Google Tag Manager (noscript) */}

        <Header
          hideHeader={headerTitle?headerTitle[0]:null}
          siteTitle={data.site.siteMetadata.title}
          renderHeaderSolid={renderHeaderSolid}
          />
        <div
          id='main'
          style={{
            margin: '0 auto',
            maxWidth: 1920,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <div className="callNow d-lg-none">
          <a href="tel:8774255369" title="Call Now!"><FontAwesomeIcon icon="mobile-alt" size="3x" color="white" className="callNowButton"/></a>
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerTitle: PropTypes.array
}

export default Layout
