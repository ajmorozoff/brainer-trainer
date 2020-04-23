import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';

import Trainer from './components/Trainer';

function App() {
  return (
    <Provider store={store}>
        <Trainer />
    </Provider>
  );
}

export default App;
