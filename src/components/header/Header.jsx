import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ishita.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    // <div>header</div>
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ishita Kumari</h1>
        <h5 className="text-light">Explorer of Different Technologies</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        
        <a href="#contact" className='scroll_down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header