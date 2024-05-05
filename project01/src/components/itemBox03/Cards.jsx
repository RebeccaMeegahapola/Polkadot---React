import React, { Component } from 'react'
import './Cards.css'

class Cards extends Component {
  render() {
    return (
      <div className='box01' align='center'>
          <img src={this.props.img} className='imgBlog'/>
          <span className='spanB'>{this.props.title}</span>
          <h3 className='topicB'>{this.props.heading}</h3>
          <p className='descB'>{this.props.description}</p>       
      </div>
    )
  }
}

export default Cards;