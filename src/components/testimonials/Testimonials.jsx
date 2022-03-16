import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avtr1.jpeg'
import AVTR2 from '../../assets/avtr2.jpeg'
import AVTR3 from '../../assets/avtr3.jpeg'
import AVTR4 from '../../assets/avtr4.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. em beatae corporis maiores ut neque necessitatibus dolores aspernatur, recusandae harum vel aut minus similique praesentium nihil atque architecto repudiandae veniam nobis'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. em beatae corporis maiores ut neque necessitatibus dolores aspernatur, recusandae harum vel aut minus similique praesentium nihil atque architecto repudiandae veniam nobis'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. em beatae corporis maiores ut neque necessitatibus dolores aspernatur, recusandae harum vel aut minus similique praesentium nihil atque architecto repudiandae veniam nobis'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. em beatae corporis maiores ut neque necessitatibus dolores aspernatur, recusandae harum vel aut minus similique praesentium nihil atque architecto repudiandae veniam nobis'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
      pagination={{clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination]} 
      className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={index}/>  
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
}

export default Testimonial