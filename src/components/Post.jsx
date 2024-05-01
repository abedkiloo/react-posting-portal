import style from  './Post.module.css'
function Post(props) {

    return <div className={style.post}>
        <p className={style.text}>{props.author}</p>
        <p className={style.author}>{props.message}</p>
    </div>
}

export default Post;