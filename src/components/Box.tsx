import React from 'react'

export type Point = { x: number; y: number }
export type Size = { w: number; h: number }
export type BoxProps = Point & Size

export const Box: React.FC<BoxProps> = ({ x, y, w, h, children }) => {
  return (
    <div
      className="absolute"
      style={{
        top: `${y}px`,
        left: `${x}px`,
        width: `${w}px`,
        height: `${h}px`,
      }}
    >
      {children}
    </div>
  )
}
