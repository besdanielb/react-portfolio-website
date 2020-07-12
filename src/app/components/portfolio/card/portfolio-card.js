import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withNamespaces } from 'react-i18next'
import './portfolio-card.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 340,
        maxHeight: "60vh",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

const PortfolioCard = ({ t, props }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <CardMedia
                image={props.imagePath}
                className={classes.media}>
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
            </Typography>
                <Typography variant="body2">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests.
                 </Typography>
            </CardContent>
        </Card>
    );
}

export default withNamespaces()(PortfolioCard)