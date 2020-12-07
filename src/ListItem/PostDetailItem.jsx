import React from 'react'
import NaviBar from "../Bar/NaviBar/NaviBar";

const PostDetailItem = (props) => {

    const posts = props.posts;
    const postId = props.postId;

    console.log(props.postId, props.posts)

    return(

        <div>
            <div>
                <NaviBar />

            </div>

            <div>

                {posts
                    .filter(post => post.id === postId)
                    .map(post => (
                        <div key={post.id}>

                            <h2>{post.title}</h2>

                            <p>{post.author}</p>

                            <div>
                                {post.content}
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>

    );

}

export default PostDetailItem;