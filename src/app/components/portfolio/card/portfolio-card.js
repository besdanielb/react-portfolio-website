/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withNamespaces } from 'react-i18next'
import './portfolio-card.scss'

const useStyles = makeStyles(() => ({ root: { maxWidth: 340,
  maxHeight: '60vh' },
media: { height: 0,
  paddingTop: '56.25%', // 16:9
// eslint-disable-next-line object-curly-newline
} }))

const PortfolioCard = (props) => {
  const classes = useStyles()
  const { props: { imagePath, cardTitle, cardDescription } } = props

  return (
    <Card className={classes.root}>
      <CardMedia
        image={imagePath}
        className={classes.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {cardTitle}
        </Typography>
        <Typography variant="body2">
          {cardDescription}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withNamespaces()(PortfolioCard)
