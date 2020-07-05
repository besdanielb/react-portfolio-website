import React from 'react';
import './App.css';
import NavBar from './components/navBar/navbar';
import AboutMe from './components/aboutMe/aboutMe';
import Contacts from './components/contacts/contacts';
import Portfolio from './components/portfolio/portfolio';
import Home from './components/home/home';
import '../i18n';


function App({t}) {
  return (
    <div className="container">
        <NavBar></NavBar>
        <Home></Home>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <Contacts></Contacts>
    </div>
  );
}

export default App;
