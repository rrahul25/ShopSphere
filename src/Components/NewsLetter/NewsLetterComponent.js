import React from 'react'
import './NewsLetterStyles.css'

const NewsLetter=()=>{
    return(
        <div className='newsLetter'>
            <h1>Get Exclusive offers on your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email ID" />
               <button>Subscribe</button>          
            </div>
        </div>
    )
}

export default NewsLetter;