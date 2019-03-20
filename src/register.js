import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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

const sex = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        sex: '',
        email: '',
        password:'',
        repeatPassword: '',
    };

    handleChange = firstName => event => {
        this.setState({
            [firstName]: event.target.value,
        });
    };
    handleChange = lastName => event => {
        this.setState({
            [lastName]: event.target.value,
        });
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
    handleChange = age => event => {
        this.setState({
            [age]: event.target.value,
        });
    };
    handleChange = sex => event => {
        this.setState({
            [sex]: event.target.value,
        });
    };

    onButtonClick = () => {
        axios.post('http://localhost:3000/register',{
            'first-name': this.state.firstName,
            'last-name': this.state.lastName,
            age: this.state.age,
            sex: this.state.sex,
            email: this.state.email,
            password:this.state.password,
        }
        )
        .then(function (response) {
            console.log(response);
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
                    Register
                </Typography>

                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-first-name"
                        label="First Name"
                        className={classes.textField}
                        value={this.state.firstName}
                        onChange={this.handleChange('firstName')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-last-name"
                        label="Last Name"
                        className={classes.textField}
                        value={this.state.lastName}
                        onChange={this.handleChange('lastName')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        id="outlined-select-sex"
                        select
                        label="Select"
                        className={classes.textField}
                        value={this.state.sex}
                        onChange={this.handleChange('sex')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your sex"
                        margin="normal"
                        variant="outlined"
                        >
                        {sex.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

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
                        helperText="WARNING: Passwords are stored in plain text: do not use a password you use for other accounts."
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
                        Register
                    </Button>
                </form>
            </div>
        );
    }
}
export default withStyles(styles)(Register);