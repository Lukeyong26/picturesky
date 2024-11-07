import React from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleDoubleUp, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='navigation'>
        <div className="nav__title">Picturesky</div>
        <div className="nav__menu">
          <Link to="/">
            <button className="nav__button">
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </button>
          </Link>

          <Link to="/upload">
            <button className="nav__button">
              <FontAwesomeIcon icon={faAngleDoubleUp} />
              <span>Upload</span>
            </button>
          </Link>
            
            <button className="nav__button">
            <FontAwesomeIcon icon={faBars} />
            <span>More</span>
          </button>
        </div>
    </div>
  )
}

export default Navigation