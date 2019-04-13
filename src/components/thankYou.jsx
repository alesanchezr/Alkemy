import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ThankYou = () => {
  return(
    <section className="thankYou py-5 px-3">
      <h1 className="text-center text-success mb-5">
      <FontAwesomeIcon
        icon={['far','check-circle']}
        size="2x"
        color="success"
        />
      Success!
      </h1>

      <div className="container">
        <p>Thank You for Choosing Alkemy! We have successfully received your contact form submission.
        As soon as one of our team members has reviewed your request, we will contact you to discuss the next steps.</p>
        <p>If for any reason you don't hear back from our team in 2 business days, please feel free to give us a call at <a href='tel:8774255369'>877-4ALKEMY</a> (425-5369).</p>
      </div>
    </section>
  )
}


export default ThankYou;
