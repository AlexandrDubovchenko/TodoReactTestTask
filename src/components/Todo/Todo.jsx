import React from 'react';
import {TodoHeader} from './TodoHeader/TodoHeader';
import {TodoList} from './TodoList/TodoList';
import {Comments} from '../Comments/Comments';
import './Todo.css'

export const Todo = () => {
  return (
    <div className='todo_wrapper'>
      <div className='todo_card'>
        <TodoHeader />
        <TodoList />
      </div>
      <Comments />
    </div>

  );
}

