import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'reactstrap'

// Social Links Widget, Modify the following array to suit
// your structure for social media.

// Image references should be the src ref for FontAwesomeIcon.
// Don't forget to import the icon to the library on layout.js

// Adjust Bootstrap Columns as needed based on the number of social icons

const _linkArray= [
  {id:1,platform: 'facebook', url: '//www.facebook.com/alkemydev/', icon: 'facebook', color:'white'},
  {id:2,platform: 'twitter', url: '//twitter.com/alkemyDev', icon: 'twitter', color: 'white'},
  {id:3,platform: 'linkedin', url: '//www.linkedin.com/company/alkemydev', icon: 'linkedin', color:'white'},
]

const SocialLinks = (props) => {
  return (
    <div className={"mr-5 socialLinks "+props.className}>
      <Row>
        {renderSocialLinks(_linkArray)}
      </Row>
    </div>
  )
}

const renderSocialLinks = (menu) => {
  return menu.map((item,index)=>{
    return(
      <Col xs={4} key={item.id}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab',item.icon]} color={item.color} size="lg" className={"align-middle social-"+item.platform+" ml-0"}/>
        </a>
      </Col>
    )
  })
}

export default SocialLinks
