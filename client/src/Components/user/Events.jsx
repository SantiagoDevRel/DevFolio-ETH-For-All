import React from 'react'
import CardEvents from './CardEvents'
import NavBar from './NavBarUser'
import styles from "./Events.module.css"

function Events() {
  return (
    <>
      <NavBar/>
      <p className="description">Here you can buy tickets for the events directly with the organizers according to their requirements.</p>
      <div className={styles.events}>
        <div className={styles.event}><CardEvents/></div>
        <div className={styles.event}><CardEvents/></div>
        <div className={styles.event}><CardEvents/></div>
      </div>
      
      
      
    </>
  )
}

export default Events
