import React from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { todoListState, checkedItemState, checkedItemIdState } from '../../../../recoil';
import './TodoItem.css'

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const checkedId = useRecoilValue(checkedItemState).id;
  const index = todoList.findIndex((listItem) => listItem.id === item.id);
  const checkItem = useSetRecoilState(checkedItemIdState);
  const deleteItem = (e) => {
    e.stopPropagation();
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div style={item.id === checkedId ? { borderLeft: '4px solid palevioletred' } : {}} className='todo_item' onClick={() => checkItem(() => item.id)}>
      <p>
        {item.text}
      </p>
      <div className='todo_item_controls'>
        <p>{item.comments.length}</p>
        <button onClick={deleteItem}>Delete</button>
      </div>

    </div>
  );
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
