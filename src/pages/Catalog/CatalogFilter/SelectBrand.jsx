import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { CustomContext } from '../../../utils/context';

export default function SelectBrand() {
  const { brand, brands, setBrand, setPage } = useContext(CustomContext);

  const handleChange = (event) => {
    setBrand(event.target.value);
    setPage(1);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brand}
          label="Brand"
          onChange={handleChange}
        >
          {brands.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
          <MenuItem value=''>Remove</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
