import React from 'react'
import './home.scss';
import { withNamespaces } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    name: {
        fontWeight: 400,
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(1)
    }
}));

const Home = ({ t }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <section id="home">
            <Typography variant="h4">{t('home.introduction')}</Typography>
            <Typography className={classes.name} variant="h2">{t('home.name')}</Typography>
            <Typography variant="h6">{t('home.description')}</Typography>
        </section>
    )
}

export default withNamespaces()(Home);