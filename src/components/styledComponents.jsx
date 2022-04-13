import styled from "styled-components"


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

export {
    Input, SearchContainer
}