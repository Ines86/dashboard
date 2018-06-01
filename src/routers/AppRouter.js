import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import MiniDrawer from '../components/MiniDrawer';
import WizardForm from '../components/forms/WizardForm';
import Forms from '../components/forms/Forms';
import Buttons from '../components/Buttons';
import Charts from '../components/Charts';
import Tables from '../components/Tables';
import Widgets from '../components/Widgets';
import CustomGrid from '../components/CustomGrid';
import TypographyPage from '../components/TypographyPage';

const theme = createMuiTheme({
  /* theme for v1.x */
 });

const AppRouter = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <div>
        <MiniDrawer
          docked={true}
          width={200}
        >
          <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/wizard" component={WizardForm} />
            <Route path="/forms" component={Forms} />
            <Route path="/help" component={HelpPage} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/charts" component={Charts} />
            <Route path="/tables" component={Tables} />
            <Route path="/grid" component={CustomGrid} />
            <Route path="/widgets" component={Widgets} />
            <Route path="/typography" component={TypographyPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </MiniDrawer>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default AppRouter;
