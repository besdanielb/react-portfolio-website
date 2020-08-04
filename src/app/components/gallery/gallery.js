/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react'
import './gallery.css'
import { withNamespaces } from 'react-i18next'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Typography } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import galleryData from './galleryData'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)
let modal
let original
let caption

const Gallery = (props) => {
  const { i18n, t } = props
  const responsive = { 0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
    1600: { items: 4 } }
  const handleOnDragStart = (e) => e.preventDefault()

  useEffect(() => {
    modal = document.querySelector('.modal')
    original = document.querySelector('.full-img')
    caption = document.querySelector('.caption')
  }, [])

  const onImageClick = (e) => {
    modal.classList.add('open')
    original.classList.add('open')
    // Dynamic change image and text
    const originalSrc = e.target.getAttribute('data-original')
    original.src = originalSrc
    const altText = e.target.alt
    caption.textContent = altText
  }

  const onModalClick = (event) => {
    if (event.target.classList.contains('modal')) {
      modal.classList.remove('open')
      original.classList.remove('open')
    }
  }

  return (
    <section id="gallery">
      <div className="container">
        <MuiThemeProvider theme={theme}>
          <Typography variant="h2" className="title">{t('gallery.title')}</Typography>

          <AliceCarousel
            autoPlay
            duration={400}
            autoPlayInterval={3000}
            responsive={responsive}
            fadeOutAnimation
            showSlideInfo
            disableAutoPlayOnAction
            mouseTrackingEnabled
          >
            {galleryData.map((galleryItem, i) => (
              <div key={i} className="image-container" onClick={onImageClick}>
                <img data-original={galleryItem.image} src={galleryItem.image} onDragStart={handleOnDragStart} className="sliderimg" alt={galleryItem.title[i18n.language]} />
              </div>
            ))}
          </AliceCarousel>

          <div className="modal" onClick={onModalClick}>
            <img src="" alt="" className="full-img" />
            <p variant="h6" className="caption" />
          </div>
        </MuiThemeProvider>
      </div>
    </section>
  )
}

export default withNamespaces()(Gallery)
