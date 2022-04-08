import React from 'react'
import {RecoilRoot} from "recoil";
import CharacterCounter from "./CharacterCounter";
import {TodoList} from "./component/TodoList";

// 가장 상단에 RecoilRoot가 있어야한다.

function App() {
  return (
    <RecoilRoot>
      <TodoList/>
    </RecoilRoot>
  );
}

export default App;
