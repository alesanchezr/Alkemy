<img src="https://www.alkemy.dev/assets/alkemy_logo_vertical.png" width="250" alt="Alkemy, Inc. Logo" title="Alkemy, Inc. Logo">

<h3>Alkemy, Inc.</h3>
https://www.alkemyinc.com
Coral Springs, FL 33067<br><br>

[![Netlify Status](https://api.netlify.com/api/v1/badges/85cc0fc2-4ee3-4404-bc9a-498a8e1fecf8/deploy-status)](https://app.netlify.com/sites/alkemy/deploys)
<br>
# Main Website Codebase

This readme breaks down the project specs in detail.

## **Technologies used:**

**Application**
 - HTML5/CSS3/SASS/Javascript
 - ReactJS
 - GatsbyJS/GraphQL
 - TypographyJS
 - Bootstrap4/ReactStrap
 - NPM, webpack

**Data Layer**
- JSON files with gatsby-transformer-json
- Markdown files with gatsby-transformer-markdown


# Conceptualization

The goal was to make sure that our site was as fast as possible while maintaining the robustness of a ReactJS application and the dependency management of NPM.

To that end, we opted to use GatsbyJS to simplify the process.

# Methodology

We implemented a couple of key factors with generating the site, such as:

- React based application on the front end with GatsbyJS rendering as static assets
- Page content is pulled in via GraphQL from JSON files. We used gatsby-transformer-json to convert the JSON files to queryable nodes.
- Similarly, Blog Post content is handled by Markdown Files that are converted by gatsby-transformer-markdown. This is done automatically in our gatsby-node.js file.

# Custom Features

- VideoCarousel: a custom designed component to handle our background video carousel for the homepage. We have plans to update this in the future and add additional functionality and props that can be passed.
- ScrollWrapper: a stateful wrapper that allows you to track scroll events. For the purpose of the site, we created it to circumvent how Gatsby deals with pages. Simply wrap your entire page in the ScrollWrapper and pass a prop of onWindowScroll with your scroll handler function. (Ex. onWindowScroll={handleScroll}) Your function can decide how you respond to scroll events.