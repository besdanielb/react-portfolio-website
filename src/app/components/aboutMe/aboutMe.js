/* eslint-disable react/prop-types */
import React from 'react'
import './aboutMe.scss'
import { withNamespaces } from 'react-i18next'
import { Typography, Button, Hidden } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import GetAppIcon from '@material-ui/icons/GetApp'
import image from '../../images/portrait.webp'
import FullWidthTabs from './tabs'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const AboutMe = (props) => {
  const { t } = props
  return (
    <section id="aboutMe">
      <div className="container">
        <ThemeProvider theme={theme}>
          <Grid container className="grid-container" style={{ paddingLeft: '5vw' }}>
            <Grid item xs={12} md={4} lg={4} className="image-container">
              <Grid item xs align="center">
                {/* Photo by Hunter Newton on Unsplash */}
                <img src={image} alt="looking at computer" className="image" viewBox="0 0 420 580" />
              </Grid>
              <Grid item xs style={{ height: 'fit-content', marginTop: '1rem' }}>
                <Hidden mdDown>
                  <a href="/files/cv.txt" download>
                    <Button variant="outlined" aria-label="Download cv">
                      <GetAppIcon />
                      {t('aboutMe.downloadCV')}
                    </Button>
                  </a>
                </Hidden>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={8} lg={8} alignContent="center" className="description">
              <Grid item container xs={12} sm={12} md={8} justify="flex-end" alignContent="flex-end" style={{ marginBottom: '2rem' }}>
                <Grid item align="left" xs={12} className="title-container">
                  <Typography variant="h2" className="title">{t('aboutMe.title')}</Typography>
                </Grid>
              </Grid>
              <Grid item align="left" xs={12} className="title-container">
                <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p1')}</Typography>
                <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p2')}</Typography>
                <FullWidthTabs className="tabs" />
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </section>
  )
}

export default withNamespaces()(AboutMe)
