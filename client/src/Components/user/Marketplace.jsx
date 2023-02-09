import React from 'react'
import MarketplaceCards from './MarketplaceCards'
import NavBar from './NavBarUser'

function Marketplace() {
  return (
    <>
      <NavBar/>
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
