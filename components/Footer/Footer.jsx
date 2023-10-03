import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './Footer.scss'

function Footer() {

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <Grid container spacing={2} className='footer__grid'>
          <Grid xs={12} md={6}>
            <div className='footer__logo-img-container'>
              <Image
                className='footer__logo-img'
                src="https://res.cloudinary.com/dq66wlb15/image/upload/v1695838653/animation3_a43b70c7d4.svg"
                alt="Andry Peña - Andrystylist"
                fill
              />
            </div>
          </Grid>
          <Grid xs={12} md={6}>
            <SocialNetworks className="footer__social-networks" withText />
          </Grid>
        </Grid>
      </div>
      <div className='footer__copyright__container'>
        <div>© Andrystylist - 2023</div>
      </div>
    </footer>
  )
}

export default Footer
