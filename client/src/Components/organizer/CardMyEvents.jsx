import React from 'react';
import styles from "./Cards.module.css"


 
function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.img}>
          <img alt="nft" src={props.image}/>
          </div>
              <div className={styles.textBox}>

                <p className={styles.h1}>{props.name}</p>
                <p className={styles.p}>This is an ERC721 collection that represents the issuing of your tickets for this event.</p>
                <a className={styles.polyscan} href='https://mumbai.polygonscan.com/' target={'_blank'} rel="noreferrer">View in Polygonscan</a>
              <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;