import React, { Component, useState } from 'react'
import './navBar.scss';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function NavBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {

        setAnchorEl(event.currentTarget);


    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navBar">
            <label className="navBar__name">Olívia Silva</label>
            <div className="navBar__buttons">
                <Button className="button" href="#home"> Home </Button>
                <Button href="#aboutMe">About Me</Button>
                <Button href="#portfolio">Portfolio</Button>
                <Button href="#contacts">Contacts</Button>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Language</Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    keepMounted
                    PaperProps={{
                        style: {
                            transform: 'translateX(0%) translateY(30%)',
                        }
                    }}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClick}>Portugês</MenuItem>
                    <MenuItem onClick={handleClick}>Inglês</MenuItem>
                </Menu>
            </div>
        </div>
    )
}