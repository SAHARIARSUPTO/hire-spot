import React from 'react';
import './Footer.css';
import myImage from './Group 9969.png';
const Footer = () => {
    return (
        <div className='bap-dada'>
            <div className='parent-marent'>
                <div>
                    <p className='hire-text-x'>
                    Hire<span className='spot-text'>Spot</span></p>
                    <p className='chlild'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo id distinctio nulla pariatur adipisci ipsum tenetur eius eaque officiis ipsa.</p>  
                    <img src={myImage}></img>                 
                </div>
                <div>
                    <p className='heading'>Comany</p>
                    <p className='chlild'>About Us</p>
                    <p className='chlild'>Latest News</p>
                    <p className='chlild'>Careers</p>
                </div>
                <div>
                    <p className='heading'>Product</p>
                    <p className='chlild'>Prototypes</p>
                    <p className='chlild'>Plans and Pricing</p>
                    <p className='chlild'>Customers</p>
                    <p className='chlild'>Integrations</p>
                </div>
                <div>
                    <p className='heading'>Support</p>
                    <p className='chlild'>Help Desk</p>
                    <p className='chlild'>Sales</p>
                    <p className='chlild'>Become a Partner</p>
                    <p className='chlild'>Developersr</p>
                </div>
                <div>
                    <p className='heading'>Contact</p>
                    <p className='chlild'>Rohanpur,Gomastapur-6320,Chapainawabganj,Rajshahi Division,Bangladesh</p>
                    <p className='chlild'>+8801744218960</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;