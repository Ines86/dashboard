import React from 'react';
import Link from 'react-router-dom/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '@material-ui/icons/Dashboard';
import PieChart from '@material-ui/icons/PieChart';
import Widgets from '@material-ui/icons/Widgets';
import TextFormat from '@material-ui/icons/TextFormat';
import CheckBox from '@material-ui/icons/CheckBox';
import GridOn from '@material-ui/icons/GridOn';
import ContentPaste from '@material-ui/icons/ContentPaste';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';

const mailFolderListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/charts">
      <ListItem button>
        <ListItemIcon>
          <PieChart />
        </ListItemIcon>
        <ListItemText primary="Charts" />
      </ListItem>
    </Link>
    <Link to="/widgets">
      <ListItem button>
        <ListItemIcon>
          <Widgets />
        </ListItemIcon>
        <ListItemText primary="Widgets" />
      </ListItem>
    </Link>
    <Link to="/forms">
      <ListItem button>
        <ListItemIcon>
          <QuestionAnswer />
        </ListItemIcon>
        <ListItemText primary="Forms" />
      </ListItem>
    </Link>
    <Link to="/buttons">
      <ListItem button>
        <ListItemIcon>
          <CheckBox />
        </ListItemIcon>
        <ListItemText primary="Buttons" />
      </ListItem>
    </Link>
    <Link to="/typography">
      <ListItem button>
        <ListItemIcon>
          <TextFormat />
        </ListItemIcon>
        <ListItemText primary="Typography" />
      </ListItem>
    </Link>
    <Link to="/tables">
      <ListItem button>
        <ListItemIcon>
          <ContentPaste />
        </ListItemIcon>
        <ListItemText primary="Tables" />
      </ListItem>
    </Link>
    <Link to="/grid">
      <ListItem button>
        <ListItemIcon>
          <GridOn />
        </ListItemIcon>
        <ListItemText primary="Grid" />
      </ListItem>
    </Link>
  </div>
);

export default mailFolderListItems;