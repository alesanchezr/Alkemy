import React from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function Template({
  data
}) {
  const { markdownRemark: post } = data;
  return (
    <Layout
      pageTitle={`Alkemy,Inc. Blog | ${post.frontmatter.title}`}
      headerTitle={[false,""]}
      headerType='blog'
      >
      <section className="blog-post-container">
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </section>
  </Layout>
  );
}
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`;
