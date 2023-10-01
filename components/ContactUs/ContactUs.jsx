import './ContactUs.scss'
import Grid from '@mui/material/Unstable_Grid2';
import { BiLogoWhatsapp, BiEnvelope } from 'react-icons/bi'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/UIMaterialTheme/ThemeProvider';

function ContactUs () {
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
                            <Box
                                component="form"
                                autoComplete="off"
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
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <TextField
                                            required
                                            id="message"
                                            label="Message"
                                            multiline
                                            rows={4}
                                            variant="standard"
                                            className='contact-us__message--textarea'
                                        />
                                    </Grid>
                                </Grid>
                                <div className='contact-us__message--submit-box'>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        className='contact-us__message--submit'
                                    >
                                        Sent
                                    </Button>
                                </div>
                            </Box>
                        </section>
                    </Grid>
                </Grid>
            </div>
        </section>
    </ThemeProvider>
  )
}

export default ContactUs
