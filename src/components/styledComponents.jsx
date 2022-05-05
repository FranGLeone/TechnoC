import styled, {keyframes} from "styled-components"
import {fadeIn} from "react-animations"


//navbar
const SearchContainer = styled.div`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 5px;
    
`;
const Input = styled.input`
    margin-right: 5px;
    border: none;
    outline: none;
    background-color: white;
    color: white
    }
`;
const Logo = styled.span`
animation: ${keyframes`${fadeIn}`} 4s  1
`

//itemList e itemDetail
const Cargando = styled.span`
animation: 1.5s ${keyframes`${fadeIn}`} infinite
`

//Item
const Name = styled.div`
height: 130px;
text-align: left;
font-weight:400;
`
const Price = styled.div`
    font-weight: 100;
    font-size: 26px;
    text-align: left;
    padding-top: 5px;
`

//Cart
const BtnVaciarCarrito = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    height: 230px;   
`
const Product = styled.div`
    display: flex;
    justify-content:space-between;
    background-color: #eeeeee;
    border-left: 8px outset rgb(18, 68, 175);
    border-top: 3px inset white;
    border-bottom: 3px outset white;
    border-right: 3px outset white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top 20px;
    margin-bottom 20px;
    transition: all 0.8s ease;
    &:hover {
      transform: scale(1.05);}
`

const ImgCarrito = styled.img`
    margin: 15px;
    width: 150px;
    border: 4px outset #eeeeee;
    padding: 8px;
    background-color: white;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.05);
  }
    
`;

const NameCarrito = styled.div`
    display: flex;
    padding-right: 20px;
    font-size: 20px;
    align-items: center;
    font-weight: 500
    
`
const PriceCarrito = styled.span`
    display: flex;
    padding-right: 20px;
    font-size: 20px;
    align-items: center
` 

const QtyCarrito = styled.span`
    display: flex;
    align-items: center;
    font-size: 20px;
    padding-left: 20px;

`
const ResumenCarrito = styled.div`
    width: 450px;
    height: 370px;
    background-color: #eeeeee;
    border-left: 8px outset rgb(4, 204, 4);
    border-top: 3px inset white;
    border-bottom: 3px outset white;
    border-right: 3px outset white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top 20px;
    margin-bottom 20px;
`
const ItemResumen = styled.div`
    margin: 25px 20px;
    display: flex;
    justify-content: space-between;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px
`

const TituloResumen = styled.div`
    text-align: center;
    font-family:'Courier New', Courier, monospace;
    font-size: 30px;
    font-weight: 600;
`

const TotalResumen = styled.div`
    margin: 10px 20px;
    display: flex;
    justify-content: space-between;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    font-weight: 600;
`
;

export {
    Input, SearchContainer, Cargando, Logo, Name, Price,
    BtnVaciarCarrito,  Product, ImgCarrito,
    NameCarrito, PriceCarrito, QtyCarrito, ResumenCarrito,
    ItemResumen, TituloResumen, TotalResumen,
}