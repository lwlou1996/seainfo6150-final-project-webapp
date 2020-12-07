import React from 'react'
import NaviBar from "../Bar/NaviBar/NaviBar";
import CategoryItem from "../ListItem/CategoryItem";

const CategoryList = (props) => {

    const brandListContent = new Set();

    if (props.posts.length) {
        props.posts.map(post => (
            brandListContent.add(post.brand)
        ))
    }

    let brandList = [];
    brandListContent.forEach((key, value) => (
        brandList.push(value)
    ))

    console.log(brandList)

    return(

        <div>

            <div>
                <NaviBar />
            </div>

            <div>
                <ul>
                    {brandList.map(brand => (
                        <CategoryItem brand={brand} posts={props.posts} />
                    ))}
                </ul>
            </div>

        </div>

    );

}

export default CategoryList;