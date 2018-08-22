import React, { Component } from 'react'
import classnames from 'classnames'

class Indicator extends Component {
  render() {
    const {indicatorClassName, className, indicatorClick} = this.props
    return (
      <li className={classnames('rain-indicator__item', className)}
      onClick={indicatorClick}
      >
        <a className={classnames(indicatorClassName)}> </a>
      </li>
    )
  }
}

export default Indicator
