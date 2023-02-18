import React from 'react'
import CardEvents from './CardEvents'
import NavBar from './NavBarUser'
import styles from "./UserStyles/Events.module.css"

import bcn from "../user/UserStyles/ImagesEvents/bcn.jpg"
import cricket1 from "../user/UserStyles/ImagesEvents/ind-vs-au.jpg"
import cricket2 from "../user/UserStyles/ImagesEvents/cricket-team.webp"


function Events() {
  return (
    <>
      <NavBar/>
      <p className="description">Here you can buy tickets for the events directly with the organizers according to their requirements.</p>
      <p className="descriptionEvents">YOU MUST BE A BLEXTICKPASS HOLDER TO INTERACT WITH THE PLATFORM</p>
      <div className={styles.events}>
        <div className={styles.event}><CardEvents image={bcn} title="Barcelona vs Real Madrid" date="April 7th, 2023" location="Barcelona, Spain" price="958.99" condition="1 ticket x person"/></div>
        <div className={styles.event}><CardEvents image={cricket1} title="Mumbai Indians vs Delhi Capitals" date="April 8th, 2023" location="Mumbai, India" price="998.99" condition="5 tickets x person"/></div>
        <div className={styles.event}><CardEvents image={cricket2} title="Punjab Kings vs Gujarat Titans" date="April 9th, 2023" location="Ahmedabad, India" price="558.99" condition="5 tickets x person"/></div>
      </div>
      
      
      
    </>
  )
}

export default Events
