import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ThankYou = () => {
  return(
    <section className="thankYou py-5 px-3">
      <h1 className="text-center">Thank You for Choosing Alkemy!</h1>
      <FontAwesomeIcon
        icon="check-circle"
        size="3x"
        color="success"
        className="heroChevron"
        />
      <div className="container">
        <p>We have successfully received your contact form submission.</p>
        <p>As soon as one of our team members has had a chance to review the request, we will contact you to discuss the details of your project as well as next steps.</p>
        <p>If for any reason you don't hear back from our team in 2 business days, please feel free to give us a call at 877-4ALKEMY (425-5369).</p>
      </div>
    </section>
  )
}


export default ThankYou;
