import React from 'react'
import { withNamespaces } from 'react-i18next'
import './media.scss'
import { Grid } from '@material-ui/core'

const Media = () => (
  <section id="media">
    <div className="container">
      <Grid container spacing={5} className="grid-container">
        <Grid item xs={12} sm={6} lg={4}>
          <iframe title="song" className="iframe" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647246442&color=%2345c7ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true" />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <iframe title="song" className="iframe" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647246442&color=%2345c7ff&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <iframe title="song" className="iframe" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647246442&color=%2345c7ff&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <iframe title="song" className="iframe" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647246442&color=%2345c7ff&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <iframe title="song" className="iframe" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647246442&color=%2345c7ff&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <iframe title="song" className="iframe" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647246442&color=%2345c7ff&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        </Grid>
      </Grid>
    </div>
  </section>
)

export default withNamespaces()(Media)
