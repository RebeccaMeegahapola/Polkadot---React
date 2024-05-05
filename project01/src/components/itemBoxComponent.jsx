import React, { Component } from 'react'
import Card from './itemBox/Card'
import img from '../images/Frame-4.png'
import img1 from '../images/Staking_blogpost.png'
import img2 from '../images/XCMv2--2-.png'
import img3 from '../images/ghost_avatar_polkadot.png'
import img4 from '../images/Gavin_750.jpg'

export default class itemBoxComponent extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
          <Card img={img} title="Polkadot" heading="XCMv2 Audit Completed by Quarkslab" description="XCMv2 has now been audited for a second time to discover any potential cross-chain security or fairness issues, including logical bugs, denial-of-service, and incorrect lock/unlock or burn/mint on both chains..." img1={img4} title1="Gavin Wood"/>
          <Card img={img1} title="Polkadot" heading="Introducing Encointer: Making Web3 Truly Inclusive" description="Encointer is Kusama’s second common-good parachain slot . In this post, we take an in-depth look at Encointer and the problems it addresses — how it can bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel ‘proof-of-personhood’ system for unique identity...." img1={img3} title1="Polkadot"/>
          <Card img={img2} title="Polkadot" heading="Polkadot v1.0: Sharding and Economic Security" description="This post is about the technology powering Polkadot. Polkadot is a sharded blockchain with heterogeneous shards...." img1={img3} title1="Polkadot"/>
      </div>
    )
  }
}