'use client'

import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/UIMaterialTheme/ThemeProvider';
import "./NewsletterSignup.scss";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from 'next/navigation';
import * as Service from "@/services/UserService";
import Loading from "../Loading/Loading";
import { Space_Mono } from 'next/font/google';


const NewsletterSignup = ({ children }) => {
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
      const newsletterSignupData = await Service.newsletterSignup({ email });
      setError(null)
      setEmail('')
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false);
      setResult({
        message: "You have already joined to our newsletter, promise it won't be spam"
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="newsletter-signup">
        <section className="newsletter-signup__container">
          <header className="newsletter-signup__header">
            <Image
              className="newsletter-signup__img"
              src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838397/animation2_6bcbd06d05.svg"
              alt="Andry Peña - Andrystylist"
              fill
              draggable="false"
              onDrag={(event) => event.preventDefault()}
            />
          </header>
          {children}
          <form className="newsletter-signup__form" onSubmit={handleSubmit}>
            {result && <Alert variant="outlined" severity="success" className="newsletter-signup__form--success">
              {result.message}
            </Alert>}
            <h3 style={{ textAlign: "center" }}>Join to my newsletter</h3>
            <TextField
              id="email"
              className="newsletter-signup__field"
              label="Email"
              variant="standard"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="newsletter-signup__action-link">
              <Link href="/">Go Home</Link>
            </div>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </form>
          {isLoading && <Loading />}
        </section>
      </section>
    </ThemeProvider>
  );
};

export default NewsletterSignup;