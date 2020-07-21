/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react'
import './App.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import NavBar from './components/navBar/navbar'
import Home from './components/home/home'
import '../i18n'

const AboutMe = lazy(() => import('./components/aboutMe/aboutMe'))
const Contacts = lazy(() => import('./components/contacts/contacts'))
const Portfolio = lazy(() => import('./components/portfolio/portfolio'))
const Gallery = lazy(() => import('./components/gallery/gallery'))
const News = lazy(() => import('./components/news/news'))
const Media = lazy(() => import('./components/media/media'))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount() {
    this.setState({ loading: false })
  }

  handleScroll = (e) => {
    const toTop = document.querySelector('.to-top')

    if (e.target.scrollTop > 100) {
      toTop.classList.add('active')
    } else {
      toTop.classList.remove('active')
    }
  }

  render() {
    const { loading } = this.state

    if (loading) {
      return (
        <div className="content">
          <div className="loading">
            <p>loading</p>
            <span />
          </div>
        </div>
      )
    }
    return (
      <div className="container" onScroll={this.handleScroll}>
        <NavBar />
        <Home />
        <Suspense fallback={<div />}>
          <AboutMe />
        </Suspense>
        <Suspense fallback={<div />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div />}>
          <Media />
        </Suspense>
        <Suspense fallback={<div />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div />}>
          <News />
        </Suspense>
        <Suspense fallback={<div />}>
          <Contacts />
        </Suspense>
        <a href="#home" id="top-button" className="to-top">
          <ArrowUpwardIcon />
        </a>
      </div>
    )
  }
}

export default App
