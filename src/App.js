import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/createStore';
import './App.css';
import HomeContainer from './components/Containers/HomeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={HomeContainer} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
