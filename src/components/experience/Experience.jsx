import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5> Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Developer</h3>
          <div  className="experience__content">
              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
              
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>
              
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React.js</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Problem Solving & Algorithm</h3>
          <div  className="experience__content">
              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Data Structure And Algorithm</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Compitetive Programming</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Python Developer</h3>
          <div  className="experience__content">
              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python Packages</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>OpenCV</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tkinter</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Turtle</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Django</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Flask</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
          </div>
        </div>
        
        
      </div>

    </section>
  )
}

export default experience