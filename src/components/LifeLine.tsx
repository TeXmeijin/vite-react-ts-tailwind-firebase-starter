import React from 'react'
import { Size } from './Box'

export const LifeLineDefaultSize: Size = {
  w: 240,
  h: 60,
}

export const LifeLine = (props: { title: string; color: 'primary' | 'accent' }) => {
  const colorClass = `${props.color === 'primary' ? 'bg-blue-500' : 'bg-yellow-400'}`

  return (
    <div
      className={
        colorClass + ' ' + 'text-white font-bold text-lg py-4 px-6 w-full h-full text-center rounded-full shadow-2xl'
      }
    >
      {props.title}
    </div>
  )
}
