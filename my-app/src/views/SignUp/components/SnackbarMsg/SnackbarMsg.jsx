import React from "react";
import {Snackbar } from '@mui/material';

const SnackbarMsg = ({open, onSnackbarClick}) => {

   return (
    <Snackbar
    open={open}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    autoHideDuration={6000}
    onClose={onSnackbarClick}
    message="User registration has been successfully registered"
  />
   )
}

export default SnackbarMsg;