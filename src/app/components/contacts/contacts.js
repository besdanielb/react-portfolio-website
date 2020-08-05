/* eslint-disable react/prop-types */
import React from 'react'
import './contacts.css'
import { withNamespaces } from 'react-i18next'
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import { Button, Grid, Typography, IconButton } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import YouTubeIcon from '@material-ui/icons/YouTube'
import * as emailjs from 'emailjs-com'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignSelf: 'flex-end',
    height: 'calc(100vh - 3.9rem)',
    overflowY: 'auto',
    marginTop: '3.9rem',

    '& > *': {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      marginRight: theme.spacing(3),
      marginLeft: theme.spacing(6),
    },
    '& input:valid + fieldset': { borderColor: 'white' },
    '& label': { '&.Mui-focused': { color: 'white' }, color: 'white' },
    '& .MuiInputBase-input': {
      color: 'white',
      'input:-internal-autofill-selected': {
        backgroundColor: 'black',
        color: 'black',
      },
    },

    '& .MuiTextField-root': { '&:hover label': { color: 'skyblue' } },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'white' },
      '&:hover fieldset': { borderColor: 'skyblue' },
      '&.Mui-focused fieldset': { borderColor: 'white' },
    },
  },
}))

/**
 * Contact Me page component
 */
const Contacts = (props) => {
  const { t } = props
  const classes = useStyles()
  const { register, handleSubmit } = useForm()

  // For the email service we decided to use EmailJS to facilitate this process. To associate your email adress to use this service follow this steps:
  // - Create and account on Emailjs (https://www.emailjs.com/) and add the email service (Gmail in the example bellow)
  // - Go to email templates and you can edit the sample email template
  // - And then just paste your user info bellow. That's it!
  const onSubmit = (data, e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'gmail', // Emailjs service ID,
        'template_drzSGLuL', // Emailjs template id,
        'form',
        'user_MbCahBypCSJ1Phr6g23Jw', // Emailjs user id (go to Account, then Api keys and grab the User ID)
      )
      .then()
      .catch()
    e.target.reset()
  }
  return (
    <section id="contacts">
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Grid container align="left" className="grid-container">
          <Grid item xs={12} style={{ height: 'fit-content' }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3" paragraph className="title">
                {t('contacts.title')}
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item container xs spacing={3} className="form-container">
            <Grid item xs={12} md={6}>
              <TextField
                required
                type="text"
                name="firstname"
                variant="outlined"
                label={t('contacts.firstName')}
                inputRef={register({ required: true })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                type="text"
                name="lastname"
                variant="outlined"
                label={t('contacts.lastName')}
                inputRef={register({ required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="email"
                name="email"
                variant="outlined"
                label={t('contacts.email')}
                inputRef={register({ required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="text"
                name="subject"
                variant="outlined"
                label={t('contacts.subject')}
                inputRef={register({ required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                multiline
                rows={10}
                type="text"
                name="description"
                variant="outlined"
                label={t('contacts.description')}
                inputRef={register({ required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                aria-label="Send email"
                name="submit"
                type="submit"
              >
                {t('contacts.sendEmail')}
                <SendIcon className="send-icon" />
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={6}
            spacing={3}
            justify="center"
            align="center"
            className="my-info"
          >
            <Grid item align="center" className="my-info__items">
              <ThemeProvider theme={theme}>
                <div className="my-info__contact-info" id="email">
                  <div className="my-info__contact-info--icon">
                    <EmailIcon className="contact-icon" fontSize="large" />
                  </div>
                  <div className="my-info__contact-info--content">
                    <Typography
                      variant="body1"
                      paragraph
                      className="my-info__items--content--text"
                    >
                      {/* Your first email address */}
                      first-email@gmail.com
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      className="my-info__items--content--text"
                    >
                      {/* Your second email address */}
                      second-email@gmail.com
                    </Typography>
                  </div>
                </div>
                <div className="my-info__contact-info">
                  <div className="my-info__contact-info--icon">
                    <PhoneIcon className="contact-icon" fontSize="large" />
                  </div>
                  <div className="my-info__contact-info--content">
                    <Typography
                      variant="body1"
                      paragraph
                      className="my-info__items--content--text"
                    >
                      {/* Your first phone number */}
                      +351 999 999 999
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      className="my-info__items--content--text"
                    >
                      {/* Your second phone number */}
                      +351 222 222 222
                    </Typography>
                  </div>
                </div>
                <div className="division" />
                <div className="division" style={{ marginTop: '5px' }} />
                <div className="link-icons">
                  {/* Replace these URLs with your profile urls */}
                  <IconButton
                    target="_blank"
                    rel="noopener"
                    href="http://www.facebook.com"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    target="_blank"
                    rel="noopener"
                    href="http://www.instagram.com"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    target="_blank"
                    rel="noopener"
                    href="http://www.linkedin.com"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    target="_blank"
                    rel="noopener"
                    href="http://www.youtube.com"
                  >
                    <YouTubeIcon />
                  </IconButton>
                </div>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </section>
  )
}

export default withNamespaces()(Contacts)
