'use client'

import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/UIMaterialTheme/ThemeProvider';
import "./ForgotPasswordForm.scss";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from 'next/navigation';
import * as AuthService from "@/services/AuthService";
import Loading from "../Loading/Loading";


const ForgotPasswordForm = () => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const { authData } = useContext(AuthContext);

  useEffect(() => {
    if (authData.token) {
      redirect('/');
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const forgotPasswordData = await AuthService.forgotPassword({ email });
      setError(null)
    } catch (error) {
      setError(error)
    } finally {
      setResult({
        message: 'If an there is a credential that matches with the one you have provided you will receive an email with a link to reset your password'
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="forgot-password-form">
        <section className="forgot-password-form__container">
          <header className="forgot-password-form__header">
            <Image
              className="forgot-password-form__img"
              src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838397/animation2_6bcbd06d05.svg"
              alt="Andry Peña - Andrystylist"
              fill
              draggable="false"
              onDrag={(event) => event.preventDefault()}
            />
          </header>
          <form className="forgot-password-form__form" onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center" }}>Welcome to Andrystylist</h1>
            {result && <Alert variant="outlined" severity="info" className="forgot-password-form__form--info">
              <AlertTitle>Your notification has been sent</AlertTitle>
              {result.message}
            </Alert>}
            <TextField
              id="email"
              className="forgot-password-form__field"
              label="Email"
              variant="standard"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="forgot-password-form__action-link">
              <Link href="/login">I already have an account</Link> /
              <Link href="/sign-up">Create an account</Link>
            </div>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
            >
              Recover my password
            </Button>
          </form>
          {isLoading && <Loading />}
        </section>
      </section>
    </ThemeProvider>
  );
};

export default ForgotPasswordForm;