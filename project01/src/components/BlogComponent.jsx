import React, { Component } from 'react'
import Cards from './itemBox03/Cards'
import img from '../images/Staking_blogpost.png'
import img1 from '../images/XCMv2--2-.png'
import img2 from '../images/Encointer-Blog-Cover-1.jpeg'
import img4 from '../images/cover-image.png'
import img5 from '../images/2021-Roundup.jpg'
import img6 from '../images/https---s3-us-west-2.amazonaws.com-secure.notion-static.com-59c5317d-bde0-465f-9671-b84997b246f2-Polkadot_Auctions_Report_-1-.png'
import img7 from '../images/Statemint-1.png'
import img8 from '../images/Parachains-are-live-.png'
import img9 from '../images/Parachains-value-prop.png'
import img10 from '../images/Kusama-Auctions-Report-6-11--1-.png'
import img11 from '../images/rococo.png'
import img12 from '../images/Gifts-UI.png'

export default class BlogComponent extends Component {
  render() {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <Cards img={img} title="Polkadot" heading="Introducing the Polkadot Staking Dashboard: The Easiest Way to Nominate and Stake Your DOT" description="Staking your DOT just got a whole lot easier with Polkadot’s new staking dashboard, a user-friendly interface for staking natively on Polkadot...." />
                <Cards img={img1} title="Polkadot" heading="XCMv2 Audit Completed by Quarkslab" description="XCMv2 has now been audited for a second time to discover any potential cross-chain security or fairness issues, including logical bugs, denial-of-service, and incorrect lock/unlock or burn/mint on both chains..." />
                <Cards img={img2} title="Polkadot" heading="Introducing Encointer: Making Web3 Truly Inclusive" description="Encointer is Kusama’s second common-good parachain slot . In this post, we take an in-depth look at Encointer and the problems it addresses — how it can bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel ‘proof-of-personhood’ system for unique identity...." />
            </div>
            <div style={{display: 'flex'}}>
                <Cards img={img4} title="Polkadot" heading="Polkadot v1.0: Sharding and Economic Security" description="This post is about the technology powering Polkadot. Polkadot is a sharded blockchain with heterogeneous shards...."/>
                <Cards img={img5} title="Polkadot" heading="Polkadot 2021 Roundup" description="The holiday season is coming around again and with the new year, let’s take a quick retrospective about what the Polkadot project achieved over 2021...."/>
                <Cards img={img6} title="Polkadot" heading="Making History, Again: Polkadot Auctions 1-5" description="Following the successful completion of Polkadot's first batch of auctions, we review what happened and look at the data...."/>
            </div>
            <div style={{display: 'flex'}}>
                <Cards img={img7} title="" heading="Statemint Becomes First Common Good Parachain on Polkadot" description="After approval by the Polkadot community, the the Shell parachain was upgraded to Statemint, Polkadot’s common-good parachain for fungible and non-fungible assets...."/>
                <Cards img={img8} title="Polkadot" heading="Parachains are Live! Polkadot Launch is Now Complete" description="Parachains are now live on Polkadot, completing the multi-stage Polkadot launch process...."/>
                <Cards img={img9} title="Polkadot" heading="The Parachain Advantage: Exploring Polkadot's Next-Generation Model" description="With the recent launch of Polkadot's first five auction-winning parachains, we take a closer look at the parachain model and the value this game-changing multichain technology brings to Web3...."/>
            </div>
            <div style={{display: 'flex'}}>
                <Cards img={img10} title="Kusama" heading="Kusama Batch 2 Auctions Report" description="This is the second report on Kusama’s parachain auctions. It follows a similar format as the first, however detailed explanations about the candle mechanism applied in the auctions are left out because they were discussed in the first report...."/>
                <Cards img={img11} title="Rococa" heading="Rococo Revamp – Becoming a Community Parachain Testbed" description="Rococo has come a long way over its short life. It is now ready to evolve into a decentralized, community maintained network...."/>
                <Cards img={img12} title="Polkadot" heading="Introducing Polkadot & Kusama Gifts: The Easiest Way to Send DOT & KSM to Friends & Family" description="Introducing Polkadot and Kusama Gifts, the easiest Way to send DOT and KSM to Friends and Family. Polkadot and Kusama Gifts are a new way to send DOT or KSM to anyone, even if they don’t already have an account or wallet...."/>
            </div>
        </div>  
    )
  }
}
