import React from 'react'
import styles from "./home.module.css"
import NavBar from "./NavBar"
import QR from './QR/QR'

function Home() {

  

  return (
    <>
      <NavBar/>
      <div className={styles.mainpage}>         
        <div>
          <a href='./organizer/login'>
            <button className={styles.mainbutton}>
                For Organizers</button>
      
          </a>
        </div>


        <div>
          <a href='./user/login'>
            <button className={styles.mainbutton}> 
              For users
            </button>
          </a>
        </div>
      </div>
      <QR/>
    </>
  )
}

export default Home
