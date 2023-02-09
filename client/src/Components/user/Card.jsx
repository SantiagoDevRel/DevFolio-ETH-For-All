import React from 'react';
import styles from "./Cards.module.css"
import photoNFT from "../images/whitephoto.jpg"

function Card() {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.img}>
        <img alt="nft" src={photoNFT}/>
      </div>
      <div className={styles.textBox}>

        <p className={styles.h1}>ETH FOR ALL HACKATHON</p>
        <p className={styles.p}>This is an ERC721 that represents your access to the hackathon, it can be transferable up to 24 hours before the event.</p>
        <a className={styles.polyscan} href='https://mumbai.polygonscan.com/' target={'_blank'} rel="noreferrer">View in Polygonscan</a>

      <div>
    </div></div></div>
    </>
  );
}

export default Card;