import React from 'react'
import Card from './Card'
import NavBarUser from './NavBarUser'
import styles from "./User.module.css"
import styles2 from "./Cards.module.css"

function MyAccount() {


  return (
    <>
      <NavBarUser/>
      <h2 className={styles.title}>Welcome 0x378.....5Fe7 !</h2>
      <p className={styles.title}>Here you can see the NFTs you have purchased</p>
      <div className={styles.container}>
        <h1>Your upcoming events...</h1>
        <br></br>
        <div className={styles2.container}><Card/></div>
        <br></br>
        <div className={styles2.container}><Card/></div>
        
        
      </div>
    </>
  )
}

export default MyAccount
