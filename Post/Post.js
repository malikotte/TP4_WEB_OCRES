import React from 'react';
import "./Post.css"

function Post(props) {
    return (
        <div className="Post-div">
            <p>{props.post}</p>
            <button onClick={() => props.onClickButtonSuper(props.id)}>C'est super {props.score} 👍</button>
        </ div>
    )
}

export default Post;