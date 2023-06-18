import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ishita-kumari-82199b211/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ishita3513?tab=repositories" rel="noreferrer" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/p/CeX7kkWjkXF/?hl=en" rel="noreferrer" target="_blank"><BsInstagram/></a>
        <a href="https://www.instagram.com/p/CeX7kkWjkXF/?hl=en" rel="noreferrer" target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocial