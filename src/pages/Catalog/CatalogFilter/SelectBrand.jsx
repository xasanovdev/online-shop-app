import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { CustomContext } from '../../../utils/context';

export default function SelectBrand() {
  const { state, dispatch } = useContext(CustomContext);

  const handleChange = (event) => {
    dispatch({
      type: 'changeBrand',
      payload: {brand: event.target.value },
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.catalog.brand}
          label="Brand"
          onChange={handleChange}
        >
          {state.catalog.brands.data && state.catalog.brands.data.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
          <MenuItem value="">Remove</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
