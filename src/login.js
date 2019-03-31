import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

class Login extends Component {
    state = {
        email: '',
        password:'',
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

    onButtonClick = () => {
        const env = runtimeEnv();

        axios.post(env.REACT_APP_BACKEND_URL + 'login',{
            email: this.state.email,
            password:this.state.password,
        }
        )
        .then((response) => {
            window.localStorage.setItem('email', this.state.email);
            this.props.history.push("/dashboard/home")
        })
        .catch(function (error) {
            console.log(error);
            console.log(env.REACT_APP_BACKEND_URL)
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.register}>
                <Typography variant="h3" className={classes.heading} gutterBottom>
                    Login
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

                    <Button variant="contained" color="primary" onClick={this.onButtonClick} refresh='true' className={classes.button}>
                        Login
                    </Button>
                    <Link className={classes.title} color="textSecondary" to={'/forgot'} >
                        Forgot Password?
                    </Link>
                    <Link className={classes.title} color="textSecondary" to={'/register'} >
                        Dont have an account?
                    </Link>
                </form>
            </div>
        );
    }
}
export default withStyles(styles)(Login);
