import React, { Component } from 'react'
import BlogComponent from './BlogComponent'
import NavBar from './NavBar'
import './BlogContent.css'
import BlogComponent1 from './BlogComponent1'
import Footer from './Footer'

export default class BlogContent extends Component {
  render() {
    return (
      <div id='blog'>
        <NavBar/>
        <div className='Btopic'>Polkadot blog</div>
        <BlogComponent/>
        <BlogComponent1/>
        <Footer/>
      </div>
    )
  }
}
