import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const styles = {
    deleteButton: {
      float: 'right',
      padding: '0px 10px'
    },
  };

function TodoItem (props){
    const {id, title} = props.todo;
    const {classes} = props;

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
            <Button onClick={props.delTodo.bind(this, id)} className={classes.deleteButton} color="secondary" variant="outlined">delete</Button>
            </p>
        </div>
    )
}




export default withStyles(styles)(TodoItem)
