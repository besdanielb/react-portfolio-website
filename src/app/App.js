import React, { Suspense, lazy } from 'react';
import './App.css';
import NavBar from './components/navBar/navbar';
import Home from './components/home/home';
import '../i18n';

const AboutMe = lazy(() => import('./components/aboutMe/aboutMe'));
const Contacts = lazy(() => import('./components/contacts/contacts'));
const Portfolio = lazy(() => import('./components/portfolio/portfolio'));

const App = ({ t }) => (
  <div className="container">
    <Home></Home>
    <Suspense fallback={<div></div>}>
      <NavBar></NavBar>
    </Suspense>
    <Suspense fallback={<div></div>}>
      <AboutMe></AboutMe>
    </Suspense>
    <Suspense fallback={<div></div>}>
      <Portfolio></Portfolio>
    </Suspense>
    <Suspense fallback={<div></div>}>
      <Contacts></Contacts>
    </Suspense>
  </div>
);

export default App;
