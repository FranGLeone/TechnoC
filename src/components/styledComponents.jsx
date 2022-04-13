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









export {
    Input, SearchContainer, Cargando, Logo, Name, Price
}