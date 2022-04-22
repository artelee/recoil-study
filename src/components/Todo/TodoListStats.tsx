import {todoListStatsState} from './Todo_state';
import {useRecoilValue} from 'recoil';

export const TodoListStats = (): JSX.Element => {
  const {totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted} =
    useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted);
  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
};
