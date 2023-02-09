import React from 'react'
import "./marketplace.css"
import {ReactComponent as  MaticLogo} from "../images/matic.svg"
const img = "https://images.unsplash.com/photo-1499754162586-08f451261482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"


function MarketplaceCards() {
  return (
    <div>
        <div className="card">
            <div className="card-img">
                <img alt="NBA" src={img}/>
            </div>
            <div className="card-info">
                <p className="text-title">Product title </p>
                <p className="text-body">Product description and details</p>
            </div>

            <div className="card-footer">
                499.49  
                    <svg>
                    <MaticLogo/>
                    </svg>                     
            </div>
        </div>   
    </div>
  )
}

export default MarketplaceCards
