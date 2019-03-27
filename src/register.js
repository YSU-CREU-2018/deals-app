import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
  check: {
      marginLeft: 10,
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
        birthday: '',
        sex: '',
        email: '',
        password:'',
        repeatPassword: '',
        likes: '',
        check: true,
    };

    handleFirstName = firstName => event => {
        this.setState({
            firstName: event.target.value,
        });
    };
    handleLastName = lastName => event => {
        this.setState({
            lastName: event.target.value,
        });
    };
    handleLikes = likes => event => {
        this.setState({
            likes: event.target.value,
        });
    };
    handleEmail = email => event => {
        this.setState({
            email: event.target.value,
        });
    };
    handlePassword = password => event => {
        this.setState({
            password: event.target.value,
        });
    };
    handleRepeat = repeatPassword => event => {
        this.setState({
            repeatPassword: event.target.value,
        });
    };
    handleBirthday = birthday => event => {
        this.setState({
            birthday: event.target.value,
        });
    };
    handleSex = sex => event => {
        this.setState({
            sex : event.target.value,
        });
    };
    handleCheck= check => event => {
        this.setState({ check : event.target.checked });
  };

    onButtonClick = () => {
        const env = runtimeEnv();
        axios.post(env.REACT_APP_BACKEND_URL + 'register',{
            'first-name': this.state.firstName,
            'last-name': this.state.lastName,
            birthday: this.state.birthday,
            sex: this.state.sex,
            email: this.state.email,
            likes: this.state.likes,
            password:this.state.password,
        }
        )
        .then((response) => {
            this.props.history.push("regsuccess")
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
                        onChange={this.handleFirstName('firstName')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-last-name"
                        label="Last Name"
                        className={classes.textField}
                        value={this.state.lastName}
                        onChange={this.handleLastName('lastName')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-likes"
                        helperText="Please enter some general interests, like 'techology' or 'fashion'"
                        label="Likes"
                        className={classes.textField}
                        value={this.state.likes}
                        onChange={this.handleLikes('likes')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        onChange={this.handleBirthday('birthday')}
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
                        onChange={this.handleSex('sex')}
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
                        onChange={this.handleEmail('email')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-password-input"
                        helperText="WARNING: Passwords are stored in plain text: do not use a password you use for other accounts."
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handlePassword('password')}
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
                        onChange={this.handleRepeat('repeatPassword')}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.check}
                          className={classes.check}
                          onChange={this.handleCheck('check')}
                          value="checkedA"
                          color="primary"
                        />
                      }
                      label="By checking this box you acknowledge the use of your information for purely academic research."
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
