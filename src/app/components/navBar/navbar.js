import React from 'react'
import './navBar.scss';
import Button from '@material-ui/core/Button';
import i18next from 'i18next';
import i18n from '../../../i18n';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { withNamespaces } from 'react-i18next';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            color: 'white'
        },
    },
    toolbar: {
        marginTop: '9vw'
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function NavBar({ t, window }) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();

    const container = window !== undefined ? () => window().document.body : undefined;


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setAnchorEl(null);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <div className={classes.root}>
            <div className="navBar">
                <Hidden smUp>
                    <MenuIcon className="menuIcon" onClick={handleDrawerToggle}></MenuIcon>
                </Hidden>
                <Hidden smDown>
                    <Button href="#home"> {t('navBar.home')} </Button>
                    <Button href="#aboutMe">{t('navBar.aboutMe')}</Button>
                    <Button href="#portfolio">{t('navBar.portfolio')}</Button>
                    <Button href="#contacts">{t('navBar.contacts')}</Button>
                </Hidden>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><TranslateOutlinedIcon></TranslateOutlinedIcon>{i18next.language}<ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon></Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    keepMounted
                    variant="menu"
                    onClose={handleClose}>
                    <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                    <MenuItem onClick={() => changeLanguage('pt')}>Português</MenuItem>
                </Menu>
            </div>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        <div>
                            <div className={classes.toolbar} />
                            <Divider />
                            <List>
                                <ListItemLink href="#home" onClick={handleDrawerToggle}>
                                    <ListItemIcon><HomeIcon ></HomeIcon></ListItemIcon>
                                    <ListItemText primary={t("navBar.home")} />
                                </ListItemLink>
                                <ListItemLink href="#aboutMe" onClick={handleDrawerToggle}>
                                    <ListItemIcon><PersonIcon></PersonIcon></ListItemIcon>
                                    <ListItemText primary={t("navBar.aboutMe")} />
                                </ListItemLink>
                                <ListItemLink href="#portfolio" onClick={handleDrawerToggle}>
                                    <ListItemIcon><LibraryMusicIcon></LibraryMusicIcon></ListItemIcon>
                                    <ListItemText primary={t("navBar.portfolio")} />
                                </ListItemLink>
                                <ListItemLink href="#contacts" onClick={handleDrawerToggle}>
                                    <ListItemIcon><MailIcon></MailIcon></ListItemIcon>
                                    <ListItemText primary={t("navBar.contacts")} />
                                </ListItemLink>
                            </List>
                            <Divider />
                        </div>
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )

}

export default withNamespaces()(NavBar);