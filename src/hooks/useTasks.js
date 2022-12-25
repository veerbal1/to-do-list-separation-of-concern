import React from 'react';

const useTasks = () => {
  const [tasks, setTasks] = React.useState([]);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
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

  return {
    tasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
