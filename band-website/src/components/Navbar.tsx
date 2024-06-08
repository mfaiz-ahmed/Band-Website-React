import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <nav className='bg-black text-white d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
            <li><a className='text-white text-decoration-none' href="#">HOME</a></li>
            <li><a className='text-white text-decoration-none' href="#band">BAND</a></li>
            <li><a className='text-white text-decoration-none' href="#tour">TOUR</a></li>
            <li><a className='text-white text-decoration-none' href="#contact">CONTACT</a></li>
            <div className="dropdown">
  <button className="dropbtn">MORE <FontAwesomeIcon icon={faCaretDown} /></button>
  <div className="dropdown-content">
    <a className='text-dark text-decoration-none' href="#">Merchandise</a>
    <a className='text-dark text-decoration-none' href="#">Extras</a>
    <a className='text-dark text-decoration-none' href="#">Media</a>
  </div>
</div>
        </div>
        <div id='search'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    </nav>
  )
}
