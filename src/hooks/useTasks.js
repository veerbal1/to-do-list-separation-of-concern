import React from 'react';

const useTasks = () => {
  const [tasks, setTasks] = React.useState([]);
  console.log(tasks);
  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return updatedTask;
        }
        return task;
      })
    );
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === 'complete' ? 'pending' : 'complete',
          };
        }
        return task;
      })
    );
  };

  return {
    tasks,
    createTask,
    updateTask,
    deleteTask,
    toggleComplete,
  };
};

export default useTasks;
