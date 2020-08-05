/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './news.css'
import { withNamespaces } from 'react-i18next'
import { Typography, Grid } from '@material-ui/core'
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles'
import InfoIcon from '@material-ui/icons/Info'
import firstNewsImageWebp from '../../images/people.webp'
import firstNewsImageJpg from '../../images/people.jpg'
import secondNewsImageWebp from '../../images/jumping.webp'
import secondNewsImageJpg from '../../images/jumping.jpg'
import thirdNewsImageWebp from '../../images/concert.webp'
import thirdNewsImageJpg from '../../images/concert.jpg'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

/**
 * News page component
 */
const News = (props) => {
  const { t } = props
  return (
    <section id="news">
      <div className="container">
        <MuiThemeProvider theme={theme}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} align="center">
              <Typography variant="h2" className="title">
                {t('news.title')}
              </Typography>
              <Typography variant="body1" className="description">
                {t('news.description')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4} align="center">
              {/* You can add your external links to the news in the href property */}
              <div className="image-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.google.com"
                >
                  <picture>
                    <source src={firstNewsImageWebp}></source>
                    <img
                      src={firstNewsImageJpg}
                      className="image"
                      alt="first news"
                    />
                  </picture>
                  <div className="image--description">
                    <Typography
                      variant="h5"
                      className="image--description__title"
                    >
                      {t('news.tab1.title')}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="image--description__description"
                    >
                      {t('news.tab1.description')}
                    </Typography>
                    <InfoIcon className="image--description__icon" />
                  </div>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} align="center">
              <div className="image-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.google.com"
                >
                  <picture>
                    <source src={secondNewsImageWebp}></source>
                    <img
                      src={secondNewsImageJpg}
                      className="image"
                      alt="second news"
                    />
                  </picture>
                  <div className="image--description">
                    <Typography
                      variant="h5"
                      className="image--description__title"
                    >
                      {t('news.tab2.title')}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="image--description__description"
                    >
                      {t('news.tab2.description')}
                    </Typography>
                    <InfoIcon className="image--description__icon" />
                  </div>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} align="center">
              <div className="image-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.google.com"
                >
                  <picture>
                    <source src={thirdNewsImageWebp}></source>
                    <img
                      src={thirdNewsImageJpg}
                      className="image"
                      alt="third news"
                    />
                  </picture>
                  <div className="image--description">
                    <Typography
                      variant="h5"
                      className="image--description__title"
                    >
                      {t('news.tab3.title')}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="image--description__description"
                    >
                      {t('news.tab3.description')}
                    </Typography>
                    <InfoIcon className="image--description__icon" />
                  </div>
                </a>
              </div>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </section>
  )
}

export default withNamespaces()(News)
