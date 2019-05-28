/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

import msTileImg from '../assets/images/favicons/ms-icon-144x144.png'

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

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: 'charset', content: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'keywords', content: 'Software Development, Web Design, eCommerce Design, Digital Marketing, React, PHP, HTML, Python, Django, Gatsby, GraphQL, Wordpress Design, 3dcart, Shopify, WooCommerce, SEM, Search Engine Marketing, SEO, Search Engine Optimization, Social Media Marketing, Web Strategy' },
        { name: 'referrer', content: 'origin-when-crossorigin' },
        { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
        { name: 'apple-mobile-web-app-title', content: 'Alkemy, Inc.' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { property: 'og:image', content: '' },
        { name: 'msvalidate.01', content: '304B53089DF131D38A8031F5232E9FB1' },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        { name: 'twitter:image:alt', content: 'Screenshot of the Alkemy, Inc. Homepage.' },
      ].concat(meta)}
    >
      <html lang='en' amp xmlns="http://www.w3.org/1999/xhtml"/>
      <link rel="canonical" href="https://www.alkemyinc.com" />
      <meta name="msapplication-TileImage" content={msTileImg} />

      {/* App Icons and Favicon */}
      <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57} />
      <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60} />
      <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72} />
      <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76} />
      <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114} />
      <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120} />
      <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144} />
      <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180} />
      <link rel="icon" type="image/png" sizes="192x192"  href={androidIcon192} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />

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
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO