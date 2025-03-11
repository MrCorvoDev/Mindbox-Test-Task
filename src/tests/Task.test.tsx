import {fireEvent, render, screen} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';

import Task from '../components/todo/Task';
import theme from '../styles/theme/theme';

test('toggles task status', () => {
   const toggleTask = jest.fn();
   render(
      <ThemeProvider theme={theme}>
         <Task
            id='1'
            title='Test Task'
            isDone={false}
            toggleTask={toggleTask}
         />
      </ThemeProvider>,
   );

   const checkbox = screen.getByRole('checkbox');
   fireEvent.click(checkbox);

   expect(toggleTask).toHaveBeenCalledWith('1');
});
