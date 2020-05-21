import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { render } from '@testing-library/react';

class App extends Component{
  render() {
    return (
      <div>
        <TodoList/>
        
      </div>
    );
  }
}

export default App;
