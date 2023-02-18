import React from 'react'
import BlextickPlusCard from './BlextickPlusCard'
import NavBarUser from "../NavBarUser"
import styles from "../UserStyles/BlextickPlus.module.css"

import football from "./QR_code/Football.png"
import basketball from "./QR_code/Basketball.png"
import cricket from "./QR_code/Cricket.png"
import rock from "./QR_code/Rock.png"
import pop from "./QR_code/Pop.png"
import opera from "./QR_code/Opera.png"

function BlextickPlus() {
  return (
    <>
        <NavBarUser/>
        <p className={styles.title}>This is a on-chain (PolygonID based) database of user preferences, a transparent & real marketing system for the organizers</p>
        <p className={styles.title}>Here you can share your data (preferences for events) without having to reveal your identity</p>
        <p className={styles.title}>By owning this claims, you can get exclusive discount & benefits in Blextick platform!</p>

        <div className={styles.container}>
            <BlextickPlusCard name="Football" description="Scan this if you love Football!" image={football}/>
            <BlextickPlusCard name="Cricket" description="Scan this if you love Cricket!" image={cricket}/>
            <BlextickPlusCard name="Basketball" description="Scan this if you love Basketball!" image={basketball}/>
            <BlextickPlusCard name="Rock" description="Scan this if you love Rock!" image={rock}/>
            <BlextickPlusCard name="Opera" description="Scan this if you love Opera!" image={opera}/>
            <BlextickPlusCard name="Pop" description="Scan this if you love Pop!" image={pop}/>

        </div>

    </>
  )
}

export default BlextickPlus
