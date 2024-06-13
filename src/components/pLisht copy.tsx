"use client";

import React from 'react';
import styled from 'styled-components';

interface ProductListProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductList: React.FC<ProductListProps> = ({ count, setCount }) => {
    return (
        <ProductListContainer>
            <ProductImage>
                <img src="../.././image1.png" alt="product_image" style={{ height: '10rem' }} />
            </ProductImage>
            <ProductInfo>
                <ProductTitle>
                    Salena Co-Ord Set - Off White & Pink
                </ProductTitle>
                <ProductSize>Size: L</ProductSize>
                <ProductParentPrice>
                    <h3>₹ 2750.00</h3>
                    <MainAddCheckout>
                        {count ? (
                            <AddCheckout Color="#48764e">
                                <button onClick={() => setCount(count - 1)}>-</button>
                                <p>{count}</p>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </AddCheckout>
                        ) : (
                            <AddCheckout Color="#48764e">
                                <button onClick={() => setCount(count + 1)}>Add</button>
                            </AddCheckout>
                        )}
                        <RemoveButton onClick={() => setCount(0)}>Remove</RemoveButton>
                    </MainAddCheckout>
                </ProductParentPrice>
            </ProductInfo>
        </ProductListContainer>
    );
}

export default ProductList;

const ProductListContainer = styled.div`
    display: flex;
    gap: 4rem;
    border-bottom: 1.5px solid #e1e1ef;
    padding-bottom: 1rem;
`;

const ProductImage = styled.div`
    // height: 10rem;
`;

const ProductInfo = styled.div`
    line-height: 2rem;
`;

const ProductTitle = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    font-weight: 700;
`;

const ProductSize = styled.div`
    color: #00723b;
`;

const ProductParentPrice = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const MainAddCheckout = styled.div`
    color: white;
    justify-content: space-between;
    padding-top: 23px;
`;

const AddCheckout = styled.div<{ Color: string; }>`
    background-color: ${props => props.Color || "#48764e"}; //rgb(72, 118, 78);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    font-weight: 900;
    height: 21.5px;
    width: 5rem;
    border-radius: 3px;

    button {
        height: 15px;
        // width: 20px;
        background: #48764e;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    
`;

const RemoveButton = styled.div`
    color: #48764e;
    cursor: pointer;
`;
