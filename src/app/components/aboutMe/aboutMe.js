import React from 'react'
import './aboutMe.scss'
import { withNamespaces } from 'react-i18next';
import Paper from '@material-ui/core/Paper'
import image from '../../images/looking-at-computer.png'

const AboutMe = ({ t })=> {
   
    return (
        <section className="aboutMe" id="aboutMe" name="aboutMe" >
            <Paper className="main-paper" elevation={24}>
                <h1 className="title">{t('aboutMe.title')}</h1>
                <div className="main-paper__content">
                    <div className="main-paper__image-container ">
                        <img className="main-paper__image" alt="looking at computer" src={image}></img>
                    </div>
                    <div className="border"></div>
                    <div className="main-paper__description">
                        <p className="p"> {t('aboutMe.description')}</p>
                    </div>
                </div>
            </Paper>
        </section>
    );
}

export default withNamespaces()(AboutMe);