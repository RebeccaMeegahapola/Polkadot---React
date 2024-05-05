import React from 'react'
import NavBar from './NavBar'
import './AboutContent.css'
import MainComponent from './itemBoxComponent'
import Footer from './Footer'
import AboutComponent1 from './AboutComponent1'
import AboutComponent2 from './AboutComponent2'

export default function AboutContent() {
  return (
    <div>
        <NavBar/>
        <div className='Abouttopic'>About Polkadot, a platform for Web3</div>
        <AboutComponent1/>
        <AboutComponent2/>
        <div>
            <h1 className='head02'>From the blog</h1>
        </div>
        <MainComponent/>
        <div className='div10'>
            <h1 className='heading06'>Want to get involved?</h1>
            <button class="button fbtn">Join the Community</button>
            <p className='cont'>or learn about how to <span className='underline1'>build on Polkadot.</span></p>
        </div> 
        <Footer/>  
    </div>
  )
}
