import React from 'react'
import './home.scss';
import { withNamespaces } from 'react-i18next';

const Home = ({ t }) => {
    return (
        <section id="home">
            <h1>Olivia Silva</h1>
            <p>{t('home.description')}</p>
        </section>
    )
}

export default withNamespaces()(Home);