/* eslint-disable react/prop-types */
import React from 'react'
import './home.scss'
import { withNamespaces } from 'react-i18next'
import { Typography } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const Home = (props) => {
  const { t } = props
  return (
    <section id="home">
      <MuiThemeProvider theme={theme}>
        <Typography variant="h4">{t('home.introduction')}</Typography>
        <Typography variant="h1">{t('home.name')}</Typography>
        <Typography variant="h6">{t('home.description')}</Typography>
      </MuiThemeProvider>
    </section>
  )
}

export default withNamespaces()(Home)
