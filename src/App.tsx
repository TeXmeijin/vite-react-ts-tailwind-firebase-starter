import React from 'react'
import { LifeLine, LifeLineDefaultSize } from './components/LifeLine'
import { Border } from './components/Border'
import { Box, BoxProps, Size } from './components/Box'
import { Execution } from './components/Execution'
import { Arrow } from './components/Arrow'

export const BottomCenterTo = (point: BoxProps, size: Size, margin: { top: number } = { top: 0 }): BoxProps => {
  return {
    x: point.x + point.w / 2 - size.w / 2,
    y: point.y + point.h + margin.top,
    ...size,
  }
}

function App() {
  const LifeLinePoint1: BoxProps = {
    x: 30,
    y: 20,
    ...LifeLineDefaultSize,
  }
  const LifeLinePoint2: BoxProps = {
    x: 430,
    y: 20,
    ...LifeLineDefaultSize,
  }
  const BorderPoint1 = BottomCenterTo(LifeLinePoint1, { w: 1, h: 600 })

  const ExecutionPoint1 = BottomCenterTo(LifeLinePoint1, { w: 28, h: 480 }, { top: 40 })
  const ExecutionPoint2 = BottomCenterTo(LifeLinePoint2, { w: 28, h: 280 }, { top: 140 })

  return (
    <div className="h-screen p-12 bg-yellow-100">
      <div className="h-full w-full relative">
        <Box {...LifeLinePoint1}>
          <LifeLine title="Client" color="primary" />
        </Box>
        <Box {...LifeLinePoint2}>
          <LifeLine title="Server" color="accent" />
        </Box>
        <Box {...BorderPoint1}>
          <Border />
        </Box>
        <Box {...BottomCenterTo(LifeLinePoint2, { w: 1, h: 600 })}>
          <Border />
        </Box>
        <Box {...ExecutionPoint1}>
          <Execution />
        </Box>
        <Box {...ExecutionPoint2}>
          <Execution />
        </Box>
        <Box {...{ x: BorderPoint1.x + 14, y: ExecutionPoint2.y, w: 400 - 14 * 2, h: 280, top: 40 }}>
          <Arrow />
        </Box>
        <Box
          {...{ x: BorderPoint1.x + 14, y: ExecutionPoint2.y + ExecutionPoint2.h, w: 400 - 14 * 2, h: 380, top: 40 }}
        >
          <Arrow left />
        </Box>
      </div>
    </div>
  )
}

export default App
