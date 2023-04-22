import React from 'react';
import './Error.css';
import Footer from '../Footer/Footer';

const Error = () => {
    return (
        <div>
        <div className='error-text'>
            <p>404 Not Found</p>
            <img src='https://media.tenor.com/D-SlWEu_sDkAAAAM/dogs-doge.gif'></img>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Error;