import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ishita</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ishita-kumari-82199b211/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ishita3513?tab=repositories" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/ishi_3513/?hl=en" target="_blank"><BsInstagram/></a>
        <a href="https://leetcode.com/ishi_kumari/" target="_blank"><SiLeetcode/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ishita Kumari Portfolio, All right reserved.</small>

      </div>
      
    </footer>
  )
}

export default footer