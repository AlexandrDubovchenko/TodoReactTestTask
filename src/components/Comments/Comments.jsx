import React from 'react';
import { useRecoilValue } from 'recoil';
import { checkedItemState } from '../../recoil';
import {CommentsList} from './CommentsList/CommentsList';
import {CommentsCreator} from './CommentsCreator/CommentsCreator';

export const Comments = () => {
  const item = useRecoilValue(checkedItemState);
  if (!item) {
    return <div></div>
  }
  return (
    <div className='todo_card'>
      <header>
        <h2>Comments #{item.id}</h2>
      </header>
      <CommentsList list = {item.comments} />
      <CommentsCreator />
    </div>

  );
}