import React from 'react'
import NavBarOrganizer from './NavBarOrganizer'
import styles from "./loginOrganizer.module.css"
import styles2 from "./Form.module.css"

function CreateEvent() {
  return (
    <>
      <NavBarOrganizer/>
      <p className={styles.title}>Here you can create a new event with any criteria you wish</p>
      <p className={styles.title}>We will use Polygon ID Technology to verify the distribution of your tickets</p>
      <br></br>
      <div className="container">
        <form>
          <label>Name
            <input type="text" name="name" />
          </label>

          <label>Symbol
            <input type="text" name="symbol" />
          </label>
          
          <label>Location
            <input type="text" name="location" />
          </label>
          
          <label>Date
            <input type="date" name="date" />
          </label>

          <label>Hour
            <input type="time" name="hour" />
          </label>

          <label>Price per ticket
            <input type="number" name="price" />
          </label>

          <label>Total supply
            <input type="number" name="price" />
          </label>

          <label>Max tickets per user
            <input type="number" name="price" />
          </label>

          <button className={styles2.button} type='submit' >Create event</button>

        </form>
      </div>
    </>
  )
}

export default CreateEvent
