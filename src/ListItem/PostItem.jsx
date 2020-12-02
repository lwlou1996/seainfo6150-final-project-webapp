import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

import styles from './PostItem.module.css'

const PostItem = (props) => {

    // const posts = [
    //     {
    //         "id": "1",
    //         "title": "title 1",
    //         "intro": "intro 1",
    //         "content": "content 1",
    //         "author": "author 1",
    //         "createDate": "createDate 1",
    //         "image": {
    //             "_url": "https://miro.medium.com/fit/c/400/266/1*aXQFPq3X-v5MNUMbxan3KQ.png",
    //             "size": 123
    //         }
    //     },
    //     {
    //         "id": "2",
    //         "title": "title 2",
    //         "intro": "intro 2",
    //         "content": "content 2",
    //         "author": "author 2",
    //         "createDate": "createDate 2",
    //         "image": {
    //             "_url": "https://www.posts/2",
    //             "size": 123
    //         }
    //     },
    //     {
    //         "id": "3",
    //         "title": "title 3",
    //         "intro": "intro 3",
    //         "content": "content 3",
    //         "author": "author 3",
    //         "createDate": "createDate 3",
    //         "image": {
    //             "_url": "https://www.posts/3",
    //             "size": 123
    //         }
    //     },
    //     {
    //         "id": "4",
    //         "title": "title 4",
    //         "intro": "intro 4",
    //         "content": "content 4",
    //         "author": "author 4",
    //         "createDate": "createDate 4",
    //         "image": {
    //             "_url": "https://www.posts/4",
    //             "size": 123
    //         }
    //     },
    //     {
    //         "id": "5",
    //         "title": "title 5",
    //         "intro": "intro 5",
    //         "content": "content 5",
    //         "author": "author 5",
    //         "createDate": "createDate 5",
    //         "image": {
    //             "_url": "https://www.posts/5",
    //             "size": 123
    //         }
    //     },
    //     {
    //         "id": "6",
    //         "title": "title 6",
    //         "intro": "intro 6",
    //         "content": "content 6",
    //         "author": "author 6",
    //         "createDate": "createDate 6",
    //         "image": {
    //             "_url": "https://www.posts/6",
    //             "size": 123
    //         }
    //     },
    //     {
    //         "id": "7",
    //         "title": "title 7",
    //         "intro": "intro 7",
    //         "content": "content 7",
    //         "author": "author 7",
    //         "createDate": "createDate 7",
    //         "image": {
    //             "_url": "https://www.posts/7",
    //             "size": 123
    //         }
    //     },
    //     {
    //         "id": "8",
    //         "title": "title 8",
    //         "intro": "intro 8",
    //         "content": "content 8",
    //         "author": "author 8",
    //         "createDate": "createDate 8",
    //         "image": {
    //             "_url": "https://www.posts/8",
    //             "size": 123
    //         }
    //     }
    // ];

    return(

        <div className={styles.container}>
            <div className={styles.textPart}>
                <h3><a href={'/posts/'+props.post.id}>{props.post.title}</a> - <span>{props.post.brand}</span></h3>

                <LinesEllipsis text={props.post.intro}
                               maxLine={2}
                               ellipsis='...'
                               trimRight basedOn='letters' />

                <p>{props.post.createDate} - {props.post.author}</p>
            </div>

            <div className={styles.imgPart}>
                <img src={props.post.image._url} alt={props.post.image.img_text}/>
            </div>
        </div>

    );

}

export default PostItem;