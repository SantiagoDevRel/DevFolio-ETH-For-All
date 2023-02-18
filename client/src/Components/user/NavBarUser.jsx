import React from 'react'
import styles from "./UserStyles/User.module.css"
import logo from "../images/PolygonID.png"

function NavBar() {
  return (
    <>
      <div className={styles.header}>
          <img className={styles.image} src={logo} alt='Logo'/>

            <a href='/' className={styles.element}>Home</a>
            <a href='./events' className={styles.element}>Events</a>
            <a href='./marketplace' className={styles.element}>Marketplace</a>
            <a href='./blextickPlus ' className={styles.element}>BlextickPlus</a>
            <a href='./myaccount' className={styles.element}>My Account</a>

            <button className={styles.mainbutton}>Disconnect</button>
      </div>
      
    </>
  )
}

export default NavBar
