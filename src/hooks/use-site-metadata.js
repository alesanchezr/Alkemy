import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        company
                        address
                        city
                        state
                        zip
                        phone
                        phoneDial
                    }
                }
            }
        `
    );
    return site.siteMetadata;
};
