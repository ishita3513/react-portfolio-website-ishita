import React from 'react'
import  './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {FiTarget} from 'react-icons/fi'
import {ImTarget} from 'react-icons/im'
import {TbBooks} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ programming language</small>
            </article>

            <article className='about__card'>
              <ImTarget className='about__icon'/>
              <h5>Problem Solving</h5>
              <small>300+ leetcode problems</small>
            </article>

            <article className='about__card'>
              <TbBooks className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ projects</small>
            </article>
          </div>
          <p>
          Currently, I am pursuing my B.tech in Computer Science and Engineering from Vellore Institute of Technology,Vellore.</p>
          <p>
          I am a tech enthusiast and love coding to solve real life scenario keen to learn new technologies. I am interested in AI, ML, cyber-security, blockchain, low code designs, and web technologies.</p>
        </div>
      </div>
    </section>
  )
}

export default about