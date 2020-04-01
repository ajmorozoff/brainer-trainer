import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';

import './App.css';
import Trainer from './components/input/Trainer';

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <Trainer />
      </div>
    </Provider>
  );
}

export default App;
