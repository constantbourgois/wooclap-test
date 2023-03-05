import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function BasicSelect() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={'Presentation 1'}
          className="fileselect"
          inputProps={{
            name: 'file name',
            id: 'uncontrolled-native',
          }}
        >
          <option value={'Presentation 1'}>Presentation 1</option>
          <option value={'Presentation 1'}>Presentation 2</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}