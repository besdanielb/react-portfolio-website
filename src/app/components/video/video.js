/* eslint-disable react/prop-types */
import React from 'react'
import { withNamespaces } from 'react-i18next'
import './video.css'
import { Grid, Typography } from '@material-ui/core'
import ReactPlayer from 'react-player'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const Media = (props) => {
  const { t } = props
  return (
    <section id="media">
      <div className="container">
        <MuiThemeProvider theme={theme}>
          <Typography variant="h2" className="title">{t('video.title')}</Typography>
        </MuiThemeProvider>
        <Grid container spacing={5} className="grid-container">
          <Grid item xs={12} align="center" className="video-container">
            <ReactPlayer
              className="video-player"
              url="https://www.youtube.com/watch?v=2lAe1cqCOXo"
            />
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default withNamespaces()(Media)
