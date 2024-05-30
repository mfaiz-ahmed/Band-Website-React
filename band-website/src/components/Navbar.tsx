import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <nav className='bg-black text-white d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
            <li>HOME</li>
            <li>BAND</li>
            <li>TOUR</li>
            <li>CONTACT</li>
            <div className="dropdown">
  <button className="dropbtn">MORE <FontAwesomeIcon icon={faCaretDown} /></button>
  <div className="dropdown-content">
  </div>
</div>
        </div>
        <div id='search'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    </nav>
  )
}
