import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../constants/routes';
import './header.scss';

function Header() {
    return (
        <nav>
            <div className="container">
                <h1>
                    <Link to={Routes.HOME_PAGE()}>A Movie Plex</Link>
                </h1>
                <ul>
                    <li>
                        <Link to={Routes.HOME_PAGE()}>Home</Link>
                    </li>
                    <li>
                        <Link to={Routes.WHATS_ON_PAGE()}>What&rsquo;s On</Link>
                    </li>
                    <li>
                        <Link to={Routes.ABOUT_PAGE()}>About</Link>
                    </li>
                    <li>
                        <Link to={Routes.CONTACT_PAGE()}>Contact</Link>
                    </li>
                    <li>
                        <Link to={Routes.LOGIN_PAGE()}>Sign In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
