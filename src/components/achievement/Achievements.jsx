import React from 'react'
import './achievements.css'
import IMG1 from '../../assets/mentee.png'
import IMG2 from '../../assets/gCloud.png'
import IMG3 from '../../assets/gwoc1.png'
import {Pagination,Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    image:IMG1,
    topic:'Microsoft Engage Mentee 2022',
    about:'Microsoft engage is a mentorship program to select students for internship offer at microsoft. I am very glad to be a part this program. I successfully advanced to interview stage.',
    link:"https://www.linkedin.com/feed/update/urn:li:activity:6927248461104832512/"
  
  },
  {
    image:IMG2,
    topic:'Cloud Security Challenge by Google Cloud Training 2022 January 2022',
    about:'This is a 3 week long cloud challenge. I learnt about cloud security by doing real lab works.',
    link: "https://www.cloudskillsboost.google/public_profiles/6a9892a5-ef70-4c43-8d96-7cb5b55a1c2d"
    
  },
  {
    image:IMG3,
    topic:'Girlscript Winter of contribution',
    about:'GWOC is a great platform to start journey of open source contribution. I contributed in Data Structure and Algorithm, Compititive programming and C/C++ .',
    link:"https://www.linkedin.com/in/ishita-kumari-82199b211/recent-activity/shares/"
  }
]
const Achievements = () => {
  return (
    <section id='achievements'>
      <h5>Achivements</h5>
      <Swiper className="container achievements__container"
      modules={[Pagination,Navigation]}
      spaceBetween={40}
      slidePerView={1}
      pagination={{clickable: true}}>
        {
          data.map(({image,topic,link,about},index)=>{
            return(
              <SwiperSlide key={index} className="achivement">
                <div className="image">
                  <img src={image} alt=""/>
                </div>
                <div className="text">
                  <h5 className="topic">{topic}</h5>
                  <small className="about">{about}</small>
                </div>
                <div className='link'>
                  <a href={link} className='btn' target='_blank'>Check</a>
                </div>
              </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Achievements