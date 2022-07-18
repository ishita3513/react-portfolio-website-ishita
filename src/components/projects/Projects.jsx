import React from 'react'
import './Projects'
import './projects.css'
import IMG1 from '../../assets/oilopedia.gif'
import IMG2 from '../../assets/face_recognition.gif'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Oilopedia: E-commerce website for oils',
    github:'https://github.com/ishita3513/Oilopedia-Website'
  },
  {
    id:2,
    image:IMG2,
    title:'Face-Recognition based Attendance System',
    github:'https://github.com/ishita3513/Oilopedia-Website'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent project works</h5>
      <h2>Projects</h2>
      
      <div className='container project__container'>
        {
          data.map(({id,image,title,github})=>{
            return(
                <article key={id} className='project__item'>
                  <div className='project__item-image'>
                    <img src={image} alt={title} />
                  </div>  
                  <h3>{title}</h3>
                  <div className='project__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                  </div>
                  
                </article>
            )
            
          })
        }
      </div>
    </section>
  )
}

export default Projects