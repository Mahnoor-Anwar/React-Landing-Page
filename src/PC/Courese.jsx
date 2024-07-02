import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Underline from '../assets/academics-ul.png'
import FreeOnline from '../assets/free.png'
import Law from '../assets/law.png'
import Python from '../assets/python.png'
import Dev from '../assets/clife.png'
import Group from '../assets/vector7.svg'

const Courese = () => {
  const data = [
    {
      title:'Dave conservatoire is the Entirely free online',
      lesson:'5',
      price:'$72.00',
      students:'56 Students', 
      img : FreeOnline

    },
    {
      title:'Strategy law and Organization foundation',
      lesson:'4',
      price:'$68.00',
      students:'77 Students' ,
      img:Law
    },
    {
      title:'Python for Data Science & Machine Learning',
      lesson:'4',
      price:'$68.00',
      students:'77 Students' ,
      img: Python
    },  
    {
      title:'The complete web develop Ment bootcamp.',
      lesson:'4',
      price:'$68.00',
      students:'77 Students' ,
      img:Dev
    }
  ]
  return (
    <div>
      <h1 className="text-center">Popular Cosurses</h1>
      <div className="d-flex justify-content-center">
          <img src={Underline} />
      </div>
      <div className="d-flex justify-content-around mt-5">
      {data.map(data=>{
        return (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.img} style={{height:'211px'}}/>
          <Card.Body>
       
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>UX Design</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>{data.lesson}Lesson</li>
                </ul>
                </div>
            </div>
            <div className="row">
              <Card.Title>{data.title}</Card.Title>
            </div>
            <hr/>
            <div className="row">
              <div className="col-md-8">
                <img src={Group} />
                  <p>{data.students}</p>
              </div>
              <div className="col-md-4">
                <h5>{data.price}</h5>
              </div>
            </div>
            
          </Card.Body>
        </Card>
         
         )
        })}
        </div>
     
    </div>
  )
}

export default Courese
