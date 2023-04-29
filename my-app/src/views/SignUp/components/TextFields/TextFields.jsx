import React from "react";
import {TextField} from '@mui/material';

const TextFields = ({register, elements, errors}) => {
  return <>
  {Object.keys(elements).map(v=>{
   return <>
    <TextField label={elements[v].label} variant="standard" {...register(elements[v].name)} />
     {errors[elements[v].name] && <span>{errors[elements[v].name].message}</span>}
   </>
 })}
 </>
}

export default TextFields;