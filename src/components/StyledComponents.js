import styled from "styled-components";



const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const DivProductos = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const CardProductos = styled.div`
    margin-top 80px;
    margin-bottom: 250px;
    height: 400px;
    width: 400px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.05);
  }
`;

export{Left,Center,Right,DivProductos, CardProductos}