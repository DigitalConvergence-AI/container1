import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge,  IconButton  } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExploreIcon from '@material-ui/icons/Explore';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1,  align: "center"
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  typography: {
    align: "center"
  },
  appbar: {
    alignItems: 'center',
  },
  dashboardicon: {
    alignItems: 'left',
  }
  
 
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <AppBar title="Code Platform" style={{ backgroundColor: '#000000' }} 
      {...rest}
          className={clsx(classes.root, classes.appbar, className)}>
      <Toolbar>
          <IconButton color="inherit" href='/codeplatform' size='small' fontSize="small">
          <FeaturedPlayListIcon />
            <Badge 
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
             >  Features
         
            </Badge>
          </IconButton>
          <IconButton color="inherit" href='/explore' size='small' fontSize="small">
          <ExploreIcon />
            <Badge 
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >  Explore
            
            </Badge>
          </IconButton>
          <IconButton color="inherit" href='/sign-in' size='small' fontSize="small">
          <LockOpenIcon />
            <Badge 
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >  Sign-In
              
            </Badge>
          </IconButton>
      
      <div className={classes.flexGrow} />
   
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
