/* eslint-disable react/prop-types */
import React from 'react'
import './aboutMe.css'
import { withNamespaces } from 'react-i18next'
import { Typography, Button, Hidden } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from '@material-ui/core/styles'
import GetAppIcon from '@material-ui/icons/GetApp'
// Profile picture import path
import imageWebp from '../../images/portrait.webp'
import imageJpg from '../../images/portrait.jpg'

import FullWidthTabs from './tabs'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

/**
 * About Me page component
 */
const AboutMe = (props) => {
  const { t } = props
  return (
    <section id="aboutMe">
      <div className="container">
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <Grid container className="grid-container">
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                className="image-container"
              >
                {/* Your Profile picture */}
                <Grid item align="center">
                  {/* Photo by Hunter Newton on Unsplash */}
                  <picture>
                    <source src={imageWebp} />
                    <img
                      src={imageJpg}
                      alt="looking at computer"
                      className="image"
                      viewBox="0 0 420 580"
                    />
                  </picture>
                </Grid>
                <Grid
                  item
                  xs
                  style={{ height: 'fit-content', marginTop: '1rem' }}
                >
                  <Hidden smDown>
                    {/* Path to your curriculum file to download */}
                    <a href="/files/cv.txt" download>
                      <Button
                        variant="contained"
                        className="download-button"
                        aria-label="Download cv"
                        style={{ backgroundColor: 'white' }}
                      >
                        <GetAppIcon
                          className="download-icon"
                          style={{ marginRight: '5px' }}
                        />
                        {t('aboutMe.downloadCV')}
                      </Button>
                    </a>
                  </Hidden>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={8}
                lg={8}
                alignContent="center"
                className="description"
              >
                <Grid
                  item
                  container
                  xs={12}
                  sm={12}
                  md={8}
                  justify="flex-end"
                  alignContent="flex-end"
                  style={{ marginBottom: '2rem' }}
                >
                  <Grid item align="left" xs={12} className="title-container">
                    <Typography variant="h2" className="title">
                      {t('aboutMe.title')}
                    </Typography>
                  </Grid>
                </Grid>
                {/* About me description text - can be found on src/app/locales */}
                <Grid item align="left" xs={12} className="title-container">
                  <Typography variant="h6" paragraph className="p">
                    {t('aboutMe.description.p1')}
                  </Typography>
                  <Typography variant="h6" paragraph className="p">
                    {t('aboutMe.description.p2')}
                  </Typography>
                  <FullWidthTabs className="tabs" />
                </Grid>
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </ThemeProvider>
      </div>
    </section>
  )
}

export default withNamespaces()(AboutMe)
