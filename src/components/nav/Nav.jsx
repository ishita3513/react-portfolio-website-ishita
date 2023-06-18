import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {TbAward} from 'react-icons/tb'
// import {GrAchievement} from 'react-icons/gr'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#achievements" onClick={()=>setActiveNav('#achievements')} className={activeNav === '#achievements' ? 'active' : ''}><TbAward/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav