/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { withNamespaces } from 'react-i18next'

function TabPanel(props) {
  const { children, value, index } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box p={3} style={{ backgroundColor: 'transparent' }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return { id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}` }
}

const useStyles = makeStyles(() => ({ root: { backgroundColor: 'transparent',
  marginTop: '2vw',
  maxWidth: '90%' } }))

const FullWidthTabs = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Main Skills" {...a11yProps(0)} />
          <Tab label="Experience" {...a11yProps(1)} />
          <Tab label="Education" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography variant={'h5'} paragraph>Music Composition</Typography>
          <Typography variant={'body2'} paragraph>Im actually super good, you have no idea</Typography>
          <Typography variant={'h5'} paragraph>Chatear o peeps</Typography>
          <Typography variant={'body2'} paragraph>Isto é o que eu gosto mais de fazer</Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography variant={'h5'} paragraph>Experience? Nice meme bro</Typography>
          <Typography variant={'body2'} paragraph>Are you dumb, stupid or dumb?</Typography>
          <Typography variant={'h5'} paragraph>Chatear o peeps</Typography>
          <Typography variant={'body2'} paragraph>Isto é o que eu gosto mais de fazer</Typography>
          <Typography variant={'h5'} paragraph>Music Composition</Typography>
          <Typography variant={'body2'} paragraph>Im actually super good, you have no idea</Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography variant={'h5'} paragraph>Grande ESMAE (07/08/1996 - 01/02/2039)</Typography>
          <Typography variant={'body2'} paragraph>Podia ter ido para Aveiro que é melhor, mas era longe e não me deixam andar sozinha</Typography>
          <Typography variant={'h5'} paragraph>Chatear o peeps</Typography>
          <Typography variant={'body2'} paragraph>Isto é o que eu gosto mais de fazer</Typography>
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}

export default withNamespaces()(FullWidthTabs)
