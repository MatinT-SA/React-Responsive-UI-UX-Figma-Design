import React from 'react';
import './features.css'
import Feature from '../../component/feature/Feature'

const featuresData = [
    {
        title: 'conversational tasks, responding to any text',
        text: 'Using only a few snippets of example code text, GPT-3 can create workable code that can be run without error, as programming code is just a form of text.',
    },
    {
        title: 'benefits of GPT-3, potential customers',
        text: 'GPT-3 is also being used in the gaming world to create realistic chat dialog, quizzes, images and other graphics based on text suggestions.',
    },
    {
        title: 'risks and limitations of GPT-3',
        text: 'While GPT-3 is remarkably large and powerful, it has several limitations and risks associated with its usage.',
    },
    {
        title: 'Future & History of GPT-3',
        text: 'OpenAI released access to the model incrementally to see how it would be used and to avoid potential problems....',
    },
];

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>It has become appallingly obvious that our technology has exceeded our humanity. The Future is inside your hands.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    );
};

export default Features;
