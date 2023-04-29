import React from "react";
import {TextField} from '@mui/material';

const TextFields = ({register, elements, errors}) => {
  return <>
  {Object.keys(elements).map(v=>{
    const name = elements[v].name;
    console.log(name);
   return <React.Fragment key={v}>
    <TextField label={elements[v].label} variant="standard" {...register(elements[v].name)}
    type={(name === "password" || name === 'cnfPassword') ? "password" : null}
    />
     {errors[elements[v].name] && <span style={{color:'red'}}>{errors[elements[v].name].message}</span>}
   </React.Fragment >
 })}
 </>
}

export default TextFields;