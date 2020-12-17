import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/headerLogo.svg';

import './header.styles.scss';

const Header = () => (
    <div className = 'header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to ='/shop'>
                New Collections
            </Link>
            <Link className='option' to ='/contact'>
                Contact
            </Link>
            <Link className='option' to ='/signin'>
                My Account
            </Link>
        </div>
    </div>
)

export default Header; 