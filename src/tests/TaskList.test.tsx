import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';

import TaskList from '../components/todo/TaskList';
import theme from '../styles/theme/theme';

const tasks = new Map([
   ['1', {id: '1', title: 'Task 1', isDone: false}],
   ['2', {id: '2', title: 'Task 2', isDone: true}],
]);

test('filters tasks correctly', () => {
   render(
      <ThemeProvider theme={theme}>
         <TaskList
            tasks={tasks}
            checkTask={id => console.log(`Task ${id} checked`)}
         />
      </ThemeProvider>,
   );

   // Проверяем, что сначала видны обе задачи
   expect(screen.getByText('Task 1')).toBeInTheDocument();
   expect(screen.getByText('Task 2')).toBeInTheDocument();

   // Кликаем "Active"
   fireEvent.click(screen.getByText('Active'));
   expect(screen.getByText('Task 1')).toBeInTheDocument();
   expect(screen.queryByText('Task 2')).not.toBeInTheDocument();

   // Кликаем "Completed"
   fireEvent.click(screen.getByText('Completed'));
   expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
   expect(screen.getByText('Task 2')).toBeInTheDocument();
});
