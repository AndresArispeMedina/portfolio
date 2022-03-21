import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article  className="service">
          <div className="service__head">
            <h3>Back End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Building and maintaining back end applications.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Assessing the efficiency and speed of current applications.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Experience with SQL, MySLQ and PostgreSQL database systems.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Knowledge of REST-API web services applications.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Experience with Springboot, Django or Nest Js frameworks.</p>
            </li>
          </ul>
        </article>
        {/* END OF BACK END */}
        <article  className="service">
          <div className="service__head">
            <h3>Front End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className='service__list-icon'/>
              <p>I always try to create a good work environment.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>I'm always complete a high quality work.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>I never give up, I'm always trying to improve myself.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>I'm good working as a team player, always trying to find the best solutions for all.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>I'mn always pushing myself to try and learn new things.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article  className="service">
          <div className="service__head">
            <h3>As a Person</h3>
          </div>

          <ul className="service__list">
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Optimizing the user experience.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Fixing bugs and testing for usability.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Experience with Angular, React Js or Ionic frameworks.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Use of CSS Preprocessors.</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION */}
      </div> 
    </section>
  )
}

export default Services