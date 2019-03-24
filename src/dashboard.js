import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import InboxIcon from '@material-ui/icons/Inbox';
import HomeIcon from '@material-ui/icons/Home';
import CancelIcon from '@material-ui/icons/Cancel';


import Home from './home';
import Profile from './profile';
import Deals from './deals';



const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
  body: {
      marginTop: 64,
  }
});

class Dashboard extends Component {

    onLogout = () => {
        window.localStorage.clear()
        console.log('clear')
        console.log(window.localStorage.getItem('email'));
    };

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
              <CssBaseline />
              <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                  <Typography variant="h6" color="inherit" noWrap>
                    Deal Bunny
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.toolbar} />
                <List>
                    <Link to={'/dashboard/home'}>
                        <ListItem button>
                          <ListItemIcon><HomeIcon /></ListItemIcon>
                          <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link to={'/dashboard/profile'}>
                        <ListItem button>
                              <ListItemIcon><FaceIcon /></ListItemIcon>
                              <ListItemText primary={'Profile'} />
                        </ListItem>
                    </Link>
                    <Link to={'/dashboard/deals'}>
                        <ListItem button>
                          <ListItemIcon><InboxIcon /></ListItemIcon>
                          <ListItemText primary={'Deals'} />
                        </ListItem>
                    </Link>
                    <Link to={'/login'} refresh="true" onClick={this.onLogout}>
                        <ListItem button>
                          <ListItemIcon><CancelIcon /></ListItemIcon>
                          <ListItemText primary={'Logout'} />
                        </ListItem>
                    </Link>
                </List>
              </Drawer>

              <div className={classes.body}>
                  <Route path='/dashboard/home' component={Home} />
                  <Route path='/dashboard/profile' component={Profile} />
                  <Route path='/dashboard/deals' component={Deals} />
              </div>

            </div>
        );
    }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
