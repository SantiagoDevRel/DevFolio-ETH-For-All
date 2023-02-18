import React from 'react';
import styles from "./UserStyles/Events.module.css"
import {ReactComponent as  MaticLogo} from "../images/matic.svg"




function CardEvents(props) {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.img}>
        <img alt="nft" src={props.image}/>
      </div>
    <p className={styles.title}>{props.title}</p>
      <div className={styles.textBox}>
        <p className={styles.p}>Date:<br></br>{props.date}</p>
        <p className={styles.p}>Location: <br></br>{props.location}</p>
        <p className={styles.p}>Condition:<br></br>{props.condition}</p>
        <p className={styles.p}>Price: <br></br>{props.price}<svg> <MaticLogo/></svg></p>

      <div>
    </div></div></div>
    </>
  );
}

export default CardEvents;