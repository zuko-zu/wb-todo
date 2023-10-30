import { useState } from 'react';

import { Box, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

function NewTask({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const addTask = (value) => {
    onAddTask(value);
    setInputValue('');
  };

  return (
    <Box mb={4}>
      <TextField
        autoFocus
        multiline
        variant="standard"
        value={inputValue}
        label="Имя новой задачи"
        sx={{ width: '100%' }}
        inputProps={{ maxLength: 700 }}
        InputProps={{
          endAdornment: (
            <IconButton
              size="small"
              onClick={() => addTask(inputValue)}
              sx={{ alignSelf: 'flex-start' }}>
              <AddIcon sx={{ color: 'rgba(33, 150, 243, 0.5)' }} />
            </IconButton>
          ),
        }}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            addTask(inputValue);
          }
        }}
      />
    </Box>
  );
}

export default NewTask;
