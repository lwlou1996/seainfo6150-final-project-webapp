import React from 'react'

import styles from './BrandList.module.css'

const BrandList = (props) => {

    console.log("values= " + props.brands);

    return(
        <div className={styles.container}>
            <h3>Category</h3>

            <ul className={styles.listContainer}>
                {props.brands.map(brand => (
                        <h4>{brand}</h4>
                ))}
            </ul>

        </div>


    );

}

export default BrandList;