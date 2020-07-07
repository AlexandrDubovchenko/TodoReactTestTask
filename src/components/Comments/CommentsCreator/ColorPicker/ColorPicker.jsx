import React, { useState } from 'react';
import { colorPickerState } from '../../../../recoil';
import { SketchPicker } from 'react-color';
import { useRecoilState } from 'recoil';
import './ColorPicker.css'

export const ColorPicker = () => {
  const [isChanging, toogleIsChanging] = useState(false);
  const [color, changeColor] = useRecoilState(colorPickerState);
  const [currentColor, changeCurrentColor] = useState(color);
  const handleChangeComplete = (color) => {
    changeColor(color.hex);
  }
  const handleOnChange = (color) => {
    changeCurrentColor(color.hex);
  }
  return (
    <div>
      {isChanging &&
        <div className='colorPicker'>
          <SketchPicker color={currentColor} onChangeComplete={handleChangeComplete} onChange={handleOnChange} />
          <button onClick={() => toogleIsChanging(false)} type='button'>OK</button>
        </div>
      }
      <div onClick={() => toogleIsChanging(true)} style={{ height: "40px", width: "40px", backgroundColor: color }}></div>
    </div>
  );
}
