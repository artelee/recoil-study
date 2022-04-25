import React from 'react';
import './App.css';
import {RecoilRoot} from 'recoil';
import {TodoList} from './components/Todo/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className="todo-container">
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
