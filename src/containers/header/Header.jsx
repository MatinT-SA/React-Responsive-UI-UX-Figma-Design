import React from 'react';
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Let's Build Something Fantastic with GPT3 OpenAI</h1>
                <p>GPT-3 has been used to create articles, poetry, stories, news reports and dialogue using just a small amount of input text that can be used to produce large amounts of quality copy. GPT-3 is trained to generate realistic human text.</p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Please Enter Your Email Address' />
                    <button type='button'>Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className='gpt3__header-image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    );
};

export default Header;
