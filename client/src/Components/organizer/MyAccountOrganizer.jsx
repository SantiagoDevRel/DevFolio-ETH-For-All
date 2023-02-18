import React from 'react'
import NavBarOrganizer from './NavBarOrganizer'
import styles from "./loginOrganizer.module.css"
import CardMyEvents from "./CardMyEvents"
import hack1 from "../user/UserStyles/ImageMyAccount/hackathon1.jpg"
import hack2 from "../user/UserStyles/ImageMyAccount/hackathon2.jpg"

function MyAccount() {
  return (
    <>
      <NavBarOrganizer/>
      <h2 className={styles.title}>Welcome DevFolio!</h2>
      <p className={styles.title}>Here you can see the collections(events) you have created</p>
      <div className={styles.container}>
        <div><CardMyEvents image={hack1} name="ETH FOR ALL"/></div>
        <br></br>
        <div ><CardMyEvents image={hack2} name="Makeathon5"/></div>
      </div>
    </>
  )
}

export default MyAccount
