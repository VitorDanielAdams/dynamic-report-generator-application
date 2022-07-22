import styled, { css } from 'styled-components';

export const Container = styled("div")<{ width:string, height:string, border:boolean, borderWidth?:string }>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border: ${props => props.border ? props.borderWidth+"px solid #000000" : "none"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;
`

export const Title = styled.h1`
    font-size: 100%;
    font-weight: 600;
    font-family: Arial;
    color: #000000;
`;

export const ContentDiv = styled.div`
    width: 90%;
    height: 80%;
`;