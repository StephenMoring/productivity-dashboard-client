import React from 'react'
const Footer = (props) => {
    return (
        <div>
            <h2>Items done on todo list: {props.doneItems.filter(e => e.completed).length} </h2>
        </div>
        );
};

export default Footer;