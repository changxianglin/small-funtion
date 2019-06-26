import React, { Component } from 'react'
import SimpleSwiper from '../Swiper'
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import axios from 'axios'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        'page1', 
        'page2', 
        'page3',
        'page4'
      ],
      params: {
        
      }
    }
  }
  render() {
    return (
      <div>
        <SimpleSwiper data = {this.state.data} params = { this.state.params} />
      </div>
    )
  }

  componentDidMount () {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
    axios.get('/api/swiper.json').then((res) => {
      this.setState({
        data: res.data,
        params
      })
    }).catch(err => {
      console.error(err)
    })
  }
}
