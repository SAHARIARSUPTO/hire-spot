import React from 'react';
import './Blog.css';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div>
        <div className='qna-headings'>
            <h1 className='headings'>Let's have Some QnA</h1>
            <p className='question'>When should we use context API?</p>
            <p className='answers'>The Context API in React should be used when we need to share data or state between multiple components that are not directly connected in the component tree. It can help we avoid prop drilling, which is the process of passing down props through multiple layers of components to get to a child component that needs the data.</p>
            <p className='question'>What is a custom hook?</p>
            <p className='answers'>In React, a custom hook is a JavaScript function that uses the built-in useEffect, useState, and other hooks to encapsulate reusable logic that can be shared across components. Custom hooks allow you to abstract complex logic into reusable functions, which can simplify your code and reduce duplication.</p>
            <p className='question'>What is useRef?</p>
            <p className='answers'>useRef is a built-in hook in React that allows you to create a mutable reference that persists across component re-renders</p>
            <p className='question'>What is useMemo?</p>
            <p className='answers'>useMemo is a built-in hook in React that allows you to memoize the result of a function so that it is only recomputed when its dependencies change. It is used to optimize performance by avoiding unnecessary computations and rendering.</p></div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blog;