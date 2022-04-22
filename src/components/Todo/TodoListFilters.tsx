import {todoListFilterState} from './Todo_state';
import React from 'react';
import {useRecoilState} from 'recoil';

export const TodoListFilters = (): JSX.Element => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: {value},
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={() => updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
