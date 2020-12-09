import React from 'react'

import styles from './BrandList.module.css'

const BrandList = (props) => {

    console.log("values= " + props.brands);

    return(
        <div className={styles.container}>
            <h3>Category</h3>

            <ul className={styles.listContainer}>
                {props.brands.map(brand => (
                    // <h4><a href={'/seainfo6150-final-project-webapp/category/'+props.post.brand}>{brand}</a></h4>
                    <h4><a href={'/category/'+brand}>{brand}</a></h4>
                    // <h4><a href={'/seainfo6150-final-project-webapp/category/'+brand}>{brand}</a></h4>
                ))}
            </ul>

        </div>


    );

}

export default BrandList;