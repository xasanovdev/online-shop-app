import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { CustomContext } from '../../../utils/context';

export default function SelectPrice() {
  const { state, dispatch } = useContext(CustomContext);

  const changeHandler = (e) => {
    dispatch({
      type: 'changePrice',
      payload: { page: 1, price: e.target.value },
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.catalog.price}
          label="Age"
          onChange={changeHandler}
        >
          <MenuItem value={'asc'}>asc</MenuItem>
          <MenuItem value={'desc'}>desc</MenuItem>
          <MenuItem value={''}>Remove</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
