/* eslint-disable react/prop-types */
import React from 'react'
import './news.scss'
import { withNamespaces } from 'react-i18next'
import { Typography, Grid } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import InfoIcon from '@material-ui/icons/Info'
import firstNewsImage from '../../images/people.webp'
import secondNewsImage from '../../images/jumping.webp'
import thirdNewsImage from '../../images/concert.webp'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const News = (props) => {
  const { t } = props
  return (
    <section id="news">
      <div className="container">
        <MuiThemeProvider theme={theme}>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} md={6} lg={4} align="center">
              <div className="image-container">
                <a target="_blank" rel="noopener noreferrer" href="http://www.google.com">
                  <img src={firstNewsImage} className="image" alt="first news" />
                  <div className="image--description">
                    <Typography variant="h5" className="image--description__title"> Next event September 12th 2020</Typography>
                    <Typography variant="body2" className="image--description__description"> This thing is gonna be do açu meu menino, aquilo é que vai ser, é de não perder filho.</Typography>
                    <InfoIcon className="image--description__icon" />
                  </div>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} align="center">
              <div className="image-container">
                <a target="_blank" rel="noopener noreferrer" href="http://www.google.com">
                  <img src={secondNewsImage} className="image" alt="second news" />
                  <div className="image--description">
                    <Typography variant="h5" className="image--description__title"> Next event September 12th 2020</Typography>
                    <Typography variant="body2" className="image--description__description"> This thing is gonna be do açu meu menino, aquilo é que vai ser, é de não perder filho.</Typography>
                    <InfoIcon className="image--description__icon" />
                  </div>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} align="center">
              <div className="image-container">
                <a target="_blank" rel="noopener noreferrer" href="http://www.google.com">
                  <img src={thirdNewsImage} className="image" alt="third news" />
                  <div className="image--description">
                    <Typography variant="h5" className="image--description__title"> Next event September 12th 2020</Typography>
                    <Typography variant="body2" className="image--description__description"> This thing is gonna be do açu meu menino, aquilo é que vai ser, é de não perder filho.</Typography>
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
