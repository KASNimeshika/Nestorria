import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ setMenuOpened, containerStyles }) => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Listing', path: '/listing' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' }
  ];


  return (
    <nav className={containerStyles}>
      {navLinks.map((link) => (
        <NavLink 
          onClick={() => {
            setMenuOpened(false)
            window.scrollTo(0, 0)
          }}
          key={link.title} 
          to={link.path} 
          className={({ isActive }) => 
            `${isActive ? "active-link" : ""} px-3 py-2 rounded-full uppercase text-sm font-bold`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
