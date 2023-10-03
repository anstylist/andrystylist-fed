'use client'

import React, { useContext, useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/UIMaterialTheme/ThemeProvider';
import "./SignUpForm.scss";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from 'next/navigation';
import * as AuthService from "@/services/AuthService";
import Loading from "../Loading/Loading";


const SignUpForm = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [signUpUser, setSignUpUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const { authData } = useContext(AuthContext);

  useEffect(() => {
    if (authData.token) {
      redirect('/');
    }
  })

  const handleChange = (event) => {
      const {name, value} = event.target
      setSignUpUser((prev) => ({ 
        ...prev,
        [name]: value 
      }))
  }

  const handleChangeUsername = (event) => {
    const { value } = event.target
    const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    if (!ALPHA_NUMERIC_DASH_REGEX.test(value) && value) {
      event.preventDefault();
      return;
    }
    handleChange({...event, value: event.target.value.toLowerCase().trim()})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // try {
    //   const signUpUserData = await AuthService.signUpUser({ identifier: email, password });
      
    //   setError(null);
    //   console.log('--- AC - signUpUserData ---', signUpUserData);
    // } catch (error) {
    //   setError(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="sign-up-form">
        <section className="sign-up-form__container">
          <header className="sign-up-form__header">
            <Image
              className="sign-up-form__img"
              src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838397/animation2_6bcbd06d05.svg"
              alt="Andry Peña - Andrystylist"
              fill
              draggable="false"
              onDrag={(event) => event.preventDefault()}
            />
          </header>
          <form className="sign-up-form__form" onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center" }}>Welcome to the Andrystylist</h1>
            <h2 style={{ textAlign: "center" }}>Create your account and enjoy our services</h2>
            {error && <Alert variant="outlined" severity="error" className="sign-up-form__form--error">
              <AlertTitle>Sign up Error</AlertTitle>
              {error.message}
            </Alert>}
            <TextField
              id="firstName"
              className="sign-up-form__field"
              label="First Name"
              variant="standard"
              type="text"
              name="firstName"
              value={signUpUser.firstName}
              inputProps={{ minLength: 2, maxLength: 100 }}
              required
              onChange={handleChange}
            />
            <TextField
              id="lastName"
              className="sign-up-form__field"
              label="Last Name"
              variant="standard"
              type="text"
              name="lastName"
              value={signUpUser.lastName}
              inputProps={{ maxLength: 100 }}
              onChange={handleChange}
            />
            <TextField
              id="username"
              className="sign-up-form__field"
              label="Username"
              variant="standard"
              type="text"
              name="username"
              inputProps={{ maxLength: 25 }}
              value={signUpUser.username}
              required
              onChange={handleChangeUsername}
            />
            <TextField
              id="email"
              className="sign-up-form__field"
              label="Email"
              variant="standard"
              type="email"
              name="email"
              value={signUpUser.email}
              inputProps={{ maxLength: 250 }}
              required
              onChange={handleChange}
            />
            <TextField
              id="password"
              className="sign-up-form__field"
              label="Password"
              variant="standard"
              name="password"
              type={showPassword ? "text" : "password"}
              value={signUpUser.password}
              required
              onChange={handleChange}
              inputProps={{ minLength: 6 }}
              InputProps={{ // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <div className="sign-up-form__action-link">
              <Link href="/forgot-password">Forgot password?</Link> /
              <Link href="/login">I already have an account</Link>
            </div>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
            >
              Sign Up
            </Button>
          </form>
          {isLoading && <Loading />}
        </section>
      </section>
    </ThemeProvider>
  );
};

export default SignUpForm;
