import React, { useState } from 'react';
import { todoListState, checkedItemState, colorPickerState } from '../../../recoil';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {ColorPicker} from './ColorPicker/ColorPicker';
import './CommentsCreator.css'

export const CommentsCreator = ({ list }) => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const id = useRecoilValue(checkedItemState).id;
  const color = useRecoilValue(colorPickerState);
  const addComment = () => {
    setTodoList((oldTodoList) =>
      oldTodoList.map((item) =>
        item.id === id ? { ...item, comments: [...item.comments, { value: inputValue, color }] } : item));
    setInputValue('');
  };
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className='comments_creator'>
      <ColorPicker />
      <textarea placeholder='Type comment here...' type="text" value={inputValue} onChange={onChange} />
      <button className='add_comment_btn' onClick={addComment}>Add New</button>
    </div>
  );
}

