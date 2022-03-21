import React from 'react'
import './about.css'
import ME from '../../assets/ChinaPalace.jpeg'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderAdd} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image"> 
            <img src={ME} alt="About image"/>
          </div>    
        </div>
        <div className="about__content"> 
          <div className="about__cards"> 
            <article className="about__card">
              <BiAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Experience</h5>
              <small>25+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderAdd className="about__icon"/>
              <h5>Experience</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages. 
          Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. 
          Collaborative team player with excellent technical abilities offering 2 years of related experience.
          </p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About