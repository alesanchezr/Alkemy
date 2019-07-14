import { graphql } from "gatsby";

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`;

export const fluidImageSmall = graphql`
    fragment fluidImageSmall on File {
        childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`;

export const fluidImageXS = graphql`
    fragment fluidImageXS on File {
        childImageSharp {
            fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`;

export function addJS(position = `head`, jsCode, source) {
    if (typeof window !== `undefined`) {
        let el = document.getElementsByTagName(position);
        let s = document.createElement(`script`);
        s.src = source;
        s.type = `text/javascript`;
        if (jsCode) s.innerText = jsCode;
        el[0].appendChild(s);
    }
}
