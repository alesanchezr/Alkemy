![Alkemy, Inc.](https://www.alkemyinc.com/assets/alkemy_logo_vertical.png)<br>
**Alkemy, Inc.**<br>
https://www.alkemyinc.com<br>
Coral Springs, FL 33067

# Main Website Codebase

This readme breaks down the project specs in detail.

## **Technologies used:**

**Application**
 - HTML5/CSS3/SASS/Javascript
 - ReactJS
 - GatsbyJS/GraphQL
 - TypographyJS
 - Bootstrap4/ReactStrap
 - NPM

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

# Directory Structure

```bash
src
├── assets
│   ├── css (sass/css stylesheets)
│   ├── images
│   └── video
├── components
│   ├── Navbar.jsx (navbar component)
│   ├── header.js (renders navbar and subheader)
│   ├── image.js
│   ├── layout.js (main layout, SEO in helmet)
│   ├── scrollWrapper.jsx (Scroll tracking)
│   └── videoCarousel.jsx (background video carousel)
├── content
│   ├── pages
│   │   └── homepage.json (page data for homepage)
│   └── posts
│       └── my-first-blog-post.md (sample blog post)
├── pages
│   ├── 404.js (custom 404)
│   ├── index.js (homepage)
│   └── page-2.js (sample page 2 - will be removed)
├── templates
│   ├── blog-post.js (blog post template)
│   └── tags.js (tag template to generate tags)
└── utils
    └── typography.js (control for typographical styles)
```
