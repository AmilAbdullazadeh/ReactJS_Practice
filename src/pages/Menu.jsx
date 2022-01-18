import React, {useState, useEffect, useCallback} from 'react';
import Salad from '../images/Salad.png';
import searchIcon from '../images/search.svg';

// libs
import styled from 'styled-components';
import axios from "axios";

// comps
import MenuItem from '../components/MenuItem';
import MenuIcon from '../components/MenuIcon';

const Menu = () => {
    // useState
    const [searchValue, setSearchValue] = useState('');
    const [menu, setMenu] = useState([
               {
                   img: Salad,
                   title: 'Original Salad',
                   description: 'Lovy Food',
                   price: '8$'
               },
               {
                   img: Salad,
                   title: 'Salad',
                   description: 'Lovy Food',
                   price: '10$'
               },
               {
                   img: Salad,
                   title: 'Saladddeeee',
                   description: 'Lovy Food',
                   price: '18$'
               },
               {
                   img: Salad,
                   title: 'Origid',
                   description: 'Lovy Food',
                   price: '82$'
               },
               {
                   img: Salad,
                   title: 'Stalishni Salad',
                   description: 'Lovy Food',
                   price: '28$'
               },
           {
               img: Salad,
               title: 'Original Salad',
               description: 'Lovy Food',
               price: '8$'
           },
           {
               img: Salad,
               title: 'Salad',
               description: 'Lovy Food',
               price: '10$'
           },
           {
               img: Salad,
               title: 'Saladddeeee',
               description: 'Lovy Food',
               price: '18$'
           },
           {
               img: Salad,
               title: 'Origid',
               description: 'Lovy Food',
               price: '82$'
           },
           {
               img: Salad,
               title: 'Stalishni Salad',
               description: 'Lovy Food',
               price: '28$'
           },

    ]);

    let filteredData = []
    useEffect(() => {
        filteredData = menu.filter((item) => item.title === searchValue);
        console.log(filteredData);
    }, [searchValue])

    return (
            <Container>
                <Head>
                    <input type="text" placeholder="search" onChange={(e) => setSearchValue(e.target.value)} />
                    <img src={searchIcon} />
                </Head>
                <Container>
                     <MenuItem menu={filteredData && filteredData} />
                </Container>
            </Container>
    )
}


export default Menu;

// Styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 25px;
  min-height: 100vh;
  min-width: 100%;
  background-color: #000;
`
const Head = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

     input {
        color: #fff;
        font-size: 15px;
        padding: 7px 20px;
        background: #141414;
        border-radius: 100px;
        border: none;
        height: 40px;
        width: 100%;
        margin: 0 20px;
        outline: none;
     }

     img {
        position: absolute;
        right: 45px;
     }
`
