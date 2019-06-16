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


export function addJS(position=`head`, jsCode, source) {
  // eslint-disable-next-line no-undef
  let el = document.getElementsByTagName(position)
  // eslint-disable-next-line no-undef
  let s = document.createElement(`script`)
  s.src = source
  s.type = `text/javascript`
  if (jsCode) s.innerText = jsCode
  el[0].appendChild(s)
}