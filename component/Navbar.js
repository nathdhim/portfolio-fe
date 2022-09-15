import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <div className="nav-container">
            <div className="logo-container">
            <h2 className='logo'>DP<span>©</span> </h2>
            </div>
            <div className="nav-item-container">
                <Link href='/#'><a className='nav-item'>Works</a></Link>
                <Link href='/waiting'><a className='nav-item'>Resources</a></Link>
                <Link href='/about'><a className='nav-item'>About</a></Link>
            </div>
            <div className="contact-container">
            <Link href='/contact'><a className='nav-item'>Contact</a></Link>
            </div>
        </div>
    </nav>
  )
}
