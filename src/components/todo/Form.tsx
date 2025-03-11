import {useState} from 'react';
import styled from 'styled-components';

import {TaskType} from '../../contexts/ToDoContext';
import Input from '../form/Input';

const FormEl = styled.form`
   margin: 0 auto;
   width: 100%;
`;

interface FormProps {
   tasks: Map<string, TaskType>;
}
const Form = ({tasks}: FormProps) => {
   const [input, setInput] = useState('');

   return (
      <FormEl
         onSubmit={e => {
            e.preventDefault();

            const id = crypto.randomUUID();
            tasks.set(id, {id, title: input, isDone: false});

            setInput('');
         }}
      >
         <Input
            name='task'
            placeholder='Enter task'
            value={input}
            onChange={e => setInput(e.target.value)}
            forceNoReactHookForm={true}
         />
      </FormEl>
   );
};
export default Form;
