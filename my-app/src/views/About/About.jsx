import React , {useState, useRef}from "react";
import {Button, TextField} from '@mui/material';

const About = () => {

    const alignItems ={
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }

    const elements ={
        firstName:{name: 'firstName', label: 'First Name'},
          lastName:{name: 'lastName', label: 'Last Name'},
          userName:{name: 'userName', label: 'Username'},
          password:{name: 'password', label: 'Password'},
          cnfPassword:{name: 'cnfPassword', label: 'Confirm Password'},
      }

      const [state, setState] = useState(elements)
      const [showText, setShowText] = useState({})

      const textRef = useRef([])
      
      const handleBtn = (index)=> {
        textRef.current[index].focus();
      }

      const handleReset = ()=> {
        setShowText({})
      }

      const handleChange = e => {
        setShowText(p => {
            return {
                ...p,
                [e.target.name] :e.target.value}
        })
      }

    return <div style={alignItems}>
    {Object.keys(state).map((v,i)=>{
      const name = state[v].name;
     return <React.Fragment key={v}>
     <Button onClick={() => handleBtn(i)}>{name}</Button>
     <TextField label={state[v].label} value={showText?.[v] ?? ''} onChange={(e)=>handleChange(e)} name={name} inputRef={(element) => {textRef.current[i] = element}} 
/>
     </React.Fragment >
   })}
    <Button onClick={handleReset}>Reset</Button>
   </div>
  }

 export default About;