import { useState } from 'react';
import Card from '@mui/material/Card';
import { Typography, Box } from '@mui/material';
import Container from '@mui/material/Container';

import TaskList from './components/TaskList';
import NewTask from './components/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [maxId, setMaxId] = useState(0);

  const onAddTask = (task) => {
    if (!task.trim()) return;
    const newTask = [...tasks, { id: maxId, text: task, completed: false }];
    setMaxId(maxId + 1);
    setTasks(newTask);
  };

  const onDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const onEditTask = (newTask, taskId) => {
    if (!newTask) return;
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.text = newTask;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const onToggleTaskStatus = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }

      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Card>
          <Box p={5}>
            <Typography
              variant="h4"
              component={'h1'}
              mb={3}
              sx={{ color: '#42A5F5' }}>
              TODO
            </Typography>
            <NewTask onAddTask={onAddTask} />
            <TaskList
              tasks={tasks}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
              onToggleTaskStatus={onToggleTaskStatus}
            />
          </Box>
        </Card>
      </Container>
    </div>
  );
}

export default App;
