'use client'

import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/UIMaterialTheme/ThemeProvider';
import "./LoginForm.scss";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from 'next/navigation';
import * as AuthService from "@/services/AuthService";
import Loading from "../Loading/Loading";


const LoginForm = ({ alert }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authData, updateAuthData } = useContext(AuthContext);

  useEffect(() => {
    if (authData.token) {
      redirect('/');
    }
  }, [authData])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const loginData = await AuthService.login({ identifier: email, password });
      const userData = await AuthService.getInitialUserData({ token: loginData.jwt });
      
      setError(null);

      updateAuthData({
        fullName: loginData.user.username,
        email: loginData.user.email,
        status: 'authenticated',
        token: loginData.jwt,
        roles: [loginData.user.role]
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="login-form">
        <section className="login-form__container">
          <header className="login-form__header">
            <Image
              className="login-form__img"
              src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838397/animation2_6bcbd06d05.svg"
              alt="Andry Peña - Andrystylist"
              fill
              draggable="false"
              onDrag={(event) => event.preventDefault()}
            />
          </header>
          <form className="login-form__form" onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center" }}>Welcome to Andrystylist</h1>
            {error && <Alert variant="outlined" severity="error" className="login-form__form--error">
              <AlertTitle>Sign in Error</AlertTitle>
              {error.message}
            </Alert>}
            {!error && alert && (
              <Alert variant="outlined" severity={alert.type} className={`login-form__form--${alert.type}`}>
                <AlertTitle>{alert.title}</AlertTitle>
                {alert.message}
              </Alert>
            )}
            <TextField
              id="email"
              className="login-form__field"
              label="Email"
              variant="standard"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              className="login-form__field"
              label="Password"
              variant="standard"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-form__action-link">
              <Link href="/forgot-password">Forgot password?</Link> /
              <Link href="/sign-up">Create an account</Link>
            </div>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
            >
              Sign in
            </Button>
          </form>
          {isLoading && <Loading />}
        </section>
      </section>
    </ThemeProvider>
  );
};

export default LoginForm;