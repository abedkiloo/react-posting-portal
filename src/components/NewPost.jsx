import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost(props) {

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onAuthorChange}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={props.onTextChange}/>
            </p>
        </form>
    );
}

export default NewPost;