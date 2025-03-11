import {useState} from 'react';
import styled, {css} from 'styled-components';

import {TasksType} from '../../contexts/ToDoContext';
import em from '../../styles/utils/em';
import Button from '../form/Button';
import Task from './Task';

const FILTERS = ['All', 'Active', 'Completed'] as const;

const FlexContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: ${em(16)};
`;
const FilterButton = styled(Button)<{$isActive: boolean}>`
   flex: 1 1 33.333%;
   font-size: ${em(16)};
   ${props =>
      !props.$isActive &&
      css`
         background-color: ${props => props.theme.palette.background.light[1]};
      `}
`;
const Tasks = styled.ul`
   display: flex;
   flex-direction: column;
   gap: ${em(8)};
   padding: ${em(16)} 0;
`;
const SmallItemStyles = css`
   font-size: ${em(16)};
   color: ${props => props.theme.palette.text.dark[0]};
`;
const SmallText = styled.p`
   ${SmallItemStyles}
`;
const SmallButton = styled.button`
   ${SmallItemStyles}
`;

interface TaskListProps {
   tasks: TasksType;
   checkTask: (id: string) => void;
}
const TaskList = ({tasks, checkTask}: TaskListProps) => {
   const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');
   const filteredTasks = [...tasks.values()].reverse().filter(task => {
      if (filter === 'Active' && task.isDone) return false;
      if (filter === 'Completed' && !task.isDone) return false;
      return true;
   });

   const taskLeft = filteredTasks.filter(task => !task.isDone).length;
   const clearCompleted = () => {
      tasks.forEach((task, id) => {
         if (task.isDone) tasks.delete(id);
      });
   };

   return (
      <>
         <FlexContainer>
            {FILTERS.map(item => (
               <FilterButton
                  key={item}
                  onClick={() => setFilter(item)}
                  $isActive={filter === item}
               >
                  {item}
               </FilterButton>
            ))}
         </FlexContainer>
         <Tasks>
            {filteredTasks.length ? (
               filteredTasks.map(task => (
                  <Task key={task.id} {...task} toggleTask={checkTask} />
               ))
            ) : (
               <SmallText>No Tasks Left</SmallText>
            )}
         </Tasks>
         <FlexContainer>
            <SmallText>{taskLeft} Items Left</SmallText>
            <SmallButton type='button' onClick={clearCompleted}>
               Clear completed
            </SmallButton>
         </FlexContainer>
      </>
   );
};
export default TaskList;
