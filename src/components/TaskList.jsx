import { useState } from 'react';

import Task from './Task';
import EditTask from './EditTask';

import { Typography } from '@mui/material';

function TaskList({ tasks, onDeleteTask, onEditTask, onToggleTaskStatus }) {
  const [editingTodo, setEditingTodo] = useState(null);

  const getTodoTasks = (tasks) => {
    return tasks.filter((task) => task.completed === false);
  };

  const getDoneTasks = (tasks) => {
    return tasks.filter((task) => task.completed === true);
  };

  const editTask = (taskId) => {
    setEditingTodo(taskId);
  };

  const finishEditing = (inputValue, taskId) => {
    onEditTask(inputValue, taskId);
    setEditingTodo(null);
  };

  const renderTasks = (tasks) => {
    if (!tasks.length) return;
    return tasks.map((task) => {
      return editingTodo !== task.id ? (
        <Task
          task={task}
          key={task.id}
          editTask={editTask}
          onToggleTaskStatus={onToggleTaskStatus}
          onDeleteTask={onDeleteTask}
        />
      ) : (
        <EditTask
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          finishEditing={finishEditing}
          editingTodo={editingTodo}
        />
      );
    });
  };

  return (
    <>
      {getTodoTasks(tasks).length ? (
        <Typography
          variant="caption"
          component="h2"
          align="center"
          my={2}>
          План ({getTodoTasks(tasks).length})
        </Typography>
      ) : null}
      {getTodoTasks(tasks).length ? renderTasks(getTodoTasks(tasks)) : null}
      {getDoneTasks(tasks).length ? (
        <Typography
          variant="caption"
          component="h2"
          align="center"
          my={3}>
          Готово ({getDoneTasks(tasks).length})
        </Typography>
      ) : null}
      {getDoneTasks(tasks).length ? renderTasks(getDoneTasks(tasks)) : null}
    </>
  );
}

export default TaskList;
