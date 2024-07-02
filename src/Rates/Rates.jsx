import React from 'react'
import style from './Rates.module.css'

const Rates = () => {
  return (
    <div className={style.ratesBg}>
      <div className="row d-flex">
          <div className="col-md-3">
              <h5 className="text-center">Successfully Trained</h5>
              <h1  className="text-center">1487</h1>
              <p  className="text-center">Enrolled Learning</p>
          </div>
          <div className="col-md-3">
              <h5 className="text-center">Successfully Trained</h5>
              <h1  className="text-center">1731</h1>
              <p  className="text-center">Enrolled Learning</p>
          </div>
          <div className="col-md-3">
              <h5  className="text-center">Successfully Trained</h5>
              <h1  className="text-center">280</h1>
              <p  className="text-center">Enrolled Learning</p>
          </div>
          <div className="col-md-3">
              <h5  className="text-center">Successfully Trained</h5>
              <h1  className="text-center">1045</h1>
              <p  className="text-center"   >Enrolled Learning</p>
          </div>
          
      </div>
    </div>
  )
}

export default Rates
