import React from 'react'
import './contacts.scss'
import { withNamespaces } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { Button, Grid, Typography, IconButton } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import * as emailjs from 'emailjs-com';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignSelf: "flex-end",
        height: "calc(100vh - 3.9rem)",
        overflowY: 'auto',
        
        '& > *': {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            marginRight: theme.spacing(3),
            marginLeft: theme.spacing(6),
        },
        '& input:valid + fieldset': {
            borderColor: 'white'
        },
        '& label': {
            '&.Mui-focused': {
                color: 'white',
            },
            color: 'white'
        },
        '& .MuiInputBase-input': {
            color: "white",
            'input:-internal-autofill-selected': {
                backgroundColor: 'black',
                color: 'black'
            }
        },

        '& .MuiTextField-root': {
            '&:hover label': {
                color: 'skyblue'
            },
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "white"
            },
            '&:hover fieldset': {
                borderColor: 'skyblue'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        }
    },
}));

const Contacts = ({ t }) => {
    const state = {
        name: 'Daniel Silva'
    }
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    //const messageHtml =  renderEmail(<MyEmail name={this.state.name} />); 

    const onSubmit = (data, e) => {
        e.preventDefault();
        //For a simple set by step explanation watch: https://www.youtube.com/watch?v=Lm5OKvh31_s
        emailjs.sendForm(
            "gmail", // Emailjs service ID - console,
            "template_drzSGLuL", //Emailjs template id,
            "form",
            "user_MbCahBypCSJ1Phr6g23Jw", //Emailjs user id
        ).then().catch();
        e.target.reset();
        console.log(data);
    }
    return (
        <section id="contacts">
            <div className="paper">
                <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container align="left" className="grid-container">
                        <Grid item container xs spacing={3}>
                            <Grid item xs={12}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h3" paragraph>{t('contacts.title')}</Typography>
                                </ThemeProvider>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required type="text" name="firstname" variant="outlined" label={t("contacts.firstName")}
                                    inputRef={register({ required: true })} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required type="text" name="lastname" variant="outlined" label={t("contacts.lastName")}
                                    inputRef={register({ required: true })} />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required type="email" name="email" variant="outlined" label={t("contacts.email")}
                                    inputRef={register({ required: true })} />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required type="text" name="subject" variant="outlined" label={t("contacts.subject")}
                                    inputRef={register({ required: true })} />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required multiline rows={10} type="text" name="description" variant="outlined"
                                    label={t("contacts.description")} inputRef={register({ required: true })} />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Button variant="outlined" name="submit" type="submit"> {t('contacts.sendEmail')} <SendIcon className="send-icon"></SendIcon></Button>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} sm={12} md={6}  spacing={3} justify="center" className="my-info">
                            <Grid item xs={6} align="left" className="my-info__items">
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h3" className="my-info__items--title" >{t('contacts.personal-info.title')}</Typography>
                                    <Typography variant="h5" className="my-info__items--email"><EmailIcon className="contact-icon" fontSize="small"></EmailIcon>{t('contacts.personal-email')}</Typography>
                                    <Typography variant="h5" className="my-info__items--phone"><PhoneIcon className="contact-icon" fontSize="small"></PhoneIcon>{t('contacts.personal-number')}</Typography>
                                    <Typography variant="h5" className="my-info__items--location"><LocationCityIcon className="contact-icon" fontSize="small"></LocationCityIcon>{t('contacts.location')}</Typography>
                                    <div className="link-icons">
                                        <IconButton target="_blank" href="http://www.facebook.com"><FacebookIcon></FacebookIcon></IconButton>
                                        <IconButton target="_blank" href='http://www.instagram.com'><InstagramIcon></InstagramIcon></IconButton>
                                        <IconButton target="_blank" href='http://www.linkedin.com'><LinkedInIcon></LinkedInIcon></IconButton>
                                        <IconButton target="_blank" href='http://www.youtube.com'><YouTubeIcon></YouTubeIcon></IconButton>
                                    </div>
                                </ThemeProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </section>
    )
}

export default withNamespaces()(Contacts);