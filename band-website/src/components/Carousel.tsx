import React from 'react'
import Carousel1 from './Assets/Carousel-1.jpg'
import Carousel2 from './Assets/Carousel-2.jpg'
import Carousel3 from './Assets/Carousel-3.jpg'

export default function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Carousel1} className="d-block w-100" alt="Carousel 1"/>
        <div className="carousel-caption d-none d-md-block">
        <h1>Los Angeles</h1>
        <br />
        <h2>We had the best time playing at Venice Beach!</h2>
      </div>
      </div>
      <div className="carousel-item">
        <img src={Carousel2} className="d-block w-100" alt="Carousel 2"/>
        <div className="carousel-caption d-none d-md-block">
        <h5>New York</h5>
        <br />
        <p>The atmosphere in New York is lorem ipsum.</p>
      </div>
      </div>
      <div className="carousel-item">
        <img src={Carousel3} className="d-block w-100" alt="Carousel 3"/>
        <div className="carousel-caption d-none d-md-block">
        <h5>Chicago</h5>
        <br />
        <p>Thank you, Chicago - A night we won't forget.</p>
      </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
