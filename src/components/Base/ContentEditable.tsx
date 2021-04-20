import React, {EventHandler, useRef} from 'react'
import useDimensions from 'react-cool-dimensions'

const ContentEditable: React.VFC<{
  value: string
  onChange: (arg: string) => any,
  onBlur: EventHandler<React.FocusEvent<HTMLDivElement>>,
  onResize: (arg: {width: number, height: number}) => void,
}> = ({value, onChange, onBlur, onResize}) => {
  const defaultValue = useRef(value)

  const { ref, width, height, entry, unobserve, observe } = useDimensions({
    onResize: ({ width, height, entry, unobserve, observe }) => {
      onResize({width, height})
    },
  });

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    // @ts-ignore
    onChange(e.target.innerHTML)
  }

  return (
    <div
      // @ts-ignore
      ref={ref}
      contentEditable
      onInput={handleInput}
      onBlur={onBlur}
      dangerouslySetInnerHTML={{__html: defaultValue.current}}
      className='rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
    />
  )
}

export default ContentEditable
