import React from 'react';
import './CommentsList.css'

export const CommentsList = ({ list }) => {
  return (
      <ul className='comments_list'>
        {list.map((item, id) => <li key={id}>
          <div style={{marginRight: '5px', backgroundColor: item.color, width: '30px', height: '30px'}}></div>
          {item.value}
        </li>)}
      </ul>
  );
}
