import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from "./routes";

import store from './store';
import { Provider } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Provider>
    );
  }
}

export default App;