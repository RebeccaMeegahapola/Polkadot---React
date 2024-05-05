import React from 'react'
import './AboutComponent2.css'
import img12 from '../images/logo-circle-parity-white.svg'
import img13 from '../images/logo-circle-chainsafe-white.svg'
import img14 from '../images/logo-circle-soramitsu-white.svg'
import img15 from '../images/logo-circle-polkadot-js-white.svg'

export default function AboutComponent2() {
  return (
    <div className='Maindiv1'>
        <div className='FirstDiv'>
            <div className='children-1'>
                <h2 className='Abouthead'>Who's building <br/> Polkadot?</h2>
                <p className='Aboutpara'>Polkadot is the flagship project by <br/> Web3 Foundation, a Swiss Foundation founded to facilitate a fully functional and user-friendly decentralized web. </p>
            </div>
            <div className='children1-2'>
                <div className='Aboutpara1'>
                    <p className='Apara1'>The Web3 Foundation is partnering with best-in-class entities to build Polkadot and foster development of the services and applications that will run on it.</p>
                    <p className='Apara2'>Researchers from Inria Paris and ETH Zurich, developers from Parity Technologies, and capital partners from crypto-funds such as Polychain Capital are all working together to develop a superlative realization of Web3, with Polkadot at its core.</p>
                    <p className='Apara3'>Web3 Foundation is providing grants for development of the ecosystem.</p>
                </div>
            </div>
        </div>
        <div class="Aboutrow">
            <div class="Abcolumn">
                <img src= {img12} alt="" className='image12'/> 
            </div>
            <div class="Abcolumn">
                <img src= {img13} alt="" className='image12'/>
            </div>
            <div class="Abcolumn">
                <img src= {img14} alt="" className='image12'/>
            </div>
            <div class="Abcolumn">
                <img src= {img15} alt="" className='image12'/>
            </div>
        </div>
    </div>
  )
}
