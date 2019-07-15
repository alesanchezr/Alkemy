/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "../utils/typography";

import logo from "../assets/images/alkemy-logo-vertical.png";
import screenshot from "../assets/images/alkemy-website-screenshot.png";
import msTileImg from "../assets/images/favicons/ms-icon-144x144.png";

import appleIcon57 from "../assets/images/favicons/apple-icon-57x57.png";
import appleIcon60 from "../assets/images/favicons/apple-icon-60x60.png";
import appleIcon72 from "../assets/images/favicons/apple-icon-72x72.png";
import appleIcon76 from "../assets/images/favicons/apple-icon-76x76.png";
import appleIcon114 from "../assets/images/favicons/apple-icon-114x114.png";
import appleIcon120 from "../assets/images/favicons/apple-icon-120x120.png";
import appleIcon144 from "../assets/images/favicons/apple-icon-144x144.png";
import appleIcon152 from "../assets/images/favicons/apple-icon-152x152.png";
import appleIcon180 from "../assets/images/favicons/apple-icon-180x180.png";

import androidIcon192 from "../assets/images/favicons/android-icon-192x192.png";

import favicon16 from "../assets/images/favicons/favicon-16x16.png";
import favicon32 from "../assets/images/favicons/favicon-32x32.png";
import favicon96 from "../assets/images/favicons/favicon-96x96.png";

function SEO({
    description,
    lang,
    meta,
    author,
    title,
    keywords,
    children,
    date,
}) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteUrl
                        title
                        description
                        author
                        keywords
                    }
                }
            }
        `
    );

    const metaDescription = description?description:site.siteMetadata.description;
    const pageAuthor = author?author:site.siteMetadata.author;
    const pageKeywords = keywords?keywords:site.siteMetadata.keywords;
    const articleDate = date?date:null;
    const siteAddress = site.siteMetadata.siteUrl;

    return (
        <Helmet
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                { name: "charset", content: "UTF-8" },
                {
                    name: "viewport",
                    content:
                        "width=device-width, initial-scale=1, maximum-scale=1",
                },
                { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" },
            ].concat(meta)}
        >
            <html
                lang={lang ? lang : "en"}
                amp
                xmlns="http://www.w3.org/1999/xhtml"
            />
            <meta
                name="msvalidate.01"
                content="304B53089DF131D38A8031F5232E9FB1"
            />

            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="author" content={pageAuthor} />

            <meta name="apple-mobile-web-app-title" content="Alkemy, Inc." />

            <meta property="og:image" content={screenshot} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={pageAuthor} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta
                name="twitter:image:alt"
                content="Screenshot of the Alkemy, Inc. Website."
            />

            <link rel="canonical" href="https://www.alkemyinc.com" />
            <meta name="msapplication-TileImage" content={msTileImg} />
            <meta name="msapplication-TileColor" content="#ffffff" />

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
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href={androidIcon192}
            />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />

            <TypographyStyle typography={typography} />
            <GoogleFont typography={typography} />

            <link rel="prefetch" href="https://www.gstatic.com"></link>
            <link rel="prefetch" href="https://www.google.com"></link>

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
            <script
                async
                defer
                src="https://www.googletagmanager.com/gtag/js?id=UA-118149481-1"
            />
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

            <script async defer type="application/ld+json">
                {`{
            "@context":"https://schema.org",
            "@type":"WebSite",
            "url":"${siteAddress}",
            "name":"Alkemy, Inc.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${siteAddress}/alkemy-blog"
            }
          }`}
            </script>
            <script async defer type="application/ld+json">
                {`{
            "@context":"https://schema.org",
            "@type":"Organization",
            "url":"${siteAddress}",
            "name":"Alkemy, Inc.",
            "logo": "${siteAddress}${logo}",
            "sameAs":[
              "https://www.facebook.com/alkemydev",
              "https://www.twitter.com/alkemydev",
              "https://www.linkedin.com/company/alkemydev"
            ]
          }`}
            </script>
            <script async defer type="application/ld+json">{`
          {
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Home",
              "item": "${siteAddress}"  
            },{
              "@type": "ListItem", 
              "position": 2, 
              "name": "Responsive Web Design",
              "item": "${siteAddress}/responsive-web-design"  
            },{
              "@type": "ListItem", 
              "position": 3, 
              "name": "Web Development",
              "item": "${siteAddress}/web-development"  
            },{
              "@type": "ListItem", 
              "position": 4, 
              "name": "eCommerce Design",
              "item": "${siteAddress}/ecommerce-design"  
            },{
              "@type": "ListItem", 
              "position": 5, 
              "name": "Digital Marketing",
              "item": "${siteAddress}/digital-marketing"  
            },{
              "@type": "ListItem", 
              "position": 6, 
              "name": "About Alkemy",
              "item": "${siteAddress}/about-alkemy"  
            },{
              "@type": "ListItem", 
              "position": 7, 
              "name": "Alkemy Blog",
              "item": "${siteAddress}/alkemy-blog"  
            },{
              "@type": "ListItem", 
              "position": 8, 
              "name": "Contact Alkemy",
              "item": "${siteAddress}/contact-alkemy"  
            }]
          }
          `}</script>
            {author !== null ? (
                <script async defer type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${title}",
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "datePublished": "${articleDate}"
            }
            `}</script>
            ) : null}
            {children}
        </Helmet>
    );
}

SEO.defaultProps = {
    meta: [],
    keywords: `Software Development, Web Design, eCommerce Design, Digital Marketing, React, PHP, HTML, Python, Django, Gatsby, GraphQL, Wordpress Design, 3dcart, Shopify, WooCommerce, SEM, Search Engine Marketing, SEO, Search Engine Optimization, Social Media Marketing, Web Strategy`,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    children: PropTypes.object,
};

export default SEO;
