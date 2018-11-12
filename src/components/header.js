import React from 'react'
import { Link } from 'gatsby'
import ReactNavbar from './Navbar.jsx'

var _menuArray = [
  {name: 'Home', id: '1', drop:false, url: '/'},
  {
    name: 'Solutions',
    id: '2',
    drop: true,
    submenu: [
      {name: 'Web Design', id: '2a', url: '/web-design'},
      {name: 'Web Development', id: '2b', url: '/web-development'},
      {name: 'E-Commerce Design', id: '2c', url: '/ecommerce-design'},
      {name: 'Digital Marketing', id: '2d', url: '/digital-marketing'},
    ]
  },
  {name: 'Alkemy Blog', id: '3', drop:false, url: '/alkemy-blog'},
  {name: 'About Alkemy', id: '4', drop:false, url: '/about-alkemy'},
  {name: 'Contact Alkemy', id: '5', drop:false, url: '/contact-alkemy'},
];

const Header = ({ siteTitle, hideHeader, menuArray }) =>(
    <div>
      <div
        style={{
          background: 'rgba(8,11,13,.85)',
          color: 'white',
          marginBottom: '1.45rem',
          height: '12vh',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '1000',
          position: 'fixed'
        }}
      >
      <ReactNavbar menuArray={_menuArray} />
      </div>
      {
        (!hideHeader)
        ?(
          <div
            id='subHeader'
            style={{
              marginTop: '12vh',
              width: '100%',
              padding: '1.45rem 1.0875rem',
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
        )
        :''
      }
    </div>
  )


export default Header
