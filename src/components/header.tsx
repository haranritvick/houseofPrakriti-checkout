"use client";

import React, { useState, useEffect } from 'react';
import { LuUser } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

import styles from "../styles/Headerpage.module.scss";

interface HeaderProps {
  count: number;
}

const Header: React.FC<HeaderProps> = ({ count }) => {
  return (
    <header id='header'>
      <div className={styles.main_container}>
        <div className={styles.topContainer}>REGISTER & GET FLAT 10% OFF ON YOUR 1ST PURCHASE. USE CODE: WELCOME</div>
        <div>
          <div className={styles.main_content}>
            <h1 className={styles.logo}>🌲PRAKRTI</h1>
            {/* <img className={styles.logo} src="../../logo.png" alt="" /> */}
            <div className={styles.search}>
              <BsSearch className={styles.search_icon} />
              <input className={styles.search_input} type='text' placeholder='Search product and more..' />
            </div>
            <div className={styles.icon_container}>
              <FaRegHeart />
              <LuUser />
              <div className={styles.shoppingcart}>
                <FiShoppingCart />
                <span className={styles.shoppingcount}>{count}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className={styles.categoryContainer}>
            <li className={styles.categorytitles}>NEW</li>
            <li className={styles.categorytitles}>CO-ORD-SETS</li>
            <li className={styles.categorytitles}>DRESSES & JUMPSUITS</li>
            <li className={styles.categorytitles}>ESSENTIALS & LOUNGEWEAR</li>
            <li className={styles.categorytitles}>KURTA & KURTA SETS</li>
            <li className={styles.categorytitles}>TOPS</li>
            <li className={styles.categorytitles}>BOTTOMS</li>
            {/* <li className={styles.categorytitles}>Categorys</li>
            <li className={styles.categorytitles}>Categorys</li>
            <li className={styles.categorytitles}>Categorys</li>
            <li className={styles.categorytitles}>Categorys</li>
            <li className={styles.categorytitles}>SALE</li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
