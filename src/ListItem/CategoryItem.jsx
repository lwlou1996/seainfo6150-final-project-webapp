import React from 'react'
import LinesEllipsis from "react-lines-ellipsis";

const CategoryItem = (props) => {

    const posts = props.posts;
    const brand = props.brand;

    console.log('brand', brand)
    console.log('posts', posts)

    return(

        <>
            <h2><a href={'/seainfo6150-final-project-webapp/category/'+brand}>{brand}</a></h2>

            <div>
                {posts
                    .filter((post) => post.brand === brand)
                    .map((post) => (
                        <div key={post.id}>
                            <h3><a href={'/seainfo6150-final-project-webapp/posts/'+post.id}>{post.title}</a></h3>

                            <div>
                                <LinesEllipsis text={post.intro}
                                               maxLine={3}
                                               ellipsis='...'
                                               trimRight basedOn='letters' />
                            </div>

                            <p>{post.author}</p>
                        </div>

                    ))}


            </div>
        </>

    );

}

export default CategoryItem;