import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import {Box, Button, Typography, TextField, Snackbar} from '@mui/material';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = yup.object().shape({
    firstName:yup.string().required('required'),
    lastName:yup.string().required('required'),
    userName:yup.string().required('required'),
    Password:yup.string().required('required'),
    cnfPassword:yup.string().oneOf([yup.ref('Password'), 'password must be same']),
})

const SignUp = () => {
    const [open, setOpen] = React.useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
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

   return (
    <Box
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    >
        <Typography variant="h6">
            User Registrations
        </Typography>
        <form onSubmit={handleSubmit(handleRegister)}>
      <TextField label="First Name" variant="standard" {...register('firstName')} />
      {errors.firstName && <span>{errors.firstName.message}</span>}
      <TextField label="Last Name" variant="standard"  {...register('lastName')} />
      {errors.lastName && <span>{errors.lastName.message}</span>}
      <TextField label="Username" variant="standard" {...register('userName')} />
      {errors.userName && <span>{errors.userName.message}</span>}
      <TextField type="password" label="Password" variant="standard" {...register('Password')} />
      {errors.Password && <span>{errors.Password.message}</span>}
      <TextField type="cnfPassword" label="Confirm Password" variant="standard" {...register('cnfPassword')} />
      {errors.cnfPassword && <span>{errors.cnfPassword.message}</span>}
      <Button type="submit" style={{ marginTop: '12px'}}>Register</Button>
        </form>
        <Snackbar
  open={open}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }}
  autoHideDuration={6000}
  onClose={handleClick}
  message="User registration has been successfully registered"
/>
    </Box>
   )
}

export default SignUp;