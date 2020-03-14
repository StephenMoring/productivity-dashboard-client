import React from 'react';
import Todos from '../todoList/Todos';
import Header from '../Header';
import Footer from '../Footer';

const HobbyContainer = (props) => {
    return (
    <div>
        <Header />
        <Todos todos={props.todos} markComplete={props.markComplete}
            delTodo={props.delTodo}/>
        <Footer doneItems={props.todos}/>
    </div>);
}

export default HobbyContainer