import React from 'react';
import './App.css';
import Settings from './pages';
import {ThemeProvider} from '@mui/material';
import boomTheme from './theme';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BoomToolbar from './components/BoomToolbar';

function App() {
  return (
    <ThemeProvider theme={boomTheme}>
      <BoomToolbar title={'Boom Settings'} />

      <Router>
        <Switch>
          <Route exact path="/">
            <Settings />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
