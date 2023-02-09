import React from 'react';
import styles from "./Cards.module.css"
import photo from "../images/Hackathon.jpg"

function Card() {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.img}>
        <img alt="nft" src={photo}/>
      </div>
      <div className={styles.textBox}>
        <div className={styles.textContent}>
          <p className={styles.h1}>ETH FOR ALL HACKATHON</p>
        </div>
        <p className={styles.p}>This is an ERC721 that represents your access to the hackathon, it can be transferable up to 24 hours before the event.</p>
        <p className={styles.p}>Xhattmahs is not attacking your base!</p>

      <div>
    </div></div></div>
    </>
  );
}

export default Card;