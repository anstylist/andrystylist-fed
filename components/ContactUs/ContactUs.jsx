'use client'

import React, { useContext, useState, useEffect } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { BiLogoWhatsapp, BiEnvelope } from 'react-icons/bi'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Loading from "../Loading/Loading";
import * as Service from "@/services/UserService";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/UIMaterialTheme/ThemeProvider';

import './ContactUs.scss'

function ContactUs () {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const [contact, setContact] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (event) => {
      const {name, value} = event.target
      setContact((prev) => ({ 
        ...prev,
        [name]: value 
      }))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
          const contactData = await Service.contact(contact)
          setError(null)
          setContact({
            name: '',
            email: '',
            message: ''
          })
        } catch (error) {
          setError(error)
        } finally {
          setIsLoading(false);
        }
    };

  return (
    <ThemeProvider theme={theme}>
        <section className='contact-us'>
            <div className='contact-us__container'>
                <h2 className='contact-us__title'>Contact</h2>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <section className='contact-us__info--box'>
                            <h3 className='contact-us__info-title'>
                                Info
                            </h3>
                            <div className='contact-us__info--content'>
                                <div tabIndex={0} aria-label='WhatsApp Link'>
                                    <a target='_blank' href='https://wa.me/1XXXXXXXXXX'>
                                        <BiLogoWhatsapp className='contact-us__info--icon' />
                                        +57 512 123-8123
                                    </a>
                                </div>
                                <div tabIndex={0} aria-label='Email'>
                                    <a href='mailto: andrystylist88@gmail.com'>
                                        <BiEnvelope className='contact-us__info--icon' />
                                        andrystylist88@gmail.com
                                    </a>
                                </div>
                            </div>
                        </section>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <section className='contact-us__message'>
                            <form
                                autoComplete="off"
                                onSubmit={handleSubmit}
                                className='contact-form__form'
                            >
                                <Grid container spacing={2} className="contact-us__message--first-row">
                                    <Grid xs={6}>
                                        <TextField
                                            required
                                            id="name"
                                            name='name'
                                            label="Name"
                                            variant="standard"
                                            maxLength="50"
                                            className='contact-us__message--input'
                                            value={contact.name}
                                            inputProps={{ minLength: 2, maxLength: 100, autoComplete: 'off' }}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid xs={6}>
                                        <TextField
                                            required
                                            id="email"
                                            name='email'
                                            label="E-Mail"
                                            variant="standard"
                                            type='email'
                                            maxLength="255"
                                            className='contact-us__message--input'
                                            value={contact.email}
                                            inputProps={{ minLength: 5, maxLength: 100, autoComplete: 'off' }}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <TextField
                                            required
                                            id="message"
                                            name="message"
                                            label="Message"
                                            multiline
                                            rows={4}
                                            variant="standard"
                                            className='contact-us__message--textarea'
                                            value={contact.message}
                                            inputProps={{ minLength: 10, maxLength: 100, autoComplete: 'off' }}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                                <div className='contact-us__message--submit-box'>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        className='contact-us__message--submit'
                                    >
                                        Send
                                    </Button>
                                </div>
                            </form>
                        </section>
                    </Grid>
                </Grid>
                {isLoading && <Loading />}
            </div>
        </section>
    </ThemeProvider>
  )
}

export default ContactUs
