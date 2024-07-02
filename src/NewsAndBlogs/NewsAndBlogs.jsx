import React from 'react'
import News from '../assets/news.png'
import Blogs from '../assets/blogs.jpg'
import Group from '../assets/vector7.svg'
import Underline from '../assets/academics-ul.png'
import Card from 'react-bootstrap/Card';


const NewsAndBlogs = () => {
    const data = [
        {
          title:'Kids future Schools & Corona Prevent to Growth',
          img : News
    
        },
        {
            title:'Echooling future Schools & social Innovation',
            img : Blogs
      
          },
          {
            title:'7 Learning system design tips For better eLearning',
            img : News
      
          },
          {
            title:'Why schools should continue remote study',
            img : Blogs
      
          },
      ]
  return (
    <div>
      <h1 className="text-center">News And Blogs</h1>
      <div className="d-flex justify-content-center">
          <img src={Underline} />
      </div>
      <div className="d-flex justify-content-around mt-5">
      {data.map(data=>{
        return (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.img} style={{height:'211px'}}/>
          <Card.Body>
              <p>Education</p>
              <h5>{data.title}</h5>
              <img src={Group} /> <p>Charlie John</p>
          </Card.Body>
        </Card>
         
         )
        })}
        </div>
     
    </div>
  )
}

export default NewsAndBlogs
