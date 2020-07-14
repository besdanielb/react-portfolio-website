/* eslint-disable react/prop-types */
import React from 'react'
import './news.scss'
import { withNamespaces } from 'react-i18next'
import { Typography, Grid } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const News = (props) => {
  const { t } = props
  return (
    <section id="news">
      <div className="container">
        <MuiThemeProvider theme={theme}>
          <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <Typography variant="h4" paragraph>{t('news.news1.title')}</Typography>
              <Typography variant="body1" paragraph>{t('news.news1.description')}</Typography>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </section>
  )
}

export default withNamespaces()(News)
