import React from 'react'
import './portfolio.scss'
import { withNamespaces } from 'react-i18next';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioCard from './card/portfolio-card';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      textAlign: 'center',
    },
  }));

const Portfolio = ({ t }) => {
    const classes = useStyles();

    const propsCard1 = {
        title: "title example",
        date: "September 14, 2014",
        imagePath: require("../../images/headphones-large.webp"),
        imageTitle: "Lindo exemplo"
    }

    const propsCard2 = {
        title: "title example",
        date: "September 14, 2014",
        imagePath: require("../../images/portfolio-3-large.webp"),
        imageTitle: "Lindo exemplo"
    }

    const propsCard3 = {
        title: "title example",
        date: "September 14, 2014",
        imagePath: require("../../images/portfolio-view-large.webp"),
        imageTitle: "Lindo exemplo"
    }

    const propsCard4 = {
        title: "title example",
        date: "September 14, 2014",
        imagePath: require("../../images/music-book-large.webp"),
        imageTitle: "Lindo exemplo"
    }

    return (
        <section id="portfolio">
            <Paper className="paper">
                <div className="container">
                    <Grid container justify="center" alignItems="center" spacing={0}>
                        <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center" onClick={() => { window.location.href = 'http://www.facebook.com' }}>
                            <PortfolioCard className="portfolio-card" props={propsCard1}></PortfolioCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
                            <PortfolioCard className={classes.card} props={propsCard2}></PortfolioCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
                            <PortfolioCard className={classes.card} props={propsCard3}></PortfolioCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
                            <PortfolioCard className={classes.card} props={propsCard3}></PortfolioCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
                            <PortfolioCard className={classes.card} props={propsCard4}></PortfolioCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
                            <PortfolioCard className={classes.card} props={propsCard1}></PortfolioCard>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </section>
    )
}

export default withNamespaces()(Portfolio);