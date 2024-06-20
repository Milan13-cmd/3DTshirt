import React from 'react'
import { SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors= {[
          '#DAEFB3',
          '#EA9E8D',
          '#1C2826',
          '#F7DC6F',
          '#464D77',
          '#C0C0C0',
          '#7DCD85',
          '#B56B45',
          '#B22222',
          '#5D8AA8'
        ]}
        onChange={(color) => state.color = color.hex}
      />
      </div>
  )
}

export default ColorPicker