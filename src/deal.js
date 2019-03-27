import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const styles = theme => ({
    root:{
        padding: 15,
    },
    dealtitle: {
        marginTop: 30,
        textAlign: 'center',
    },
    card: {
        maxWidth: 330,
        margin: 16,
    },
    media: {
        height: 140,
    },
    group: {
        display: 'flex',
        flexDirection: 'row',
    },
    item: {
        textAlign: 'center',
    }
});

const axios = require('axios');

class Deal extends Component {
    state = {
        rate: '',
    };

    handleChange = event => {
        const env = runtimeEnv();

        this.setState({ rate: event.target.value },
            () => {
                axios.post(env.REACT_APP_BACKEND_URL + 'deals/'+this.props.deal.uuid,{
                    email: window.localStorage.getItem('email'),
                    deal: this.props.deal.uuid,
                    rating:this.state.rate,
                }
                )
                .then((response) => {
                    console.log('rated')
                    console.log(this.state.rate)
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        );

    };

    render() {

        const { classes, deal } = this.props;
        return (
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        height="140"
                        image={deal.largeImageUrl}
                    />
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h4">
                                {deal.announcementTitle}
                            </Typography>
                            <Typography component="p">
                                {deal.options[0].price.formattedAmount}
                            </Typography>
                        </CardContent>
                        <Divider />
                    </CardActionArea>
                    <CardActions>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Rate:</FormLabel>
                            <RadioGroup
                                aria-label="Rate"
                                name="rates"
                                className={classes.group}
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel className={classes.item} value="1" control={<Radio />} label="1" />
                                <FormControlLabel className={classes.item} value="2" control={<Radio />} label="2" />
                                <FormControlLabel className={classes.item} value="3" control={<Radio />} label="3" />
                                <FormControlLabel className={classes.item} value="4" control={<Radio />} label="4" />
                                <FormControlLabel className={classes.item} value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                        </FormControl>
                    </CardActions>
                </Card>
        );
    }
}

Deal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Deal);
