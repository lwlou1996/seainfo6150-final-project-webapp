import React from 'react'

import styles from './NaviBar.module.css'

const NaviBar = () => {

    return(
        <div className={styles.navContainer}>
            <header className={styles.container}>
                <nav>
                    {/*<a href="/seainfo6150-final-project-webapp" className={styles.mainIcon}>POSub</a>*/}
                    <a href="/" className={styles.mainIcon}>POSub</a>
                </nav>

                <nav>
                    <ul className={styles.list}>
                        {/* these links should show you how to connect up a link to a specific route */}

                        <li className={styles.listItem}>
                            {/*<a href="/seainfo6150-final-project-webapp/about">About</a>*/}
                            <a href="/about">About</a>
                        </li>

                        <li className={styles.listItem}>
                            {/*<a href="/seainfo6150-final-project-webapp/category">Category</a>*/}
                            <a href="/category">Category</a>
                        </li>

                        {/*<li className={styles.listItem}>*/}
                        {/*    <a href="/seainfo6150-final-project-webapp/order">Order</a>*/}
                        {/*</li>*/}

                    </ul>
                </nav>
            </header>


        </div>



    );

}

export default NaviBar;