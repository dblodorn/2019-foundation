import React from 'react'
import { connect } from 'react-redux'

const Header = props => {
  if (props.resizeState.window_width >= props.resizeState.breakpoints.desktop) {
    return <div>HEADER DESKTOP</div>
  } else {
    return <div>HEADER MOBILE</div>
  }
}

export default connect(
  state => ({
    resizeState: state.resizeState
  })
)(Header)