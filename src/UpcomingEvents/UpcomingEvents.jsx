import React from 'react'
import Location from '../assets/vector3.svg'
import Underline from '../assets/academics-ul.png'
import Card from 'react-bootstrap/Card';


const UpcomingEvents = () => {
    const data = [
        {
          date:'10',
          month:'January, 2022',
          time:'10:30AM - 12:00PM',
          title:'A Better Alternative To Grading Student Writing',
         
        },
        {
            date:'14',
            month:'April, 2022',
            time:'12:00AM - 01:30PM',
            title:'12 Things Successful Mompreneurs',
           
          },
          {
            date:'26',
            month:'March, 2022',
            time:'13:30PM - 02:00PM',
            title:'12 Things Successful Mompreneurs',
           
          },
          {
            date:'10',
            month:'April, 2022',
            time:'13:30PM - 02:00PM',
            title:'The Importance Of Intrinsic Motivation.',
           
          },
     
      ]
      return (
        <div>
          <h1 className="text-center">Upcoming Events</h1>
          <div className="d-flex justify-content-center">
              <img src={Underline} />
          </div>
          <div className="d-flex justify-content-around mt-5">
          {data.map(data=>{
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <h1>{data.date}</h1>
                    <p>{data.month}</p>
                    <div></div>
                    <p>{data.time}</p>
                    <Card.Title>{data.title}</Card.Title>
                    <img src={Location}/><p className="d-inline-block">New York, USA</p>               
             </Card.Body>
            </Card>
             
             )
            })}
            </div>
         
        </div>
      )
}

export default UpcomingEvents
