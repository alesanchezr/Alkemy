import React from "react";
import PropTypes from "prop-types";
import { graphql } from 'gatsby';
import Link from "gatsby-link";
import Layout from "../components/layout.js"

const Tags = ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;

  const tagIndex = ()=>{
    return edges.map(tag=>{
      const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
      } tagged with "${tag}"`;
      return(
        <div>
          <h1>{tagHeader}</h1>
          <ul>
            {edges.map(({ node }) => {
              const { title } = node.frontmatter;
              const { slug } = node.fields;
              return (
                <li key={slug}>
                  <Link to={slug}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        )
    })
  }

  return (
    <Layout>
      {tagIndex}
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query TagIndex($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
