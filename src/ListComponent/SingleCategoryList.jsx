import React from 'react'
import NaviBar from "../Bar/NaviBar/NaviBar";
import CategoryItem from "../ListItem/CategoryItem";

const SingleCategoryList = (props) => {

    const brand = props.brand;
    const posts = props.posts

    console.log('single list', brand)
    console.log('single list', posts)

    return(

        <div>

            <div>
                <NaviBar />
            </div>


            <div>
                <h1>{brand}</h1>

                <ul>
                    {posts
                        .filter(post => post.brand === brand)
                        .map(post => (
                            <div>
                                <h2>{post.title}</h2>

                                <p>{post.author}</p>

                                <div>
                                    {post.content}
                                </div>
                            </div>
                        ))

                    }
                </ul>
            </div>

        </div>

    );

}

export default SingleCategoryList;