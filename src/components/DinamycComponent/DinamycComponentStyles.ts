import styled, { css } from 'styled-components';

function calculateResposive(value: string){
    return  ~~value * 80 / 100;
}

export const Container = styled("div")<{ width:string, height:string, border:boolean, borderWidth?:string }>`
    width: ${props => calculateResposive(props.width)}px;
    height: ${props => calculateResposive(props.height)}px;
    border: ${props => props.border ? props.borderWidth+"px solid #000000" : "none"};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 10px;
    cursor: pointer;
    @media only screen and (min-width: 768px) {
        width: ${props => props.width}px;
        height: ${props => props.height}px;
    }
`

export const Title = styled.h1`
    font-size: 100%;
    font-weight: 600;
    font-family: Arial;
    color: #000000;
`;

export const ContentDiv = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
 
export const Image = styled.img`
    width: 85%;
    height: 75%;
`;

export const ButtonCloseDiv = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: end;
    margin-top: -15px;
    padding: 0 5px;
`;

export const Button = styled("button")<{ show: boolean}>`
    display: ${props => props.show ? 'block' : 'none'};
    width: 2rem;
    height: 2rem;
    position: absolute;
    margin-left: auto;
    background: none;
    font-size: 20px;
    font-weight: 600;
    font-family: Arial;
    color: #7A0000;
    outline: none;
    border: none;
    text-align: center;
    cursor: pointer;
    transition: 0.5s ease-out;
    &:hover {
        opacity: 0.8;
    }
`;