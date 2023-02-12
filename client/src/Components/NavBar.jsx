import React from 'react'
import logo from "./images/PolygonID.png"
import styles from "./home.module.css"
//import blextick from "./images/Blextick Logo.png"


function Header() {
  return (
    <div className={styles.header}>
        <img className={styles.image} src={logo} alt='Logo'/>
        
          <a href='/' className={styles.element}>BlextickPass ID</a>

        <img className={styles.image} src={logo} alt='Logo'/>
    </div>
  )
}

export default Header
