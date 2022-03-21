import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImFacebook2} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/andres-arispe-b25a9a121/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/AndresArispeMedina' target="_blank"><FaGithub/></a>
        <a href='https://www.facebook.com/enrique.arispemedina.5' target="_blank"><ImFacebook2/></a>
    </div>
  )
}

export default HeaderSocials