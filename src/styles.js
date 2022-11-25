import styled from "styled-components"
import { FaTrash, FaCheck } from 'react-icons/fa';

export const Container = styled.div`
    background: #282828;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    background: #ececec;
    width: 540px;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        margin-top: 60px;
    }
`

export const Input = styled.input`
    width: 340px;
    border: 2px solid #e1e1e1;
    border-radius: 4px;
    height: 40px;
    margin-right: 30px;
    padding-left: 10px;
`

export const Button = styled.button`
    width: 130px;
    background: #8052ec;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;

    color: white;
    font-size: 16px;
    font-weight: 900;

    cursor: pointer;
    transition: filter .3s;

    &:hover {
       filter: brightness(.85);
    }
`

export const Titulo3 = styled.h3`
    text-align: center;
    color: #a3a3a3;
    font-weight: normal;
    font-size: 16px;
`

export const ListItem = styled.div`
    width: 100%;
    height: 60px;
    background: ${ props => props.isFinished ? "#bfeda2" : "#fafafa"};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    margin-bottom: 30px;
    padding: 0 10px;

    li {
        list-style: none;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Trash = styled(FaTrash)`
    cursor: pointer;
    color: #7c7c7c;
`

export const Check  = styled(FaCheck)`
    cursor: pointer;
    color: #7c7c7c;
`