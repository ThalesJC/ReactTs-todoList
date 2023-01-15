import { useState } from 'react';
import MyContext from './myContext';
import IContext from '../Interfaces/IContext';

function Provider({ children }: IContext) {
  const [task, setTask] = useState<string[]>([]);

  const addTask = (text: string) => {
    setTask([...task, text]);
  }

  const deleteATask = (target: unknown) => {
    const remainTasks = task.filter(task => task !== target);
    setTask(remainTasks);
  }

  const cleanTasks = () => {
    setTask([]);
  }

  return (
    <MyContext.Provider value={ { task, addTask, cleanTasks, deleteATask } }>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;