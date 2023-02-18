import React from 'react'
import Card from './Card'
import NavBarUser from './NavBarUser'
import styles from "./UserStyles/User.module.css"
import styles2 from "./UserStyles/Cards.module.css"
import hack1 from "../user/UserStyles/ImageMyAccount/hackathon1.jpg"
import hack2 from "../user/UserStyles/ImageMyAccount/hackathon2.jpg"


function MyAccount() {


  return (
    <>
      <NavBarUser/>
      <h2 className={styles.title}>Welcome 0x378.....5Fe7 !</h2>
      <p className={styles.title}>Here you can see the NFTs you have purchased</p>
      <div className={styles.container}>
        <h1>Your upcoming events...</h1>
        <br></br>
        <div className={styles2.container}><Card image={hack1} title="ETH FOR ALL" description="This is an ERC721 that represents your access to the hackathon, it can be transferable up to 24 hours before the event." link="https://mumbai.polygonscan.com/"/></div>
        <br></br>
        <div className={styles2.container}><Card image={hack2}  title="Makeathon5" description="This is an ERC721 that represents your access to the hackathon, it can be transferable up to 24 hours before the event." link="https://mumbai.polygonscan.com/" /></div>
      </div>
    </>
  )
}

export default MyAccount
