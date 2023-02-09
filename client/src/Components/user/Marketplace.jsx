import React from 'react'
import MarketplaceCards from './MarketplaceCards'
import NavBar from './NavBarUser'
import "./marketplace.css"

function Marketplace() {
  return (
    <>
      <NavBar/>
      <p className="description">This is a free space where users can exchange their tickets (NFTs).</p>
      <div className='marketplaceNFTs'>
        <MarketplaceCards/>
        <MarketplaceCards/>
        <MarketplaceCards/>
        <MarketplaceCards/>
        <MarketplaceCards/>
        <MarketplaceCards/>
        <MarketplaceCards/>
        <MarketplaceCards/>
      </div>
    </>
  )
}

export default Marketplace
