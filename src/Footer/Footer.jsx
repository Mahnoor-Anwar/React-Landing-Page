import React from 'react'
import Flogo from '../assets/flogo.png'
import Phone from '../assets/vector4.svg'
import Mail from '../assets/vector2.svg'
import Vector    from '../assets/vector.svg'


const Footer = () => {
  return (
    <div className="bg-dark p-5">
      <div className="row">
          <div className="col-md-3">
              <img src={Flogo} />
              <p className="text-white">There are course and event custom
                post types so you can easily create and
                manage course, events.</p>
                <img src={Phone} /><p className="d-inline-block text-white">+(402) 762 441 83</p>
                <br></br>
                <img src={Mail} /><p className="d-inline-block text-white">info@gmail.com</p>
          </div>
          <div className="col-md-3">
              <h4 className="text-white">About Us</h4>
              <ul className="">
                  <li className="text-white">About</li>
                  <li className="text-white">Courses</li>
                  <li className="text-white">Events</li>
                  <li className="text-white">Career</li>
                  <li className="text-white">Become a teacher</li>
                  <li className="text-white">Contact</li>
              </ul>
          </div>
          <div className="col-md-3">
          <h4 className="text-white">Useful Links</h4>
              <ul className="">
                  <li className="text-white">Browser Library </li>
                  <li className="text-white">Library</li>
                  <li className="text-white">Partners</li>
                  <li className="text-white">News and Blogs</li>
                  <li className="text-white">FAQ</li>
                  <li className="text-white">Tutorials</li>
              </ul>
          </div>
          <div className="col-md-3">
              <h4 className="text-white">Newsletter</h4>
                <p className="text-white">Get the latest Echooling news
                    delivered to you inbox</p>
                <div className="row">
                    <div className="col-md-8 bg-white py-3">
                        <input type="text" className="border-0" placeholder="Enter Email"/>
                    </div>
                    <div className="col-md-2 bg-primary py-3">
                        <img src={Vector} alt=""/>
                    </div>
                </div>    
          </div>
      </div>
    </div>
  )
}

export default Footer
