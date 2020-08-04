/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
import React from 'react'
import './navBar.css'
import Button from '@material-ui/core/Button'
import i18next from 'i18next'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import { withNamespaces } from 'react-i18next'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import DescriptionIcon from '@material-ui/icons/Description'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import AudiotrackIcon from '@material-ui/icons/Audiotrack'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import GetAppIcon from '@material-ui/icons/GetApp'
import { makeStyles } from '@material-ui/core/styles'
import i18n from '../../../i18n'

const drawerWidth = 220

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex' },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      color: 'white',
    },
  },
  toolbar: { marginTop: '9vw' },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  content: { flexGrow: 1, padding: theme.spacing(3) },
}))

const NavBar = (props) => {
  const { t, window } = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const getCurrentLanguageLabel = () => {
    if (i18next.language === 'en') {
      return 'English'
    }
    if (i18next.language === 'pt') {
      return 'Português'
    }
  }

  const currentLanguageLabel = getCurrentLanguageLabel()
  const container =
    window !== undefined ? () => window().document.body : undefined

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setAnchorEl(null)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    getCurrentLanguageLabel()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  function ListItemLink(inputs) {
    return <ListItem button component="a" {...inputs} />
  }

  return (
    <div className={classes.root}>
      <div id="navbar">
        <Hidden mdUp>
          <MenuIcon className="menuIcon" onClick={handleDrawerToggle} />
        </Hidden>
        <Hidden smDown>
          <ul className="navbar">
            <li className="navbar__item active">
              <a
                data-page="home"
                className="navbar__item--link scroll active"
                href="#home"
                id="button-home"
              >
                {t('navBar.home')}
              </a>
            </li>
            <li className="navbar__item">
              <a
                data-page="aboutMe"
                className="navbar__item--link scroll"
                href="#aboutMe"
                id="button-aboutMe"
              >
                {t('navBar.aboutMe')}
              </a>
            </li>
            <li className="navbar__item">
              <a
                data-page="portfolio"
                className="navbar__item--link scroll"
                href="#portfolio"
              >
                {t('navBar.portfolio')}
              </a>
            </li>
            <li className="navbar__item">
              <a
                data-page="media"
                className="navbar__item--link scroll"
                href="#media"
              >
                {t('navBar.media')}
              </a>
            </li>
            <li className="navbar__item">
              <a
                data-page="gallery"
                className="navbar__item--link scroll"
                href="#gallery"
              >
                {t('navBar.gallery')}
              </a>
            </li>
            <li className="navbar__item">
              <a
                data-page="news"
                className="navbar__item--link scroll"
                href="#news"
              >
                {t('navBar.news')}
              </a>
            </li>
            <li className="navbar__item">
              <a
                data-page="contacts"
                className="navbar__item--link scroll"
                href="#contacts"
              >
                {t('navBar.contacts')}
              </a>
            </li>
            <div className="border" />
          </ul>
        </Hidden>
        <div className="language-button-container">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <TranslateOutlinedIcon />
            {currentLanguageLabel}
            <ExpandMoreOutlinedIcon />
          </Button>
          <Menu
            style={{ top: '2rem', width: '12rem' }}
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            keepMounted
            variant="menu"
            onClose={handleClose}
          >
            <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage('pt')}>Português</MenuItem>
          </Menu>
        </div>
      </div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div>
              <div className={classes.toolbar} />
              <List>
                <ListItemLink
                  href="#home"
                  className="drawer__icon"
                  onClick={handleDrawerToggle}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('navBar.home')} />
                </ListItemLink>
                <ListItemLink href="#aboutMe" onClick={handleDrawerToggle}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('navBar.aboutMe')} />
                </ListItemLink>
                <ListItemLink href="#portfolio" onClick={handleDrawerToggle}>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('navBar.portfolio')} />
                </ListItemLink>
                <ListItemLink href="#media" onClick={handleDrawerToggle}>
                  <ListItemIcon>
                    <AudiotrackIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('navBar.media')} />
                </ListItemLink>
                <ListItemLink href="#gallery" onClick={handleDrawerToggle}>
                  <ListItemIcon>
                    <PhotoLibraryIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('navBar.gallery')} />
                </ListItemLink>
                <ListItemLink href="#news" onClick={handleDrawerToggle}>
                  <ListItemIcon>
                    <AnnouncementIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('navBar.news')} />
                </ListItemLink>
                <ListItemLink href="#contacts" onClick={handleDrawerToggle}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('navBar.contacts')} />
                </ListItemLink>
                <ListItemLink
                  href="/files/cv.txt"
                  download
                  className="download-button"
                >
                  <ListItemIcon>
                    <GetAppIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('aboutMe.downloadCV')} />
                </ListItemLink>
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default withNamespaces()(NavBar)
