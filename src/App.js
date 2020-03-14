import React, { Component }  from 'react';
import './App.css';
import HobbyContainer from './components/hobbyContainer/HobbyContainer'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

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
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Productivity Dashboard
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <HobbyContainer todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
