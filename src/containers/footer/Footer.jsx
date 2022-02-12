import React from 'react';
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>
                    Do you want to step in to the future before others
                </h1>
            </div>

            <div className='gpt3__footer-btn'>
                <p>Reqeust Early Access</p>
            </div>

            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src={gpt3Logo} alt="logo" />
                    <p>Alborz T18 468 AL - - Karaj, <br /> All Rights Reserved</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>News/Blog</p>
                    <p>Social Media</p>
                    <p>About Me</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Alborz T18 468 AL - - Karaj</p>
                    <p>098-9334363774</p>
                    <p>matin.taherzadeh.mmtsa@gmail.com</p>
                </div>
            </div>

            <div className='gpt3__footer-copyright'>
                <p>@2022 GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
