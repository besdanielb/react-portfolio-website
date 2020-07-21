/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import './gallery.scss'
import { withNamespaces } from 'react-i18next'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Typography } from '@material-ui/core'
import galleryData from './galleryData'

const Gallery = (props) => {
  const { i18n } = props
  const responsive = { 0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
    1600: { items: 4 },
    2000: { items: 5 } }
  const handleOnDragStart = (e) => e.preventDefault()

  return (
    <section id="gallery">
      <AliceCarousel
        autoPlay
        duration={400}
        autoPlayInterval={3000}
        responsive={responsive}
        fadeOutAnimation
        showSlideInfo
        disableAutoPlayOnAction
        mouseTrackingEnabled
        preventEventOnTouchMove
      >
        {galleryData.map((galleryItem, i) => (
          <div key={i} className="image-container">
            <img key={galleryItem.id} src={galleryItem.image} onDragStart={handleOnDragStart} className="sliderimg" alt="" />
            <div className="sliderimg--description">
              <Typography variant="h6" className="sliderimg--description__title">
                {galleryItem.title[i18n.language]}
              </Typography>
              <Typography variant="body2" className="sliderimg--description__description">
                {galleryItem.description[i18n.language]}
              </Typography>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </section>
  )
}

export default withNamespaces()(Gallery)
