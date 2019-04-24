import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import runtimeEnv from '@mars/heroku-js-runtime-env';

import Deal from './deal';

const styles = theme => ({
    root:{
        padding: 15,
        margin: '0 auto',
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
        const env = runtimeEnv();

        axios.get(env.REACT_APP_BACKEND_URL + 'deals/')
          .then((response) =>  {
            this.setState({deals: response.data})
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
                    Here are some deals!
                </Typography>
                <Typography className={classes.dealtitle} variant="h5" component="h5">
                    Please rate them on a scale of 1-5 : 1 being the worst, 5 being the best
                </Typography>
                <Grid container className={classes.root} spacing={16}>
                    {this.state.deals && this.state.deals.map(deal =>
                        <Deal key={deal.uuid} deal={deal}></Deal>
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
