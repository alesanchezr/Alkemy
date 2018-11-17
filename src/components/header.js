import React from 'react'
import { Link } from 'gatsby'
import ReactNavbar from './Navbar.jsx'


/*
_menuArray object details:
  name:  the title of the menu item (link text)
  id: id used for unique key. top level is numbered, submenu adds letters.
  drop: true/false, specifies if it is a dropdown menu
  url: the url for Link
  submenu: a nested array for dropdown menu items
*/

var _menuArray = [
  {
    name: 'Solutions',
    id: '1',
    drop: true,
    title: true,
    submenu: [
      {name: 'Web Design', id: '1a', url: '/web-design'},
      {name: 'Web Development', id: '1b', url: '/web-development'},
      {name: 'E-Commerce Design', id: '1c', url: '/ecommerce-design'},
      {name: 'Digital Marketing', id: '1d', url: '/digital-marketing'},
    ]
  },
  {name: 'Alkemy Blog', title: true, id: '2', drop:false, url: '/alkemy-blog'},
  {name: 'About Alkemy', title: true, id: '3', drop:false, url: '/about-alkemy'},
  {name: 'Contact Alkemy', title: true, id: '4', drop:false, url: '/contact-alkemy'},
];

const Header = ({ siteTitle, hideHeader }) =>(
    <div>
      <div
        style={{
          background: 'rgba(8,11,13,.70)',
          color: 'white',
          height: '130px',
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
        (hideHeader===true)
        ?(
          <div
            id='subHeader'
            style={{
              marginTop: '100px',
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
