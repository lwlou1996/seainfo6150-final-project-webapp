import React from 'react'
import NaviBar from "../../Bar/NaviBar/NaviBar";
import { Switch, Route, Link } from "react-router-dom";

import styles from "./Homepage.module.css"
import PostItem from "../../ListItem/PostItem";
import BrandList from "../../ListComponent/BrandList";
import Foo from "../../Foo/Foo";
import AboutPage from "../../About/About";
import Bar from "../../Bar/Bar";
import Baz from "../../Baz/Baz";
import Error from "../../Error/Error";
import DetailPost from "../../Detail/DetailPost";

const Homepage = () => {

    const mockPosts = [
        {
            "id": "1",
            "title": "title 1",
            "intro": "Google Cloud provides encryption and/or integrity of data in transit and at rest by default. " +
                "We also employ other techniques like sandboxing to help protect our infrastructure and customer data. " +
                "This virtualization security model allows us to offer a secure multi-tenant architecture where " +
                "VMs can run isolated and protected from each other. ",
            "content": "content 1",
            "author": "author 1",
            "brand": "Google",
            "createDate": "createDate 1",
            "image": {
                "_url": "https://miro.medium.com/fit/c/400/266/1*aXQFPq3X-v5MNUMbxan3KQ.png",
                "img_text": "google example image",
                "size": 123
            }
        },
        {
            "id": "2",
            "title": "title 2",
            "intro": "intro 2",
            "content": "content 2",
            "author": "author 2",
            "brand": "Google",
            "createDate": "createDate 2",
            "image": {
                "_url": "https://miro.medium.com/fit/c/400/266/1*xu8SJS9xGZNiEJb-Lp5rTg@2x.jpeg",
                "img_text": "google example image",
                "size": 123
            }
        },
        {
            "id": "3",
            "title": "title 3",
            "intro": "intro 3",
            "content": "content 3",
            "author": "author 3",
            "brand": "Google",
            "createDate": "createDate 3",
            "image": {
                "_url": "https://www.posts/3",
                "img_text": "google example image",
                "size": 123
            }
        },
        {
            "id": "4",
            "title": "title 4",
            "intro": "intro 4",
            "content": "content 4",
            "author": "author 4",
            "brand": "Amazon",
            "createDate": "createDate 4",
            "image": {
                "_url": "https://www.posts/4",
                "img_text": "google example image",
                "size": 123
            }
        },
        {
            "id": "5",
            "title": "title 5",
            "intro": "intro 5",
            "content": "content 5",
            "author": "author 5",
            "brand": "Google",
            "createDate": "createDate 5",
            "image": {
                "_url": "https://www.posts/5",
                "img_text": "google example image",
                "size": 123
            }
        },
        {
            "id": "6",
            "title": "title 6",
            "intro": "intro 6",
            "content": "content 6",
            "author": "author 6",
            "brand": "Google",
            "createDate": "createDate 6",
            "image": {
                "_url": "https://www.posts/6",
                "img_text": "google example image",
                "size": 123
            }
        },
        {
            "id": "7",
            "title": "title 7",
            "intro": "intro 7",
            "content": "content 7",
            "author": "author 7",
            "brand": "Google",
            "createDate": "createDate 7",
            "image": {
                "_url": "https://www.posts/7",
                "img_text": "google example image",
                "size": 123
            }
        },
        {
            "id": "8",
            "title": "title 8",
            "intro": "intro 8",
            "content": "content 8",
            "author": "author 8",
            "brand": "Google",
            "createDate": "createDate 8",
            "image": {
                "_url": "https://www.posts/8",
                "img_text": "google example image",
                "size": 123
            }
        }
    ];

    let displayContent;

    console.log('mock类型' + typeof mockPosts);

    if (mockPosts.length) {
        displayContent = (
            <ul className={styles.textContainer}>
                {mockPosts.map((post) => (
                    <PostItem post={post} key={post.id} />
                ))}

                {/* display the post with the intended attr */}
                {/*{mockPosts*/}
                {/*    .filter((post) => post.author === "author 1")*/}
                {/*    .map((post) => (*/}
                {/*        <PostItem post={post} key={post.id} />*/}
                {/*    ))}*/}

            </ul>
        );
    } else {
        displayContent = <div>You have no data!</div>;
    }

    const brandListContent = new Set();

    if (mockPosts.length) {
        mockPosts.map(post => (
            brandListContent.add(post.brand)
        ))
    }

    let brandList = [];
    brandListContent.forEach((key, value) => (
        brandList.push(value)
    ))

    return(
        <div className={styles.container}>
            <div>
                <NaviBar />
            </div>

            <div className={styles.bodyPart}>

                <div className={styles.leftPart}>
                    {displayContent}
                </div>

                {/*todo: <description>*/}
                {/*<div className={styles.rightPart}>right part</div>*/}

                <div className={styles.rightPart}>
                    <BrandList brands={brandList} posts={mockPosts} />
                </div>
            </div>

        </div>

    );

}

export default Homepage;