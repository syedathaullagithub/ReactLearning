import React from "react";
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';

const RadioBtn = ({register}) => {

   return (
      <FormControl style={{
          marginTop:'16px'
        }}>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" {...register('sex')} />
        <FormControlLabel value="male" control={<Radio />} label="Male" {...register('sex')} />
        <FormControlLabel value="other" control={<Radio />} label="Other" {...register('sex')} />
      </RadioGroup>
    </FormControl>  
   )
}

export default RadioBtn;