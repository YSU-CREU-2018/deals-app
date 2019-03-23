import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const axios = require('axios');

const styles = {
  profile:{
      display: 'flex',
      justifyContent: 'center',
  },
  card: {
    maxWidth: 500,
    minWidth: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Profile extends Component {

    state = {
        profile: {},
    };

    componentDidMount(){
        axios.post('http://localhost:3000/profile',{
            email: window.localStorage.getItem('email'),
        }
        )
        .then((response) => {
            this.setState({profile: response.data[0]})
            console.log(response)
            console.log(window.localStorage.getItem('email'))
        })
        .catch(function (error) {
            console.log(window.localStorage.getItem('email'))
            console.log(error);
        });
    }

    render() {
        const { classes } = this.props;
        console.log(this.state)
        return (
            <div className={classes.profile}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Name: {this.state.profile['first-name']} {this.state.profile['last-name']}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Birthday: {this.state.profile.age}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Email: {this.state.profile.email}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Likes: {this.state.profile.likes}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Sex: {this.state.profile.sex}
                    </Typography>
                </CardContent>
            </Card>
            </div>
        );
    }
}
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Profile);
