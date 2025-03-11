import {createContext, PropsWithChildren} from 'react';

import useMap from '../hooks/useMap';

export interface TaskType {
   id: string;
   title: string;
   isDone: boolean;
}
export type TasksType = Map<string, TaskType>;

interface ToDoContextType {
   tasks: TasksType;
   toggleTask: (id: string) => void;
}
export const ToDoContext = createContext({} as ToDoContextType);

const DEFAULT_TASKS: [string, TaskType][] = [
   ['1', {id: '1', title: 'Big dream', isDone: false}],
   ['2', {id: '2', title: 'Become a millionaire', isDone: false}],
   ['3', {id: '3', title: 'Create TODO APP', isDone: true}],
];

const ToDoProvider = ({children}: PropsWithChildren) => {
   const tasks = useMap<string, TaskType>(DEFAULT_TASKS);
   const toggleTask = (id: string) => {
      const task = tasks.get(id);
      if (!task) return;

      tasks.set(id, {...task, isDone: !task.isDone});
   };

   return (
      <ToDoContext.Provider value={{tasks, toggleTask}}>
         {children}
      </ToDoContext.Provider>
   );
};

export default ToDoProvider;
