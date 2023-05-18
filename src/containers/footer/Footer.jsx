import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
    return ( 
    <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
            <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur nulla tempora corrupti minus, eos.</h1>
        </div>

        <div className="gpt3__footer-btn">
            <p>Request Early Access</p>
        </div>

        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={gpt3Logo} alt="logo" />
                <p>Lorem, ipsum dolor sit amet consectetur </p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Social Media</h4>
                <p><a href='https://www.linkedin.com/in/kachi-c-08315b188/'>LinkedIn</a></p>
                <p><a href='https://www.instagram.com/its_kachi_celestine/'>Instagram</a></p>
                <p> <a href='https://web.facebook.com/celestine.onyedikachi.5'>Facebook</a></p>
                <p><a href='https://twitter.com/CelestineKachi'>Twitter</a></p>
                <p> <a href='https://wa.me/+2349049190032'>Whatsapp</a></p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>SKILLS</h4>
                <p>Blockchain Development</p>
                <p>FullStack WebDevelopment</p>
                <p>Content Creation</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                <p>Experience excellence.</p>
                <p>09049190032</p>
                <p>Onlinehassle1234@gmail.com</p>
            </div>
        </div>

        <div className="gpt3__footer-copyright">
            <p> 2023 GPT-3. All rights reserved.</p>
        </div>

    </div>
     );
}
 
export default Footer;
