import React from 'react';
import './possibility.css'

import possibilityImage from '../../assets/possibility.png';
const Possibility = () => {
    return ( 
    <div className="gpt3__possibility section__padding" id="posibility">
        <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
            <h4>Request Early Access to Get Started</h4>
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui ratione explicabo rerum at provident unde nihil tenetur fugit molestias, quis quae illum ipsam, cumque perspiciatis voluptatem dolor quas velit.</p>
            <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
     );
}
 
export default Possibility;
