import React from 'react';
import styles from "./Events.module.css"
import photoNFT from "../images/Stadium.jpg"
import {ReactComponent as  MaticLogo} from "../images/matic.svg"


function CardEvents() {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.img}>
        <img alt="nft" src={photoNFT}/>
      </div>
    <p className={styles.title}>Real Madrid vs Barcelona</p>
      <div className={styles.textBox}>

        <p className={styles.p} >Date <br></br>30/03/2023</p>
        <p className={styles.p}>Location <br></br>Santiago Bernabeu</p>
        <p className={styles.p}>Price <br></br>150<svg> <MaticLogo/></svg></p>
        <p className={styles.p}>1 ticket per person</p>

      <div>
    </div></div></div>
    </>
  );
}

export default CardEvents;