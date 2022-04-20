import styled, {keyframes} from "styled-components"
import {fadeIn} from "react-animations"

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

const Cargando = styled.span`
animation: 1.5s ${keyframes`${fadeIn}`} infinite
`

const Logo = styled.span`
animation: ${keyframes`${fadeIn}`} 4s  1
`

const Name = styled.div`
height: 130px;
text-align: left;`

const Price = styled.div`
    font-weight: 100;
    font-size: 26px;
    text-align: left;
    padding-top: 5px;
`

const BtnVaciarCarrito = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    height: 230px;
   
    
`

const DivCarrito = styled.div`
    background-color: #eeeeee;
    border-left: 8px outset rgb(18, 68, 175);
    border-top: 3px inset white;
    border-bottom: 3px outset white;
    border-right: 3px outset white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px

`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    
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



;



export {
    Input, SearchContainer, Cargando, Logo, Name, Price,
    BtnVaciarCarrito, DivCarrito, Product, ImgCarrito
}