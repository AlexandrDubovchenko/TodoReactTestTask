import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import {TodoItem} from './TodoItem/TodoItem';
import { todoListState } from '../../../recoil';
import './TodoList.css';

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList])
  return (
    <div className='todo_list'>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
