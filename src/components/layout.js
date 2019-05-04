import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import Header from './header'
import Footer from './footer'

import msTileImg from '../assets/images/favicons/ms-icon-144x144.png'
import msBrowserConfig from '../assets/images/favicons/browserconfig.xml'
import manifest from '../assets/images/favicons/manifest.json'

import appleIcon57 from '../assets/images/favicons/apple-icon-57x57.png'
import appleIcon60 from '../assets/images/favicons/apple-icon-60x60.png'
import appleIcon72 from '../assets/images/favicons/apple-icon-72x72.png'
import appleIcon76 from '../assets/images/favicons/apple-icon-76x76.png'
import appleIcon114 from '../assets/images/favicons/apple-icon-114x114.png'
import appleIcon120 from '../assets/images/favicons/apple-icon-120x120.png'
import appleIcon144 from '../assets/images/favicons/apple-icon-144x144.png'
import appleIcon152 from '../assets/images/favicons/apple-icon-152x152.png'
import appleIcon180 from '../assets/images/favicons/apple-icon-180x180.png'

import androidIcon192 from '../assets/images/favicons/android-icon-192x192.png'

import favicon16 from '../assets/images/favicons/favicon-16x16.png'
import favicon32 from '../assets/images/favicons/favicon-32x32.png'
import favicon96 from '../assets/images/favicons/favicon-96x96.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronDown,
  faSpinner,
  faMobileAlt,
  faCheck,
  faChartPie,
  faChartLine,
  faRocket
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
  faRocket
)

const Layout = ({ children, location, pageTitle, renderHeaderSolid, headerTitle, headerType, bodyClasses }) => (
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
        <Helmet
          bodyAttributes={(headerType==="blog")?{class: bodyClasses+' blog'}:{class: bodyClasses+' page'}}
          title={pageTitle}
          meta={[
            { name: 'charset', content: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
            { name: 'description', content: 'Alkemy, Inc. | Best Quality Software Development, Web Design, eCommerce Design, and Marketing.' },
            { name: 'keywords', content: 'Software Development, Web Design, eCommerce Design, Digital Marketing, React, PHP, HTML, Python, Django, Gatsby, GraphQL, Wordpress Design, 3dcart, Shopify, WooCommerce, SEM, Search Engine Marketing, SEO, Search Engine Optimization, Social Media Marketing, Web Strategy' },
            { name: 'referrer', content: 'origin-when-crossorigin' },
            { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
            { property: 'og:type', content: 'page' },
            { name: 'apple-mobile-web-app-title', content: 'Alkemy, Inc.' },
            { name: 'application-name', content: 'Alkemy, Inc.' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: msTileImg },
            { name: 'msapplication-config', content: msBrowserConfig },
            { name: 'theme-color', content: '#ffffff' },
            { name: 'author', content: 'Alkemy, Inc.' },
            { property: 'og:image', content: 'wp-content/themes/alkemy/assets/images/thumbnail.png' },
            { name: 'twitter:image:alt', content: 'Screenshot of the Alkemy, Inc. Homepage.' },
            { name: 'msvalidate.01', content: '304B53089DF131D38A8031F5232E9FB1' },
          ]}
        >

          <html lang="en" amp xmlns="http://www.w3.org/1999/xhtml" />
          <link rel="canonical" href="https://www.alkemyinc.com" />

          {/* App Icons and Favicon */}
          <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57}>
          <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60}>
          <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72}>
          <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76}>
          <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114}>
          <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120}>
          <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144}>
          <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152}>
          <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180}>
          <link rel="icon" type="image/png" sizes="192x192"  href={androidIcon192}>
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16}>
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32}>
          <link rel="icon" type="image/png" sizes="96x96" href={favicon96}>
          <link rel="manifest" href={manifest}>



          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />

          {/* Google Tag Manager */}
        	<script async defer>{`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start':new Date().getTime(),event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TRL98WJ');
          `}</script>
        	{/* End Google Tag Manager */}

          {/* Global site tag (gtag.js) - Google Analytics */}
        	<script async defer src="https://www.googletagmanager.com/gtag/js?id=UA-118149481-1" />
        	<script>{`
        	  window.dataLayer = window.dataLayer || [];
        	  function gtag(){dataLayer.push(arguments);}
        	  gtag('js', new Date());

        	  gtag('config', 'UA-118149481-1');
        	`}</script>

          {/* Facebook Pixel Code */}
        	<script async defer>{`
        		!function(f,b,e,v,n,t,s)
        		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        		n.queue=[];t=b.createElement(e);t.async=!0;
        		t.src=v;s=b.getElementsByTagName(e)[0];
        		s.parentNode.insertBefore(t,s)}(window, document,'script',
        		'https://connect.facebook.net/en_US/fbevents.js');
        		fbq('init', '225639351519270');
        		fbq('track', 'PageView');
        	`}</script>
        	{/* End Facebook Pixel Code */}

        </Helmet>

        {/* Google Tag Manager (noscript) */}
      	<noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TRL98WJ"
      	height="0" width="0" style={{display:'none',visibility:'hidden'}} title="googletagmanager"/>
        </noscript>
      	{/* End Google Tag Manager (noscript) */}

        <Header
          hideHeader={headerTitle?headerTitle[0]:null}
          siteTitle={headerTitle?headerTitle[1]:null}
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
  pageTitle: PropTypes.string,
  headerTitle: PropTypes.array
}

export default Layout
