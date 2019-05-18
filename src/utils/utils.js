import { graphql } from 'gatsby'

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1200) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
`;

export const fluidImageSmall = graphql`
fragment fluidImageSmall on File {
  childImageSharp {
    fluid(maxWidth: 600) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
`;

export const fluidImageXS = graphql`
fragment fluidImageXS on File {
  childImageSharp {
    fluid(maxWidth: 400) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
`;
