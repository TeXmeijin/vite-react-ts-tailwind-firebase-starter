import React from 'react'
import '../styles/arrow.css'

export const Arrow: React.VFC<{ left?: boolean }> = ({ left }) => {
  return <div className={'arrow' + ' ' + (left ? 'left' : '')} />
}
