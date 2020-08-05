/* eslint-disable react/prop-types */
import React from 'react'
import './home.css'
import { withNamespaces } from 'react-i18next'
import { Typography } from '@material-ui/core'
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

/**
 * Home page component
 */
const Home = (props) => {
  const { t } = props
  return (
    <section id="home">
      <MuiThemeProvider theme={theme}>
        <Typography variant="h3">{t('home.introduction')}</Typography>
        <Typography variant="h1">{t('home.name')}</Typography>
        <Typography variant="h4">{t('home.description')}</Typography>
      </MuiThemeProvider>
      {/* You can remove this */}
      <span className="photo-credits">
        Photo by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/@sarahdorweiler?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Sarah Dorweiler
        </a>
        on
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/s/photos/plant?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </span>
    </section>
  )
}

export default withNamespaces()(Home)
