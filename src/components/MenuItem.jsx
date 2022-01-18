import React, {useState, useEffect, useCallback} from 'react';

// libs
import styled from 'styled-components';
import axios from "axios";

const MenuItem = ({menu}) => {

   useEffect(() => {
    console.log('menu', menu)
   }, [menu])

    return (
            menu && menu.map((item, idx) => (
                <Item key={idx} >
                   <img src={item.img} />
                     <Text>
                         <Title>{item.title}</Title>
                         <Info>{item.description}</Info>
                     </Text>
                     <Price>{item.price}</Price>
                </Item>
            ))
    )
}


export default MenuItem;

// Styles
const Item = styled.div`
    background: #252525;
    height: 65px;
    box-shadow: 12px 26px 50px rgba(90, 108, 234, 0.08);
    border-radius: 16px;
    padding: 12px;
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 4fr 15%;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    font-family: Source Sans Pro;
    color: #fff;
    text-align: left;
    height: 65px;
    justify-content: center;
`

const Title = styled.h4 `
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    font-style: normal;
    padding: 0;
    margin: 0;
`

const Info = styled.p `
    font-weight: normal;
    font-size: 14px;
    padding: 0;
    margin: 0;
`

const Price = styled.div`
    font-weight: 600;
    font-size: 25px;
    color: #F43F5E;
    align-items: center;
    justify-content: center;
    display: flex;
`

