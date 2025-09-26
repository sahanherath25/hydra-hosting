"use client"

import React, {useState} from 'react';
import styles from "@/styles/Navbar.module.scss"
import Link from "next/link";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (

        <header className={styles.navbar}>
            <div className={styles.logo}>Hydra</div>
            <nav className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
                <ul>
                    <li><Link className={styles.link} href={"/"}>Home</Link></li>
                    <li><Link className={styles.link} href={"/products"}>Products</Link></li>
                    <li><Link className={styles.link} href={"/signup"}>Signup</Link></li>
                    <li><Link className={styles.btn} href={"/contact"}>Contact</Link></li>
                    {/*<li><a href="#" className={styles.btn}>Contact</a></li>*/}
                </ul>
            </nav>

            <div
                className={`${styles.toggle} ${isOpen ? styles.open : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Navbar;

