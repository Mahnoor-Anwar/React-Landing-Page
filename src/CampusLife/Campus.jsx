import React from 'react'
import Underline from '../assets/academics-ul.png'
import Pencil from '../assets/pencil.svg'
import Business from '../assets/business.svg'
import System from '../assets/systen.svg'
import CampusLife from '../assets/clife.png'


const Campus = () => {
  return (
    <div className="container">
        <h1 className="text-center">Campus Life</h1>
        <div className="d-flex justify-content-center">
            <img src={Underline} />
        </div>
      <div className="row">
          <div className="col-md-7">
              <div className="row">
                  <div className="col-md-1">
                      <img src={Pencil} />
                  </div>
                  <div className="col">
                      <h5>Do More , Stress Less</h5>
                     <p>Why I say old chap that is spiffing <br></br>he legged
                    it in my flat easy peasy.</p>
                  </div>
              </div>
              <hr/>
              <div className="row">
                  <div className="col-md-1">
                      <img src={Business} />
                  </div>
                  <div className="col">
                      <h5>The Business Intelligence</h5>
                     <p>Why I say old chap that is spiffing <br></br>he legged
                    it in my flat easy peasy.</p>
                  </div>
              </div>
              <hr/>
              <div className="row">
                  <div className="col-md-1">
                      <img src={System} />
                  </div>
                  <div className="col">
                      <h5>System Administration</h5>
                     <p>Why I say old chap that is spiffing <br></br>he legged
                    it in my flat easy peasy.</p>
                  </div>
              </div>
          </div>
          <div className="col-md-5">
              <img src={CampusLife} />
          </div>
      </div>
    </div>
  )
}

export default Campus
