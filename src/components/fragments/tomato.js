import React from 'react'

import tomato from '../../../assets/img/tomato.svg'

const Tomato = ({
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
    <img src={tomato} style={style} alt="" />
  )
}

export default Tomato
