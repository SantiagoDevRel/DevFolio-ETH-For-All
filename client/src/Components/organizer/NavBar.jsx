import React from 'react'
import logo from "../images/PolygonID.png"
import styles from "./home.module.css"


function Header() {
  return (
    <div className={styles.header}>
        <img className={styles.image} src={logo} alt='Logo'/>
          
          <h1 className={styles.element}>BlextickPass ID</h1>

         


        <img className={styles.image} src={logo} alt='Logo'/>
    </div>
  )
}

export default Header
