import { useState } from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

function Task({ task, editTask, onToggleTaskStatus, onDeleteTask }) {
  const [isChecked, setIsChecked] = useState(task.completed);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onToggleTaskStatus(task.id);
  };

  return (
    <FormGroup sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <FormControlLabel
          sx={{
            flexGrow: '1',
            overflowWrap: 'anywhere',
            display: 'flex',
            alignItems: 'flex-start',
          }}
          control={
            <Checkbox
              checked={isChecked}
              onChange={toggleCheckbox}
              sx={{ mt: -1 }}
            />
          }
          label={task.text}
        />

        {!task.completed ? (
          <IconButton
            size="small"
            color="info"
            onClick={() => editTask(task.id)}>
            <CreateIcon />
          </IconButton>
        ) : null}

        <IconButton
          size="small"
          color="warning"
          onClick={() => onDeleteTask(task.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </FormGroup>
  );
}

export default Task;
