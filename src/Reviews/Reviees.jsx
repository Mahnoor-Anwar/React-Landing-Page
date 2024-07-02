import React from 'react'
import Review from '../assets/review.png'
import style from './Reviews.module.css'
import Underline from '../assets/academics-ul.png'
import classNames from 'classnames';


const Reviees = () => {
  return (
      <>
 <h1 className="text-center mt-5">What Our Student Say About Us</h1>
 <div className="d-flex justify-content-center">
          <img src={Underline} />
      </div>
    <div className={classNames('container' , style.box)}>
      <div className="row">
          <div className="col-md-4">
              <img src={Review} alt=""/>
          </div>
          <div className="col-md-8 mt-5">
              <h4>Justin Case</h4>
              <p>Student</p>
              <div></div>
              <p>
              Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. 
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.
              </p>
          </div>
      </div>
    </div>
      </>
     
  )
}

export default Reviees
