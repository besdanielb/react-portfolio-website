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
    <section className="aboutMe" id="aboutMe" name="aboutMe">
      <div className="container">
        <ThemeProvider theme={theme}>
          <Grid container>
            <Grid item container xs={12} md={4} style={{ height: '-webkit-fill-available', alignContent: 'center' }}>
              <Grid item xs>
                <Grid item align="center">
                  <img src={image} alt="looking at computer" className="image" />
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
            </Grid>
            <Grid item container xs={12} md={8} alignContent="center" className="description" style={{ height: '-webkit-fill-available', alignContent: 'baseline' }}>
              <Grid item container xs={12} md={8} justify="flex-end" alignContent="flex-end" style={{ height: '10vw', marginBottom: '2rem' }}>
                <Grid item align="left" xs={12} className="title-container">
                  <Typography variant="h3" className="title">{t('aboutMe.title')}</Typography>
                </Grid>
              </Grid>
              <Grid item align="left" xs={12} className="title-container">
                <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p1')}</Typography>
                <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p2')}</Typography>
                <Typography variant="h6" paragraph className="p">{t('aboutMe.description.p3')}</Typography>
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
