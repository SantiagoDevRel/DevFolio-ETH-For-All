import React from 'react'
import NavBarOrganizer from './NavBarOrganizer'
import styles from "./loginOrganizer.module.css"
import CardMyEvents from "./CardMyEvents"


function MyAccount() {
  return (
    <>
      <NavBarOrganizer/>
      <h2 className={styles.title}>Welcome 0x378.....5Fe7 !</h2>
      <p className={styles.title}>Here you can see the collections(events) you have created</p>
      <div className={styles.container}>
        <div><CardMyEvents/></div>
        <br></br>
        <div ><CardMyEvents/></div>
      </div>
    </>
  )
}

export default MyAccount
