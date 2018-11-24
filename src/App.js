import React, { Component } from 'react';
import './App.css';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Jotto Game</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
