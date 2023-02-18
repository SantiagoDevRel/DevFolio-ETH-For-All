import React from 'react'
import "../UserStyles/marketplace.css"
import styles from "../UserStyles/BlextickPlus.module.css"

function BlextickPlusCard(props) {
  return (
    <>
      <div className="card">
            <div>
                <img alt="QR Code" src={props.image}/>
            </div>
            <div>
                <p className={styles.title}>{props.name}</p>
                <p className={styles.shortDescription}>{props.description}</p>
            </div>

        </div>   
    </>
  )
}

export default BlextickPlusCard
