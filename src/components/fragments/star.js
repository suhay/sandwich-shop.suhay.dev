import React from 'react'

import star from '../../../assets/img/star.svg'

const Star = ({
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
    <img src={star} style={style} alt="" />
  )
}

export default Star
