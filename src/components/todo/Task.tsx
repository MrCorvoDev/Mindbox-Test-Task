import styled from 'styled-components';

import em from '../../styles/utils/em';

const TaskEl = styled.label`
   display: flex;
   align-items: center;
   gap: ${em(16)};
   background: ${props => props.theme.palette.background.light[1]};
   padding: ${em(16)} ${em(24)};
   border-radius: ${em(8)};
   cursor: pointer;
`;
const Check = styled.span`
   position: relative;
   width: ${em(24)};
   height: ${em(24)};
   background: ${props => props.theme.palette.background.light[2]};
   border: ${em(2)} solid ${props => props.theme.palette.background.light[3]};
   border-radius: 50%;
   input {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
   }
   span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: ${em(12)};
      height: ${em(12)};
      background: ${props => props.theme.palette.primary.color};
      border-radius: 50%;
      transition: 0.3s;
      pointer-events: none;
   }
   input:checked + span {
      transform: translate(-50%, -50%) scale(1);
   }
`;
const Title = styled.p`
   font-size: ${em(22)};
`;

interface TaskProps {
   id: string;
   title: string;
   isDone: boolean;
   toggleTask: (id: string) => void;
}
const Task = ({id, title, isDone, toggleTask}: TaskProps) => (
   <TaskEl>
      <Check>
         <input
            type='checkbox'
            checked={isDone}
            onChange={() => toggleTask(id)}
         />
         <span></span>
      </Check>
      <Title>{title}</Title>
   </TaskEl>
);
export default Task;
