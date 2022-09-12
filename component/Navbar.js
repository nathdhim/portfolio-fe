import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <div className="nav-container">
            <h2 className='logo'>DP<span>©</span> </h2>
            <div className="nav-item-container">
                <Link href='/#'><a className='nav-item'>Home</a></Link>
                <Link href='/work'><a className='nav-item'>Works</a></Link>
                <Link href='/waiting'><a className='nav-item'>Learn</a></Link>
                <Link href='/contact'><a className='nav-item'>Contact</a></Link>
            </div>
        </div>
    </nav>
  )
}
