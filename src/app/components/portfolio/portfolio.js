/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react'
import './portfolio.scss'
import { withNamespaces } from 'react-i18next'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles'
import portfolioData from './portfolioData'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

/**
 * Portfolio page component
 * Portfolio config array can be found on portfolioData.js file
 */
const Portfolio = (props) => {
  const { t, i18n } = props
  // Number of cards to show depending on the screen size
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
    1600: { items: 4 },
  }
  const handleOnDragStart = (e) => e.preventDefault()

  return (
    <section id="portfolio">
      <div className="container">
        <MuiThemeProvider theme={theme}>
          <Typography variant="h2" className="title">
            {t('portfolio.title')}
          </Typography>
        </MuiThemeProvider>
        <AliceCarousel
          autoPlay
          duration={400}
          autoPlayInterval={3000}
          responsive={responsive}
          fadeOutAnimation
          controlsStrategy="responsive"
          showSlideInfo
          disableAutoPlayOnAction
          preventEventOnTouchMove
        >
          {portfolioData.map((portfolioItem, i) => (
            <div key={i} className="image-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={portfolioItem.externalLink}
              >
                <img
                  src={portfolioItem.image}
                  onDragStart={handleOnDragStart}
                  className="sliderimg"
                  alt=""
                />
                <div className="sliderimg--description">
                  <Typography
                    variant="h6"
                    className="sliderimg--description__title"
                  >
                    {portfolioItem.title[i18n.language]}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="sliderimg--description__description"
                  >
                    {portfolioItem.description[i18n.language]}
                  </Typography>
                  <InfoIcon className="sliderimg--description__icon" />
                </div>
              </a>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </section>
  )
}

export default withNamespaces()(Portfolio)
