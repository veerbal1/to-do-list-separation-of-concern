import React from 'react';

const useTasks = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      name: 'Task 1',
      description: 'Description 1',
      status: 'Done',
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Description 2',
      status: 'Done',
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'Description 3',
      status: 'Pending',
    },
  ]);
  
  return {
    tasks,
  };
};

export default useTasks;
