import {useContext} from 'react';

import {ToDoContext} from '../contexts/ToDoContext';

const useToDo = () => useContext(ToDoContext);

export default useToDo;
