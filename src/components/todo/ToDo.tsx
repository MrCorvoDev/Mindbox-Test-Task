import styled from 'styled-components';

import ToDoProvider from '../../contexts/ToDoContext';
import useToDo from '../../hooks/useToDo';
import em from '../../styles/utils/em';
import Form from './Form';
import TaskList from './TaskList';

const Box = styled.div`
   display: flex;
   flex-direction: column;
   gap: ${em(24)};
   padding: ${em(24)} ${em(16)};
   border-radius: ${em(8)};
   background-color: ${props => props.theme.palette.background.light[0]};
   max-width: ${em(600)};
   margin: 0 auto;
   text-align: center;
`;
const Title = styled.h1`
   font-size: ${em(32)};
   font-weight: 700;
`;

const ToDoComponent = () => {
   const {tasks, toggleTask} = useToDo();
   return (
      <Box>
         <Title>TODO Test Task</Title>
         <Form tasks={tasks} />
         <TaskList tasks={tasks} checkTask={toggleTask} />
      </Box>
   );
};

const ToDo = () => (
   <ToDoProvider>
      <ToDoComponent />
   </ToDoProvider>
);
export default ToDo;
