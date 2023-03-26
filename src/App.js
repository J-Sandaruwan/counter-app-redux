import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;