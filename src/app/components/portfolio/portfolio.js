/* eslint-disable global-require */
import React from 'react'
import './portfolio.scss'
import { withNamespaces } from 'react-i18next'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import image1 from '../../images/headphones-large.webp'
import image2 from '../../images/portfolio-3-large.webp'
import image3 from '../../images/newspapers.webp'
import image4 from '../../images/shapes.webp'
import image5 from '../../images/portfolio-view-large.webp'

const Portfolio = () => {
  const responsive = { 0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
    1600: { items: 4 },
    2000: { items: 5 } }
  const handleOnDragStart = (e) => e.preventDefault()

  return (
    <section id="portfolio">
      <AliceCarousel
        autoPlay
        duration={400}
        autoPlayInterval={3000}
        responsive={responsive}
        fadeOutAnimation
        controlsStrategy="responsive"
        showSlideInfo
        disableAutoPlayOnAction
        mouseTrackingEnabled
        preventEventOnTouchMove
      >

        <div className="image-container">
          <a target="_blank" rel="noopener noreferrer" href="http://www.google.com">
            <img src={image1} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 1" />
            <div className="sliderimg--description">
              <Typography variant="h6" className="sliderimg--description__title"> Next event September 12th 2020</Typography>
              <Typography variant="body2" className="sliderimg--description__description"> This thing is gonna be do açu meu menino,  sdfdsfdsf dsfdsfdsf sdf sdaquilo é que vai ser, é de não perder filho.</Typography>
              <InfoIcon className="sliderimg--description__icon" />
            </div>
          </a>
        </div>

        <img src={image2} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 2" />
        <img src={image3} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 3" />
        <img src={image4} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 4" />
        <img src={image5} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 5" />
        <img src={image3} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 6" />
      </AliceCarousel>
    </section>
  )
}

export default withNamespaces()(Portfolio)
