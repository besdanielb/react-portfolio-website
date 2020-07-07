import React from 'react'
import './aboutMe.scss'
import { withNamespaces } from 'react-i18next';
import Paper from '@material-ui/core/Paper'
import image from '../../images/looking-at-computer.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const AboutMe = ({ t }) => {

    return (
        <section className="aboutMe" id="aboutMe" name="aboutMe" >
            <Paper className="main-paper" elevation={24}>
                <Grid container spacing={2} className="main-paper__content">
                    <Grid item xs={12} container justify="center" alignItems="center">
                        <Typography variant="h4" className="title">{t('aboutMe.title')}</Typography>
                    </Grid>
                    <Grid item xs container direction="column" justify="center" alignItems="center" >
                        <Grid item xs>
                            <img className="main-paper__image" alt="looking at computer" src={image}></img>
                        </Grid>
                        <Grid item xs className="icons">
                            <IconButton onClick={() => {window.location.href='http://www.facebook.com'}}><FacebookIcon></FacebookIcon></IconButton>
                            <IconButton onClick={() => {window.location.href='http://www.instagram.com'}}><InstagramIcon></InstagramIcon></IconButton>
                            <IconButton onClick={() => {window.location.href='http://www.linkedin.com'}}><LinkedInIcon></LinkedInIcon></IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs container className="description">
                        <Typography className="p"> {t('aboutMe.description')}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </section>
    );
}

export default withNamespaces()(AboutMe);