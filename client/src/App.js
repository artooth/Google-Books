import React, { Component } from 'react';
import BookDisplay from './components/BookDisplay';

import Header from './Header';
import Books from './Books';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
        {/* <BookDisplay /> */}
      </div>
    );
  }
}

export default App;