import Post from "./Post";
import style from './PostList.module.css'
import NewPost from "./NewPost";
import {useState} from "react";

function PostList() {
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredText, setEnteredText] = useState('');

    function onChangeAuthorHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    function onChangeTextHandler(event) {
        setEnteredText(event.target.value)
    }

    return <>
        <NewPost onAuthorChange={onChangeAuthorHandler} onTextChange={onChangeTextHandler}/>
        <ul className={style.posts}>
            <Post author={enteredAuthor}
                  message={enteredText}/>
        </ul>
    </>
}

export default PostList;