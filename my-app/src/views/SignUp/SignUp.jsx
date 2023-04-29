import React from "react";
import { useForm } from "react-hook-form";
import {Box, Button, Typography } from '@mui/material';
// import * as yup from 'yup'
import { string, object, ref, date } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { RadioBtn, TextFields, SnackbarMsg } from "./components";

const elements ={
  firstName:{name: 'firstName', label: 'First Name'},
    lastName:{name: 'lastName', label: 'Last Name'},
    userName:{name: 'userName', label: 'Username'},
    Password:{name: 'Password', label: 'Password'},
    cnfPassword:{name: 'cnfPassword', label: 'Confirm Password'},
    // createdOn: {name: 'firstName', label: 'First Name'},
}

const validationSchema = object().shape({
    [elements.firstName.name]:string().required('required'),
    [elements.lastName.name]:string().required('required'),
    [elements.userName.name]:string().required('required'),
    [elements.Password.name]:string().required('required'),
    [elements.cnfPassword.name]:string().oneOf([ref('Password'), 'password must be same']),
    // [elements.createdOn]: string().default('jjjj'),
    sex:string().required('required'),
})

console.log(validationSchema);

const SignUp = () => {
    const [open, setOpen] = React.useState(false);

    const { register, handleSubmit, formState: { errors }, reset , getValues} = useForm({
        resolver: yupResolver(validationSchema),
    });

    const handleClick = () => {
        setOpen(s => !s);
      };

    const handleRegister = (data) => {
       console.log(data)
       setOpen(s => !s);
       reset()
    }

    const alignItems ={
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }

   return (
    <Box
    style={{
     backgroundColor:'lightBlue',
     ...alignItems,
    }}
    >
      <div
      style={{width:'30%'}}>
      <Typography variant="h6"
       style={{
      padding:'8px',
      textAlign:'center',
       }}>
            User Registrations
        </Typography>
        <form onSubmit={handleSubmit(handleRegister)}  style={{
      display:'grid',
       }}>
      <TextFields register={register} errors={errors} elements={elements}/>
       <RadioBtn register={register} />
      <Button type="submit" style={{ marginTop: '12px'}}>Register</Button>
        </form>
      </div>
      <SnackbarMsg open={open} onSnackbarClick={handleClick} />
    </Box>
   )
}

export default SignUp;