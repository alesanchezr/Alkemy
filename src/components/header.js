import React from 'react'
import { Link } from 'gatsby'
import ReactNavbar from './Navbar.jsx'

const Header = ({ siteTitle, hideHeader }) =>(
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
        <ReactNavbar />
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
