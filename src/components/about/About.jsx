import React from 'react'
import './about.css'
import ME from '../../assets/person.jpg'
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
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderAdd className="about__icon"/>
              <h5>Experience</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            ssed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
          </p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About