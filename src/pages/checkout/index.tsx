"use client";
import React, { useState, useEffect } from 'react';
import styles from "../../styles/Checkoutpage.module.scss";
import Header from '../../components/header';
import ProductList from '@/components/productList';
import AnchorTemporaryDrawer from '@/components/drawer';

const CheckoutPage: React.FC = () => {
    const initialCounts = JSON.parse(localStorage.getItem('cartCounts') || '[]');
    const [counts, setCounts] = useState<number[]>(initialCounts);

    useEffect(() => {
        localStorage.setItem('cartCounts', JSON.stringify(counts));
    }, [counts]);

    const updateCount = (index: number, newCount: number) => {
        setCounts(prevCounts => {
            const updatedCounts = [...prevCounts];
            updatedCounts[index] = newCount;
            return updatedCounts;
        });
    };

    const [flag,setFlag] = useState(true);
    const removeAll = () => {
        setCounts(prevCounts => {
            const updatedCounts = [...prevCounts];
            for (let i = 0; i < updatedCounts.length; i++) {
                updatedCounts[i] = 0;
            }
            setFlag(false);
            return updatedCounts;
        });
    }


    const totalCount = counts.reduce((sum, count) => sum + count, 0);

    const [toggle, setToggle] = useState("");

    const handleToggleDrawer = (anchor: string, open: boolean) => {
        setToggle(open ? anchor : "");
    };

    return (
        <>
            <Header count={totalCount} />
            <div className={styles.checkout_main_container}>
                <div className={styles.main_contianer}>
                    <div className={styles.cart_contianer}>
                        <div className={styles.cart_header}>
                            <div className={styles.review_cart}>
                                <h3 style={{ fontSize: '1.2rem', color: '#525271' }}>Review Cart</h3>
                                <h6>1 ITEM</h6>
                            </div>
                            <div className={styles.removeAll}>
                                <span className={styles.anchor} onClick={removeAll}><h3>Remove All</h3></span>
                            </div>
                        </div>
                        {/* Product List Component */}
                        {flag && 
                        <div className={styles.product_container}>
                            <ProductList count={counts[0]} setCount={newCount => updateCount(0, newCount)} />
                            <ProductList count={counts[1]} setCount={newCount => updateCount(1, newCount)} />
                        </div>}
                    </div>
                    <div className={styles.address_contianer}>
                        <div className={styles.addressButton}>
                            <div className={styles.addressText} onClick={() => handleToggleDrawer('right', true)}>Complete your address</div>
                            <div className={styles.estimate}>Delivery estimate</div>
                            <div className={styles.instruction}>Delivery Instruction</div>
                            <div className={styles.deliveryNote}>
                                <span><img className={styles.inputIcon} src="../.././deliveryNote.svg" alt="" /></span>
                                <input className={styles.dnInput} type="text" placeholder='Add a delivery note here...' />
                            </div>
                            <div className={styles.coupon}>
                                <span><img className={styles.inputIcon} src="../.././couponicon.jpeg" alt="" /></span>
                                <div className={styles.couponInfo}>
                                    <div className={styles.couponTitle}>Apply Coupon</div>
                                    <div className={styles.couponContent}>Avail offers and discount on your order</div>
                                </div>
                                <div className={styles.couponButton} onClick={() => handleToggleDrawer('right', true)}>
                                    <img className={styles.rightArrowIcon} src="../.././right-arrow.png" alt="" />
                                </div>
                            </div>
                            <div className={styles.pay}>
                                <span><img className={styles.inputIcon} src="../.././paymentIcon.svg" alt="" /></span>
                                <div className={styles.payInfo}>
                                    <div className={styles.cpayTitle}>Pay Online</div>
                                </div>
                                <div className={styles.payButton}>
                                    <img className={styles.rightArrowIcon} src="../.././right-arrow.png" alt="" />
                                </div>
                            </div>
                            <div className={styles.billInfo}>
                                <h6 className={styles.billHead}>Bill Details</h6>
                                <div className={styles.billCostInfo}>
                                    <div className={styles.billMRP}>
                                        <span>Total Amount</span>
                                        <span>₹ 2750.00</span>
                                    </div>
                                    <div className={styles.billMRP}>
                                        <span>Delivery</span>
                                        <span>₹ 0.00</span>
                                    </div>
                                    <div className={styles.billMRP}>
                                        <span>Discount (-)</span>
                                        <span>₹ 0.00</span>
                                    </div>
                                    <div className={styles.billTotal}>
                                        <span>Total</span>
                                        <span>₹ 2750.00</span>
                                    </div>
                                    <div className={styles.amtPayable}>AMOUNT PAYABLE ₹ 2750.00</div>
                                    <div className={styles.billMRP}>
                                        <span>(Inclusive of GST)</span>
                                        <span>₹ 135.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AnchorTemporaryDrawer anchor="right" open={toggle === 'right'} onClose={() => handleToggleDrawer('right', false)} />
        </>
    );
}

export default CheckoutPage;
