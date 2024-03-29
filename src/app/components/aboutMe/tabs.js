/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { withNamespaces } from 'react-i18next'
import './aboutMe.scss'

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
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

/**
 * Material Ui tab component config
 */
const FullWidthTabs = (props) => {
  const { t } = props
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
    <div className="appbar-root">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="full width tabs example"
        >
          <Tab
            style={{ fontWeight: 'bold' }}
            label={t('aboutMe.tab1')}
            {...a11yProps(0)}
          />
          <Tab
            style={{ fontWeight: 'bold' }}
            label={t('aboutMe.tab2')}
            {...a11yProps(1)}
          />
          <Tab
            style={{ fontWeight: 'bold' }}
            label={t('aboutMe.tab3')}
            {...a11yProps(2)}
          />
          <Tab
            style={{ fontWeight: 'bold' }}
            label={t('aboutMe.tab4')}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography variant={'body1'} className="bold">
            {t('aboutMeTab.skills.info1.title')}
          </Typography>
          <Typography variant={'body2'} paragraph>
            {t('aboutMeTab.skills.info1.description')}
          </Typography>
          <Typography variant={'body1'} className="bold">
            {t('aboutMeTab.skills.info2.title')}
          </Typography>
          <Typography variant={'body2'} paragraph>
            {t('aboutMeTab.skills.info2.description')}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography variant={'body1'} className="bold">
            {t('aboutMeTab.exp.info1.title')}
          </Typography>
          <Typography variant={'body2'} paragraph>
            {t('aboutMeTab.exp.info1.description')}
          </Typography>
          <Typography variant={'body1'} className="bold">
            {t('aboutMeTab.exp.info2.title')}
          </Typography>
          <Typography variant={'body2'} paragraph>
            {t('aboutMeTab.exp.info2.description')}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography variant={'body1'} className="bold">
            {t('aboutMeTab.educ.info1.title')}
          </Typography>
          <Typography variant={'body2'} paragraph>
            {t('aboutMeTab.educ.info1.description')}
          </Typography>
          <Typography variant={'body1'} className="bold">
            {t('aboutMeTab.educ.info2.title')}
          </Typography>
          <Typography variant={'body2'} paragraph>
            {t('aboutMeTab.educ.info2.description')}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Typography variant={'body1'} className="bold">
            {t('aboutMeTab.awards.info1.title')}
          </Typography>
          <Typography variant={'body2'} paragraph>
            {t('aboutMeTab.awards.info1.description')}
          </Typography>
          <Typography variant={'body1'} className="bold">
            {t('aboutMeTab.awards.info2.title')}
          </Typography>
          <Typography variant={'body2'} paragraph>
            {t('aboutMeTab.awards.info2.description')}
          </Typography>
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}

export default withNamespaces()(FullWidthTabs)
