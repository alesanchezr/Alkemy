import { graphql } from "gatsby";

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
`;

export const trunc = data => {
    return data.substring(0, 50) + "...";
};

export const fluidImageSmall = graphql`
    fragment fluidImageSmall on File {
        childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
`;

export const fluidImageXS = graphql`
    fragment fluidImageXS on File {
        childImageSharp {
            fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

export function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}