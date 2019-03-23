import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    home: {
        margin: 50,
        maxWidth: 1000,
    }
};

class Home extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.home}>
                <Typography variant="h5" component="h2">
                    Welcome! This is a mock deals sight for an undergraduate research project. Thank you so much for helping our team by participating in our research. Our team consists of mentors Dr. Yu,  Dr. Kerns,  and students Alyssa Adams, Olivia Bindas, Maddie Cope and Elizabeth Durflinger. We are researching recommendation systems in the deals industry. Through this web application you will be able to view and rate deals, view deals that you have rated and in time view deals that have been recommended to you based on your past ratings.  You will see these options in the left navigation column of this dashboard. Please go through and rate your stack of deals. Once finished, please press the submit button at the bottom of the page. You will receive an email when your next stack of deals is ready or when you have received  a stack of recommended deals.
                </Typography>
            </div>
        );
    }
}
export default  withStyles(styles)(Home);
