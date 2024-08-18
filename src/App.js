import React from 'react';
import Keyboard from './components/keyboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Keyboard</h1>
      </header>
      <div className="Keyboard-container">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
