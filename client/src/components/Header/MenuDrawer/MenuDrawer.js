import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import HotIcon from '@material-ui/icons/Whatshot';
import SavedIcon from '@material-ui/icons/TurnedInNot';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import logo from '../../../static/crn-logo.svg';

import './MenuDrawer.scss';

const styles = theme => ({
  list: {
    width: 250,
    marginTop: '120px',
  },
});

class TemporaryDrawer extends React.Component {
  render() {
    const { classes, isOpen, toggleDrawer, handleLogOut, user } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to={{ pathname: '/search', state: { user: user } }}>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          </Link>

          <ListItem button>
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <SavedIcon />
            </ListItemIcon>
            <ListItemText primary="Saved" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HotIcon />
            </ListItemIcon>
            <ListItemText primary="Suggested" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem onClick={handleLogOut} button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <div className="menu-drawer__header">
          <Link to="/">
            <img className="menu-drawer__logo" src={logo} alt="" />
          </Link>
        </div>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {sideList}
        </div>
      </Drawer>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
