import React, { Component } from 'react'
import PropTypes from 'prop-types'

function TodoItem (props){
    const {id, title} = props.todo;
    const divStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: props.todo.completed ? 'line-through' : 'none'
    }
    
    return (
        <div style={divStyle}>
            <p>
            <input type="checkbox" onChange={props.markComplete.bind(this, id)}/>
            {' '}
            {title}
            <button onClick={props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </p>
        </div>
    )
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color:'#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}



export default TodoItem
