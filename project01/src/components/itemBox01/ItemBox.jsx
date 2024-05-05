import React, { Component } from 'react'
import './ItemBox.css'

class ItemBox extends Component {
  render() {
    return (
        <div className='rowN'>
            <div className='column0'>
                <img src={this.props.img} className='imageN'/>
                <h3 className='topic01'>{this.props.topic}</h3>
                <p className='descri'>{this.props.paragraph}</p>
            </div>
        </div>
      
    )
  }
}

export default ItemBox;