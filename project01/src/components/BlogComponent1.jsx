import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import './BlogComponent1.css'

export default function BlogComponent1() {
  return (
    <div>
        <div class="text-center">
            <button type="submit" className='submit1'>Page 1 of 10</button>
            <button type="submit" className='submit2'>Next</button>
        </div>
        <div className='Btopic1'>Subscribe to the newsletter to hear <br/> about updates and events. </div>
        <div class="wrapperForm">
            <div class="icon">
                <FaEnvelope className='iconMail'/>
            </div>           
            <input class="input" placeholder='Enter your email address' className='Email'></input>
            <button type='button' className='eButton'>Subscribe</button>
        </div> 
        <div className='Btopic2'>* To see how we use your information, please see our <span className='textUnderline'>privacy policy.</span></div> 
    </div>
  )
}
