import React from 'react'
import Underline from '../assets/academics-ul.png'
import Science from '../assets/news.png'
import Online from '../assets/4.3d31b426e478a4d304b8.png'
import Cloud from '../assets/3.0cf44447da5e6fb16e49.png'
import Innovative    from '../assets/2.ec9d013b7d4f44fa4112.png'
import Vector    from '../assets/vector.svg'
import styles from './Academics.module.css'; // Import your CSS module
import { Card, Button } from 'react-bootstrap';

const Academics = () => {
    const cardData = [
        {
            name:"Lets Talk Science",
            img :Science,
        },
        {
            name:"Innovative Courses",
            img :Innovative ,
        },{
            name:"Cloud Storage",
            img :Cloud,
        },{
            name:"Online Education",
            img :Online ,
        }
    ]
  return (
    <>
    
      <h1 className="text-center">Acedmaics</h1>
      <div className="d-flex justify-content-center">
        <img src={Underline} className="m-auto" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '60vh' }}>
      {cardData.map(key=> {
          return (
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={key.img} className={styles.img}/>
               
                <Card.Title className={styles.cardText}>{key.name}</Card.Title>
                <p className={styles.learnmore}>Learn More <img src={Vector} alt="->" /></p>
            </Card>
          )
        })}
        </div>
    </>
  )
}

export default Academics
