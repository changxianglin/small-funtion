import React, { Component } from 'react'
import { connect } from 'react-redux'
import { homeActions } from './store'

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
  componentDidMount() {
    this.props.initalLoad()
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.home.title,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initalLoad() {
      dispatch(homeActions.getList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)