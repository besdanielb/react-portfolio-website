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

/* class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false,
      mouseOver: false }
    // Bind properties to class instance
    this._clickHandler = this._clickHandler.bind(this)
    this._mouseEnter = this._mouseEnter.bind(this)
    this._mouseLeave = this._mouseLeave.bind(this)
  }

  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault()
    if (this.state.mouseOver === false) {
      console.log(this.props.data.name)
      this.setState({ mouseOver: true })
    }
  }

  _mouseLeave(e) {
    e.preventDefault()
    if (this.state.mouseOver === true) {
      this.setState({ mouseOver: false })
    }
  }

  _clickHandler(e) {
    e.preventDefault()
    if (this.state.open === false) {
      this.setState({ open: true })
    } else {
      this.setState({ open: false })
    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {}
    const headerStyle = {}
    const zoom = {}
    // When tile clicked
    if (this.state.open) {
      tileStyle = { width: '50vw',
        height: '50vw',
        position: 'absolute',
        top: '50%',
        bottom: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-25vw',
        marginLeft: '-25vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none' }
    } else {
      tileStyle = { width: '20vw',
        height: '20vw' }
    }

    return (
      <div className="tile">
        <img
          onMouseEnter={this._mouseEnter}
          onMouseLeave={this._mouseLeave}
          onClick={this._clickHandler}
          src={this.props.data.image}
          alt={this.props.data.name}
          style={tileStyle}
        />
      </div>
    )
  }
} */

export default withNamespaces()(Gallery)
