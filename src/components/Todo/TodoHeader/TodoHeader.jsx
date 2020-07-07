import React, { useState, useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../../recoil';
import './TodoHeader.css'

export const TodoHeader = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const button = useRef(null)
  const addItem = (e) => {
    e.preventDefault();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        comments: [],
      },
    ]);
    setInputValue('');
  };
  const keydownHandler = (e) => {
    if (e.keyCode === 13 && e.ctrlKey) button.current.click(e);
  }
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
  }, [])

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <header className='todo_header'>
      <h2>Items</h2>
      <form onSubmit={addItem}>
        <input required placeholder='Type name here...' className='add_item_input' type="text" value={inputValue} onChange={onChange} />
        <button ref={button} className='add_item_btn'>Add New</button>
      </form>
    </header>
  );
}

function getId() {
  return Date.now();
}
