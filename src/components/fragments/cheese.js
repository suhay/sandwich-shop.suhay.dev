import React from 'react'

import cheese from '../../../assets/img/cheese.svg'

const Cheese = ({
  width, rotate, left, bottom, right, top, 
}) => {
  const style = {
    width: `${width}px`,
    transform: `rotate(${rotate}deg)`,
    position: 'absolute',
  }

  if (left) {
    style.left = `${left}px`
  }

  if (bottom) {
    style.bottom = `${bottom}px`
  }

  if (right) {
    style.right = `${right}px`
  }

  if (top) {
    style.top = `${top}px`
  }

  return (
    <img src={cheese} style={style} alt="" />
  )
}

export default Cheese
