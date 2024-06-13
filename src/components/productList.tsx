"use client";
import React from 'react';
import styles from '../styles/Checkoutpage.module.scss';

interface ProductListProps {
    count: number;
    setCount: (newCount: number) => void;
}



const ProductList: React.FC<ProductListProps> = ({ count, setCount }) => {
    const increaseCount = () =>{ setCount(count+1) }
    const decreaseCount = () =>{ setCount(count-1) }
    const setCountNull = () => { setCount(0) }
    return (
        <div className={styles.product_list}>
            <div className={styles.product_image}>
                <img src="../.././image1.png" alt="product_image" style={{ height: '10rem' }} />
            </div>
            <div className={styles.product_info}>
                <div className={styles.product_title}>
                    Salena Co-Ord Set - Off White & Pink
                </div>
                <div className={styles.product_size}>Size: L</div>
                <div className={styles.product_parent_price}>
                    <h3>₹ 2750.00</h3>
                    <div className={styles.mainaddCheckout}>
                        {count > 0 ? (
                            <div className={styles.addCheckout}>
                                <button style={{ height: '15px', width: '20px', cursor:'pointer' }} onClick={decreaseCount}>-</button>
                                <p>{count}</p>
                                <button style={{ height: '15px', width: '20px', cursor:'pointer' }} onClick={increaseCount}>+</button>
                            </div>
                        ) : (
                            <div className={styles.addCheckout}>
                                <button 
                                    className={styles.addCheckoutButton}
                                    onClick={increaseCount}
                                >
                                    Add
                                </button>
                            </div>
                        )}
                        {count && <div className={styles.removeButton}><span onClick={setCountNull}>Remove</span></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
