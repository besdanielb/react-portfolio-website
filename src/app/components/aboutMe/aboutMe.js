/* eslint-disable react/prop-types */
import React from 'react'
import './aboutMe.scss'
import { withNamespaces } from 'react-i18next'
import Paper from '@material-ui/core/Paper'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import YouTubeIcon from '@material-ui/icons/YouTube'
import { IconButton, Typography, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import image from '../../images/looking-at-computer.webp'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const AboutMe = ({ t }) => (
  <section className="aboutMe" id="aboutMe" name="aboutMe">
    <Paper className="main-paper" elevation={24}>
      <Grid container spacing={2} className="main-paper__content">
        <Grid item xs={12} container justify="center" alignItems="center">
          <ThemeProvider theme={theme}>
            <Typography variant="h4" className="title">{t('aboutMe.title')}</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs container direction="column" justify="center" alignItems="center">
          <Grid item xs style={{ textAlign: 'center' }}>
            <img className="main-paper__image" alt="looking at computer" src={image} />
          </Grid>
          <Grid item xs className="icons">
            <IconButton onClick={() => { window.location.href = 'http://www.facebook.com' }}><FacebookIcon /></IconButton>
            <IconButton onClick={() => { window.location.href = 'http://www.instagram.com' }}><InstagramIcon /></IconButton>
            <IconButton onClick={() => { window.location.href = 'http://www.linkedin.com' }}><LinkedInIcon /></IconButton>
            <IconButton onClick={() => { window.location.href = 'http://www.youtube.com' }}><YouTubeIcon /></IconButton>
          </Grid>
        </Grid>
        <Grid item xs container wrap="nowrap" direction="column" className="description">
          <Grid item xs>
            <ThemeProvider theme={theme}>
              <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p1')}</Typography>
              <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p2')}</Typography>
            </ThemeProvider>
            <Button variant="outlined" style={{ display: 'flex', alignSelf: 'flex-start', marginTop: '15px' }}>
              {t('aboutMe.downloadCV')}
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </Paper>
  </section>
)

export default withNamespaces()(AboutMe)
