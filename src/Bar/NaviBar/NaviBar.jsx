import React from 'react'

import styles from './NaviBar.module.css'

const NaviBar = () => {

    return(
        <div className={styles.navContainer}>
            <header className={styles.container}>
                <nav>
                    <a href="/" className={styles.mainIcon}>STORE</a>
                </nav>

                <nav>
                    <ul className={styles.list}>
                        {/* these links should show you how to connect up a link to a specific route */}

                        <li className={styles.listItem}>
                            <a href="/about">About</a>
                        </li>

                        <li className={styles.listItem}>
                            <a href="/category">Category</a>
                        </li>

                        <li className={styles.listItem}>
                            <a href="/order">Order</a>
                        </li>

                    </ul>
                </nav>
            </header>


        </div>



    );

}

export default NaviBar;