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

function NavBar({t}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

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

    return (
        <div className="navBar">
            <Button className="button" href="#home"> {t('navBar.home')} </Button>
            <Button href="#aboutMe">{t('navBar.aboutMe')}</Button>
            <Button href="#portfolio">{t('navBar.portfolio')}</Button>
            <Button href="#contacts">{t('navBar.contacts')}</Button>
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
    )

}

export default withNamespaces()(NavBar);