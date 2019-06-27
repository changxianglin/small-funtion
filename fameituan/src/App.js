import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}

export default connect(mapStateToProps, null)(App)