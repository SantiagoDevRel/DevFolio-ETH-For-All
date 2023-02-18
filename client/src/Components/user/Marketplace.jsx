import React from 'react'
import MarketplaceCards from './MarketplaceCards'
import NavBar from './NavBarUser'
import "./UserStyles/marketplace.css"

import baseball from "./UserStyles/ImagesMarketplace/baseball.jpg"
import cricket from "./UserStyles/ImagesMarketplace/cricket.jpg"
import gns from "./UserStyles/ImagesMarketplace/gnsconcert.jpg"
import golf from "./UserStyles/ImagesMarketplace/golf.jpg"
import kiss from "./UserStyles/ImagesMarketplace/kissconcert.jpg"
import nba from "./UserStyles/ImagesMarketplace/nba.jpg"
import noname from "./UserStyles/ImagesMarketplace/NoNameBand.jpg"
import rugby from "./UserStyles/ImagesMarketplace/rugby.jpg"


function Marketplace() {
  return (
    <>
      <NavBar/>
      <p className="description">This is a free space where users can exchange their tickets (NFTs).</p>
      <p className="descriptionMarketplace">YOU MUST BE A BLEXTICKPASS HOLDER TO INTERACT WITH THE PLATFORM</p>

      <div className='marketplaceNFTs'>
        <MarketplaceCards name="Baseball match" description="| Tuesday Feb 28th | 10h00" price="100.99" image={baseball}/>
        <MarketplaceCards name="Cricket game" description="| Tuesday Feb 28th | 11h00" price="150.99" image={cricket}/>
        <MarketplaceCards name="Rock concert" description="| Tuesday Feb 28th | 12h00" price="139.99" image={gns}/>
        <MarketplaceCards name="Tiger woods game" description="| Tuesday Feb 28th | 13h00" price="399.99" image={golf}/>
        <MarketplaceCards name="KISS concert" description="| Tuesday Feb 28th | 14h00" price="999.99" image={kiss}/>
        <MarketplaceCards name="LA Lakers vs Dallas" description="| Tuesday Feb 28th | 15h00" price="147.99" image={nba}/>
        <MarketplaceCards name="NoNameBand concert" description="| Tuesday Feb 28th | 16h00" price="19.99" image={noname}/>
        <MarketplaceCards name="Australia vs NZ" description="| Tuesday Feb 28th | 17h00" price="79.99" image={rugby}/>
      </div>
    </>
  )
}

export default Marketplace
