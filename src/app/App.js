/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react'
import './App.css'
import NavBar from './components/navBar/navbar'
import Home from './components/home/home'
import '../i18n'

const AboutMe = lazy(() => import('./components/aboutMe/aboutMe'))
const Contacts = lazy(() => import('./components/contacts/contacts'))
const Portfolio = lazy(() => import('./components/portfolio/portfolio'))
const News = lazy(() => import('./components/news/news'))

const App = () => (
  <div className="container">
    <NavBar />
    <Home />
    <Suspense fallback={<div />}>
      <AboutMe />
    </Suspense>
    <Suspense fallback={<div />}>
      <Portfolio />
    </Suspense>
    <Suspense fallback={<div />}>
      <News />
    </Suspense>
    <Suspense fallback={<div />}>
      <Contacts />
    </Suspense>
  </div>
)

export default App
