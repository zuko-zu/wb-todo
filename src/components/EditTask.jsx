import { useState } from 'react';

import { Box, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';

function EditTask({ task, finishEditing, editingTodo }) {
  const [inputValue, setInputValue] = useState(task.text);

  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        multiline
        variant="standard"
        value={inputValue}
        label="Имя новой задачи"
        autoFocus
        sx={{ width: '100%' }}
        inputProps={{ maxLength: 700 }}
        InputProps={{
          endAdornment: (
            <IconButton
              size="small"
              color="primary"
              sx={{ alignSelf: 'start' }}
              onClick={() => finishEditing(inputValue.trim(), editingTodo)}>
              <CheckIcon />
            </IconButton>
          ),
        }}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            finishEditing(inputValue, editingTodo);
          }
        }}
      />
    </Box>
  );
}

export default EditTask;
