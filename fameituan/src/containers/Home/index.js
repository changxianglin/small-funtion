import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.home.title,
  }
}

export default connect(mapStateToProps, null)(Home)