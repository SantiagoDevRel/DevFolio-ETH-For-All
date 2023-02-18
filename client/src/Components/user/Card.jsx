import React from 'react';
import styles from "./UserStyles/Cards.module.css"

function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.img}>
          <img alt="nft" src={props.image}/>
          </div>
              <div className={styles.textBox}>

                <p className={styles.h1}>{props.title}</p>
                <p className={styles.p}>{props.description}</p>
                <a className={styles.polyscan} href={props.link} target={'_blank'} rel="noreferrer">View in Polygonscan</a>
              <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;