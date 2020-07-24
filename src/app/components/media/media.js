/* eslint-disable react/prop-types */
import React from 'react'
import { withNamespaces } from 'react-i18next'
import './media.scss'
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
          <Typography variant="h2" className="title">{t('media.title')}</Typography>
        </MuiThemeProvider>
        <Grid container spacing={5} className="grid-container">
          <Grid item xs={12} align="center" className="video-container">
            <ReactPlayer
              className="video-player"
              url="https://www.youtube.com/watch?v=ug50zmP9I7s"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <iframe title="song" className="iframe" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647246442&color=%2345c7ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false" />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <iframe title="song" className="iframe" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647246442&color=%2345c7ff&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false" />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <iframe title="song" className="iframe" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647246442&color=%2345c7ff&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false" />
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default withNamespaces()(Media)
