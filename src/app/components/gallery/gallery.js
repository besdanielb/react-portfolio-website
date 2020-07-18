/* eslint-disable react/destructuring-assignment */
import React from 'react'
import './gallery.scss'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import image1 from '../../images/headphones-large.webp'
import image2 from '../../images/portfolio-3-large.webp'
import image3 from '../../images/newspapers.webp'
import image4 from '../../images/shapes.webp'
import image5 from '../../images/portfolio-view-large.webp'

const Gallery = () => {
  const responsive = { 0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 } }
  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <section id="gallery">
      <AliceCarousel
        autoPlay
        duration={400}
        autoPlayInterval={3000}
        responsive={responsive}
        fadeOutAnimation
        buttonsDisabled
        mouseTrackingEnabled
      >
        <img src={image1} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 1" />
        <img src={image2} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 2" />
        <img src={image3} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 3" />
        <img src={image4} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 1" />
        <img src={image5} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 2" />
        <img src={image3} onDragStart={handleOnDragStart} className="sliderimg" alt="supp 3" />
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

export default Gallery
