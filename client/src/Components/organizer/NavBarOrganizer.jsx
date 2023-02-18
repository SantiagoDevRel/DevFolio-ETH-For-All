import React from 'react'
import logo from "../images/PolygonID.png"
import styles from "./NavBarOrganizer.module.css"


function NavBarOrganizer() {
  return (
    <div className={styles.header}>
          <div className={styles.header}>
          <img className={styles.image} src={logo} alt='Logo'/>

            <a href='/' className={styles.element}>Home</a>
            <a href='./create-event' className={styles.element}>Create an event</a>
            <a href='./myaccount' className={styles.element}>My Account</a>
            <button className={styles.mainbutton}>Disconnect</button>
      </div>
    </div>
  )
}

export default NavBarOrganizer
