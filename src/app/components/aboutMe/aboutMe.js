import React, { Component } from 'react'
import './aboutMe.scss'
import { withNamespaces } from 'react-i18next';
import Paper from '@material-ui/core/Paper'
import image from '../../images/looking-at-computer.png'
import Image from 'material-ui-image'
import { height } from '@material-ui/system';

function AboutMe({ t }) {

    return (
        <section className="aboutMe" id="aboutMe">
            <Paper className="main-paper" elevation={24}>
                <div>
                    <h1 className="h1">{t('aboutMe.title')}</h1>
                </div>
                <div className="main-paper__content">
                    <div className="main-paper__image-container">
                        <img className="main-paper__image" src={image}></img>
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