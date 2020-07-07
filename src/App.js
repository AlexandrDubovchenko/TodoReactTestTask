import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import {Todo} from './components/Todo/Todo';

function App() {
  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  );
}

export default App;
