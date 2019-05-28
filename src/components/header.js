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
      {name: 'Responsive Web Design', id: '1a', url: '/responsive-web-design'},
      {name: 'Web Development', id: '1b', url: '/web-development'},
      {name: 'eCommerce Design', id: '1c', url: '/ecommerce-design'},
      {name: 'Digital Marketing', id: '1d', url: '/digital-marketing'},
    ]
  },
  {name: 'Alkemy Blog', title: true, id: '2', drop:false, url: '/alkemy-blog'},
  {name: 'About Alkemy', title: true, id: '3', drop:false, url: '/about-alkemy'},
  {name: 'Contact Alkemy', title: true, id: '4', drop:false, url: '/contact-alkemy'},
];

const windowGlobal = typeof window !== 'undefined' && window.location.pathname

const Header = ({ siteTitle, hideHeader, renderHeaderSolid }) =>(
    <header
      className={
        (renderHeaderSolid)
          ?("header solid fadeInDown")
          :("header fadeInDown")
      }
    >
      <ReactNavbar menuArray={_menuArray} />
      {
        (hideHeader===true)
        ?(
          <div className='subHeader'>
            <h1 style={{ margin: 0 }}>
              <Link
                tag="h1"
                to={windowGlobal}
                className="m-0 text-white text-unstyled"
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
        )
        :''
      }
    </header>
  )
export default Header
