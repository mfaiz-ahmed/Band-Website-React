import React from 'react'
import Carousel1 from './Assets/Carousel-1.jpg'
import Carousel2 from './Assets/Carousel-2.jpg'
import Carousel3 from './Assets/Carousel-3.jpg'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img src={Carousel1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Carousel2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Carousel3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
