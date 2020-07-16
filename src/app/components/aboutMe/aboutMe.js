/* eslint-disable react/prop-types */
import React from 'react'
import './aboutMe.scss'
import { withNamespaces } from 'react-i18next'
import { Typography, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import image from '../../images/looking-at-paper.webp'
import FullWidthTabs from './tabs'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const AboutMe = (props) => {
  const { t } = props
  return (
    <section className="aboutMe" id="aboutMe" name="aboutMe">
      <div className="container">
        <ThemeProvider theme={theme}>
          <Grid container spacing={3}>
            <Grid item container xs={12} align="left" style={{ height: 'fit-content' }}>
              <Typography variant="h2" className="title">{t('aboutMe.title')}</Typography>
            </Grid>
            <Grid container style={{ height: '80vh', alignContent: 'center' }}>
              <Grid item container xs={12} md={4} justify="center" spacing={2}>
                <Grid item xs={12} align="center">
                  <img src={image} alt="looking at computer" className="image" />
                </Grid>
                <Grid item xs={12} align="center">
                  <Button variant="outlined" aria-label="Download cv">
                    {t('aboutMe.downloadCV')}
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8} className="description">
                <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p1')}</Typography>
                <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p2')}</Typography>
                <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p3')}</Typography>
                <FullWidthTabs />
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </section>
  )
}

export default withNamespaces()(AboutMe)
