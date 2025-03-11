import {fireEvent, render, screen} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';

import Form from '../components/todo/Form';
import {TasksType} from '../contexts/ToDoContext';
import theme from '../styles/theme/theme';

test('adds a new task when form is submitted', () => {
   const tasks: TasksType = new Map();
   const {container} = render(
      <ThemeProvider theme={theme}>
         <Form tasks={tasks} />
      </ThemeProvider>,
   );

   const input = screen.getByPlaceholderText(/Enter task/i);
   const form = container.querySelector('form')!;

   fireEvent.change(input, {target: {value: 'New Task'}});
   fireEvent.submit(form);

   expect(tasks.size).toBe(1);
   expect([...tasks.values()][0].title).toBe('New Task');
});
