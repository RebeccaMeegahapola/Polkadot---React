import React, { Component } from 'react'
import './Box01.css'

export default class Box01 extends Component {
  render() {
    return (
        <div className='wrapper'>
            <div>
                <img src={this.props.img} className='image03'/>
                <h5 className='cont1'>{this.props.title}</h5>
                <p className='para1'>{this.props.description}</p>
            </div>                 
        </div>
    )
  }
}
