import React from 'react';
import './blog.css'
import { Article } from '../../component'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>
                    Cool things are happening, <br /> We're tying to cover them all.
                </h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupA'>
                    <Article imgUrl={blog01} date="Sep 02, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className='gpt3__blog-container_groupB'>
                    <Article imgUrl={blog02} date="Nov 23, 2021" title="an AI research laboratory in San Francisco. Wanna learn more about it?" />
                    <Article imgUrl={blog03} date="Dec 16, 2020" title="GPT-3 is the largest and arguably the most powerful language model. Learn more?" />
                    <Article imgUrl={blog04} date="Oct 10, 2022" title="GPT-3 is so large that it is difficult to interpret. Wanna check this out?" />
                    <Article imgUrl={blog05} date="Apr 30, 2021" title="OpenAI also has a special program for academic researchers who want to use GPT-3. Wanna take a look at it?" />
                </div>
            </div>
        </div>
    );
};

export default Blog;
