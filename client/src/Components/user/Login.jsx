import React from 'react'
import styles from "./UserStyles/User.module.css"
import NavBar from '../NavBar'
import QR from "../images/QR_Polygon.png"

function Login() {
  return (
    <>
        <NavBar/>
        <div className={styles.mainpage}>
            <div className={styles.container}>
                <h1>Please connect your wallet</h1>
                <p>Scan the QR code to receive the BlextickPass (you must have KYC claim done in your wallet).</p>
                <a href='./myaccount' ><img className={styles.qrcode} src={QR} alt='QR'/> </a>
                <a href='./myaccount'><button className={styles.mainbuttonqr}>Connect to Metamask</button> </a>
            </div>
        </div>
    </>
  )
}

export default Login
