import React from 'react'
import { Link } from 'gatsby'
import { Col, Row } from 'reactstrap'
/*
_menuArray object details:
  name:  the title of the menu item (link text)
  id: id used for unique key. top level is numbered, submenu adds letters.
  drop: true/false, specifies if it is a dropdown menu
  url: the url for Link
  submenu: a nested array for dropdown menu items
*/

const _menuArray = [
  {
    name: 'Our Solutions',
    id: '1',
    links: [
      {name: 'Web Design', id: '1a', url: '/web-design'},
      {name: 'Web Development', id: '1b', url: '/web-development'},
      {name: 'E-Commerce Design', id: '1c', url: '/ecommerce-design'},
      {name: 'Digital Marketing', id: '1d', url: '/digital-marketing'},
    ]
  },
  {
    name: 'Alkemy Blog',
    id: '2',
    links: [
      {name: 'Read the Latest', id: '2a', url: '/alkemy-blog'},
      {name: 'View the Archives', id: '2b', url: '/alkemy-blog/archives'},
    ]
  },
  {
    name: 'About Us',
    id: '3',
    links: [
      {name: 'About Alkemy, Inc.', id: '3a', url: '/about-alkemy'},
    ]
  },
  {
    name: 'Contact',
    id: '4',
    links: [
      {name: 'Contact Alkemy', id: '4a', url: '/contact-alkemy'},
    ],
    phone: [
      {name: 'By Phone:', id: '4b', textNumber:'877-4ALKEMY', number:'425-5369', url:'tel:8774255369'}
    ]
  }
]

const _subLinks = [
  {name: 'Privacy Policy', id: '1', url: '/privacy-policy'},
  {name: 'Terms & Conditions', id: '2', url: '/terms-and-conditions'},
  {name: 'Site Map', id: '3', url: '/site-map'}
]

const Footer = (props) => (
    <footer className="footer wow fadeInUp py-5">
      <div className="container">
        <Row>
          {renderLinkAreas(_menuArray)}
        </Row>
        <Row>
          <div className="copyText text-center position-absolute my-0">
            Copyright &copy; 2018, Alkemy, Inc.&nbsp;&mdash;&nbsp;
            {renderSubLinks(_subLinks)}
          </div>
        </Row>
      </div>
    </footer>
  )

const renderLinkAreas = (menu) => {
  return menu.map(item=>{
    return(
      <Col xs={12} md={6} lg={3} key={item.id}>
        <h4>{item.name}</h4>
        <ul className="list-unstyled ml-0">
          {(item.links.map(link=>{return(<li key={link.id}><Link to={link.url}>{link.name}</Link></li>)}))}
          {(item.phone)
            &&(item.phone.map(phone=>{
              return(
                <li key={phone.id}>{phone.name}: <br/><Link to={phone.url}><strong>{phone.textNumber}</strong></Link><p>&emsp;&emsp;({phone.number})</p></li>
              )
            })
          )}
        </ul>
      </Col>
    )
  })
}

const renderSubLinks = (menu) => {
  return menu.map((item,index)=>{
    if(index!=menu.length-1){
      return(
        <span key={item.id}><Link to={item.url}>{item.name}&nbsp;|&nbsp;</Link></span>
      )
    }else{
      return(
        <span key={item.id}><Link to={item.url}>{item.name}</Link></span>
      )
    }
  })
}

export default Footer
