import React from 'react';

import styles from './Banner.module.css'
import banner from '../images/banner.jpg'

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner" />
            <div className={styles.textContainer}>
               <h1>M.Taheri</h1>
               <p>
                   I'm Working with <span>React.js</span>
               </p>
            </div>
        </div>
    );
};

export default Banner;