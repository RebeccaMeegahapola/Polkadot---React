import React from 'react'
import './AboutComponent1.css'

export default function AboutComponent1() {
  return (
    <div className='Maindiv'>
        <div className='FirstDiv'>
            <div className='children-1'>
                <h2 className='Abouthead'>The Polkadot mission</h2>
                <p className='Aboutpara'>We envision a Web where our identity and our data is our own - safely secured from any central authority.</p>
            </div>
            <div className='children-2'>
                <div className='Aboutpara1'>
                    <p className='Apara1'>Polkadot will enable a completely decentralized web where users are in control.</p>
                    <p className='Apara2'>Polkadot is built to connect private and consortium chains, public and permissionless networks, oracles, and future technologies that are yet to be created. Polkadot facilitates an internet where independent blockchains can exchange information and transactions in a trustless way via the Polkadot relay chain.</p>
                    <p className='Apara3'>Polkadot makes it easier than ever to create and connect decentralized applications, services, and institutions. By empowering innovators to build better solutions, we seek to free society from its reliance on a broken web where its large institutions can’t violate our trust.</p>
                </div>
                <button class="buttonF">Learn About the Technology</button>  
            </div>
        </div>
    </div>
  )
}
