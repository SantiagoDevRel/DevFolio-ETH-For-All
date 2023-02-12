import React from 'react'
import NavBar from '../NavBar'
import styles from "./loginOrganizer.module.css"
import QR from "../images/QR_Polygon.png"

function LoginOrganizer() {
  return (
    <>
      <NavBar/>
      <div className={styles.mainpage}>
        <div className={styles.container}>
            <h1>Scan your KYC Polygon ID Claim</h1>
            <p>Your identity will be completely private thanks to ZK technology.</p>
            <a href='./myaccount' ><img className={styles.qrcode} src={QR} alt='QR'/> </a>
            <a href='./myaccount'><button className={styles.mainbuttonqr}>Connect Wallet</button> </a>
        </div>
      </div>
    </>
  )
}

export default LoginOrganizer
