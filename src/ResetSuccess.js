import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  reset: {
    padding: '100px',
    textAlign: 'center',
},
});

class resetSuccess extends Component {

    onButtonClick = () => {
        this.props.history.push("login")
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.reset}>
                <Typography variant="h3" className={classes.heading} gutterBottom>
                    Your Password has been reset. You may now login.
                </Typography>
                    <Button variant="contained" color="primary" onClick={this.onButtonClick} className={classes.button}>
                        Login
                    </Button>
            </div>
        );
    }
}
export default withStyles(styles)(resetSuccess);
