/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 export const onServiceWorkerUpdateReady = () => {
   const answer = window.confirm(
     `The Alkemy website has been updated. ` +
       `Would you like to reload and display the latest version?`
   )

   if (answer === true) {
     window.location.reload()
   }
 }
