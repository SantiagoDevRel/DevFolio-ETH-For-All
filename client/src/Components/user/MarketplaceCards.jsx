import React from 'react'
import "./UserStyles/marketplace.css"
import {ReactComponent as  MaticLogo} from "../images/matic.svg"


function MarketplaceCards(props) {

  return (
    <>
        <div className="card">
            <div className="card-img">
                <img alt="NBA" src={props.image}/>
            </div>
            <div className="card-info">
                <p className="text-title">{props.name}</p>
                <p className="text-title">{props.description}</p>
            </div>

            <div className="card-footer">
                {props.price}  
                    <svg>
                    <MaticLogo/>
                    </svg>                     
            </div>
        </div>   
    </>
  )
}

export default MarketplaceCards
