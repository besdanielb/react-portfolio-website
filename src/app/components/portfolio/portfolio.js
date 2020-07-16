/* eslint-disable global-require */
import React from 'react'
import './portfolio.scss'
import { withNamespaces } from 'react-i18next'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PortfolioCard from './card/portfolio-card'

const useStyles = makeStyles(() => ({ root: { flexGrow: 1 },
  card: { textAlign: 'center' } }))

const Portfolio = () => {
  const classes = useStyles()

  const propsCard1 = { cardTitle: 'title example',
    // eslint-disable-next-line global-require
    imagePath: require('../../images/headphones-large.webp'),
    cardDescription: 'Lindo exemplo' }

  const propsCard2 = { cardTitle: 'title example',
    imagePath: require('../../images/portfolio-3-large.webp'),
    cardDescription: 'Lindo exemplo' }

  const propsCard3 = { cardTitle: 'title example',
    imagePath: require('../../images/portfolio-view-large.webp'),
    cardDescription: 'Lindo exemplo' }

  const propsCard4 = { cardTitle: 'title example',
    imagePath: require('../../images/music-book-large.webp'),
    cardDescription: 'Lindo exemplo' }

  return (
    <section id="portfolio">
      <div className="container">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center" onClick={() => { window.location.href = 'http://www.facebook.com' }}>
            <PortfolioCard className="portfolio-card" props={propsCard1} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
            <PortfolioCard className={classes.card} props={propsCard2} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
            <PortfolioCard className={classes.card} props={propsCard3} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
            <PortfolioCard className={classes.card} props={propsCard3} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
            <PortfolioCard className={classes.card} props={propsCard4} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="card" align="center">
            <PortfolioCard className={classes.card} props={propsCard1} />
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default withNamespaces()(Portfolio)
