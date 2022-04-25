import type {TItem} from './Todo_types';

import {todoListState} from './Todo_state';
import React from 'react';
import {useRecoilState} from 'recoil';

export const TodoItem = ({item, index}: {item: TItem; index: number}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemText = ({
    target: {value},
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    console.log('aa');

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

function replaceItemAtIndex(arr: TItem[], index: number, newValue: TItem) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: TItem[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
