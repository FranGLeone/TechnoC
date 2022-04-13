import styled, {keyframes} from "styled-components"
import {fadeIn, fadeOut} from "react-animations"

//SearchForm
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

export {
    Input, SearchContainer, Cargando, Logo
}