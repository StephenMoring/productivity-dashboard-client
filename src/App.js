import React, { Component }  from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  state = {
    todos:[
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

//Delete Todo
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

  render(){
    return (
      <div className="App">
      <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      <Footer doneItems={this.state.todos}/>
      </div>
    );
  }
}

export default App;
