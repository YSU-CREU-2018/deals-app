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

const styles = theme => ({
    root:{
        padding: 20,
        width: '100%',
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

class Deals extends Component {
    state = {
        deals: [],
        rate: '',
    };

    handleChange = event => {
    this.setState({ rate: event.target.value });
  };

    componentDidMount(){
        axios.get('http://localhost:3000/deals/')
          .then((response) =>  {
            this.setState({deals: response.data})
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }

    render() {

        const { classes } = this.props;
        return (
            <div className={classes.deals}>
                <Typography className={classes.dealtitle} variant="h3" component="h3">
                    Here's some deals!
                </Typography>
                <Typography className={classes.dealtitle} variant="h5" component="h5">
                    Please rate them by selecting a rate option.
                </Typography>
                <Grid container className={classes.root} spacing={16}>
                    {this.state.deals.map(deals =>
                        <Grid key={deals.uuid} item>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    height="140"
                                    image={deals.largeImageUrl}
                                />
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h4">
                                            {deals.announcementTitle}
                                        </Typography>
                                        <Typography component="p">
                                            {deals.options[0].price.formattedAmount}
                                        </Typography>
                                        <Typography component="p" dangerouslySetInnerHTML={{__html: deals.options[0].details[0].description}}>
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
                        </Grid>
                    )}
                </Grid>
            </div>
        );
    }
}

Deals.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Deals);
