import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = {
    deleteButton: {
      float: 'right'
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
            <Button onClick={props.delTodo.bind(this, id)} className={classes.deleteButton} color="secondary" variant="outlined">x</Button>
            </p>
        </div>
    )
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}   



export default withStyles(styles)(TodoItem)
