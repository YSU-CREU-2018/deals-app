import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import runtimeEnv from '@mars/heroku-js-runtime-env';


const styles = theme => ({
  register: {
    padding: '100px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',

    justifyContent: 'center',
    margin: '0 auto',
    flexWrap: 'wrap',
    maxWidth: '327px',
  },
  heading:{
    textAlign: 'center',
},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Forgot extends Component {
    state = {
        email: '',
        password:'',
        repeatPassword:'',
    };

    handleChange = email => event => {
        this.setState({
            [email]: event.target.value,
        });
    };
    handleChange = password => event => {
        this.setState({
            [password]: event.target.value,
        });
    };
    handleChange = repeatPassword => event => {
        this.setState({
            [repeatPassword]: event.target.value,
        });
    };


    onButtonClick = () => {
        const env = runtimeEnv();

        axios.post(env.REACT_APP_BACKEND_URL + 'forgot',{
            email: this.state.email,
            password:this.state.password,
        }
        )
        .then((response) => {
            this.props.history.push("resetSuccess")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.register}>
                <Typography variant="h3" className={classes.heading} gutterBottom>
                    Reset Password
                </Typography>

                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-repeated-password-input"
                        helperText="WARNING: Passwords are stored in plain text: do not use a password you use for other accounts."
                        label=" Repeat Password"
                        className={classes.textField}
                        value={this.state.repeatPassword}
                        onChange={this.handleChange('repeatPassword')}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />

                    <Button variant="contained" color="primary" onClick={this.onButtonClick} className={classes.button}>
                        Reset
                    </Button>
                </form>
            </div>
        );
    }
}
export default withStyles(styles)(Forgot);
