import { Helmet, HelmetProvider } from 'react-helmet-async';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TheMonster } from './components/TheMonster';
import { Privacy } from './features/Privacy';

const App = (): JSX.Element => {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet titleTemplate="%s | Code of Frankenstein">
          <title>Dotnet-React</title>
        </Helmet>
        <Router basename="/app">
          <Switch>
            <Route path="/the-monster">
              <TheMonster />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
          </Switch>
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default hot(App);
