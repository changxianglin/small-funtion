import React from 'react';
import Swiper from 'react-id-swiper';
 
const SimpleSwiper = (props) => (
  <Swiper {...props.params}>
    {
      props.data.map((item, index) => {
        return <div key = {index}><img src = {item.image} alt = {item.title} /></div>
      })
    }
  </Swiper>
)
 
export default SimpleSwiper;