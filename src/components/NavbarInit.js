import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import './NavbarInit.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return (
          window.removeEventListener('resize', showButton)
        );
      }, []);

    window.addEventListener('resize',showButton);

    return (
        <>
          <IconContext.Provider value={{ color: '#fff'}}>
            <nav className='navbar_init'>
              <div className="navbar-container Container">
                <Link to='/' className="brand_img" onClick={closeMobileMenu}>
                  <img src={require('../images/logo.jpeg')}
                    alt='logo'/>
                </Link>           
                
                <div className='nav-h1'>Encuentra tu garage de preferencia con nosotros.</div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu_init'}>
                  <li className="nav-btn">
                    {button ? (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'>
                          SIGN UP
                        </Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                          SIGN UP
                        </Button>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </nav>
          </IconContext.Provider>
        </>
    );
}

export default Navbar;