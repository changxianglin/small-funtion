import React, { Component } from 'react'
import { connect } from 'react-redux'

class Bar extends Component {
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.bar.content
  }
}

export default connect(mapStateToProps, null)(Bar)