import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex-parent'>
                <div className='hire-text'>
                    Hire<span className='spot-text'>Spot</span>
                </div>

                <nav>
                    <Link to="/home">Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/appliedjobs'>Applied Jobs</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/login'>Log In</Link>
                </nav>

                <div className='apply-button'>
                    <Link to='/error'>Start Applying</Link>
                </div>
        </div>
    );
};

export default Header;