import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
// import * as yup from 'yup'
import { string, object, ref, date } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RadioBtn, TextFields, SnackbarMsg } from "./components";

const elements = {
  firstName: { name: "firstName", label: "First Name" },
  lastName: { name: "lastName", label: "Last Name" },
  userName: { name: "userName", label: "Username (E-mail)" },
  password: { name: "password", label: "Password" },
  cnfPassword: { name: "cnfPassword", label: "Confirm Password" },
  // createdOn: {name: 'firstName', label: 'First Name'},
};

const validationSchema = object().shape({
  // [elements.firstName.name]:string().lowercase().strict().matches(/^[a-z]+$/, { excludeEmptyString: true, message:'only alphabets' }).required('required'),
  [elements.firstName.name]: string()
    .test(
      "MyTestName",
      "first name and last name should not be equal",
      (firstName, obj) => {
        if (firstName !== obj.parent?.lastName) {
          return true;
        }
        return false;
      }
    )
    .required("required"),
  [elements.lastName.name]: string()
    .test(
      "MyTestName",
      "first name and last name should not be equal",
      (lastName, obj) => {
        if (lastName !== obj.parent?.firstName) {
          return true;
        }
        return false;
      }
    )
    .required("required"),
  [elements.userName.name]: string().email().required("required"),
  [elements.password.name]: string().length(8).required("required"),
  [elements.cnfPassword.name]: string()
    .required("required")
    .oneOf([ref("password"), null, "password must be same"]),
  // [elements.createdOn]: string().default('jjjj'),
  sex: string().required("required").nullable(),
});

console.log(validationSchema);

const SignUp = () => {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleClick = () => {
    setOpen((s) => !s);
  };

  const handleRegister = (data) => {
    console.log(data);
    setOpen((s) => !s);
    reset();
  };

  const alignItems = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box
      style={{
        ...alignItems,
      }}
    >
      <div style={{ width: "30%" }}>
        <Typography
          variant="h6"
          style={{
            padding: "8px",
            textAlign: "center",
          }}
        >
          Yup validation test
        </Typography>
        <form
          onSubmit={handleSubmit(handleRegister)}
          style={{
            display: "grid",
          }}
        >
          <TextFields register={register} errors={errors} elements={elements} />
          <RadioBtn register={register} errors={errors} />
          <Button type="submit" style={{ marginTop: "12px" }}>
            Register
          </Button>
        </form>
      </div>
      <SnackbarMsg open={open} onSnackbarClick={handleClick} />
    </Box>
  );
};

export default SignUp;
