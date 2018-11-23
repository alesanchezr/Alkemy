import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import Header from './header'

import '../assets/css/layout.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.scss'
import '../assets/css/animate.css'

import favicon from '../assets/images/favicon.ico'
import favicon16 from '../assets/images/favicon-16x16.png'
import favicon32 from '../assets/images/favicon-32x32.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt,faCalendarPlus } from '@fortawesome/free-regular-svg-icons'

library.add(
  fab,
  faChevronDown,
  faCalendarAlt,
  faCalendarPlus
)

const Layout = ({ children, pageTitle, headerTitle, headerType }) => (
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
        id="___gatsby"
      >
        <Helmet
          bodyAttributes={(headerType==="blog")?{class: 'blog'}:{class: 'page'}}
          title={pageTitle}
          meta={[
            { name: 'charset', content: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
            { name: 'description', content: 'Alkemy, Inc. | Best Quality Software Development, Web Design, eCommerce Design, and Marketing.' },
            { name: 'keywords', content: 'Software Development, Web Design, eCommerce, Marketing, React, PHP, HTML, Python, Django, Gatsby, GraphQL, Wordpress, 3dcart, Shopify, WooCommerce, SEM, SEO, Social Media Marketing, Web Strategy' },
            { name: 'referrer', content: 'origin-when-crossorigin' },
            { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
            { property: 'og:type', content: 'page' },
            { name: 'apple-mobile-web-app-title', content: 'Alkemy, Inc.' },
            { name: 'application-name', content: 'Alkemy, Inc.' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-config', content: 'wp-content/themes/alkemy/assets/images/favicon.ico/browserconfig.xml' },
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
          <link rel="apple-touch-icon" sizes="180x180" href="<?php echo THEME_DIR; ?>/assets/images/apple-touch-icon.png" />
        	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        	<link rel="manifest" href="<?php echo THEME_DIR; ?>/assets/images/site.webmanifest" />
        	<link rel="mask-icon" href="<?php echo THEME_DIR; ?>/assets/images/safari-pinned-tab.svg" color="#44baff" />
        	<link rel="shortcut icon" href={favicon} />

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

        <Header hideHeader={headerTitle[0]} siteTitle={headerTitle[1]} />

        <div
          style={{
            margin: '0 auto',
            maxWidth: 1920,
            paddingTop: 0,
          }}
        >
          {children}
        </div>



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
