import styled, { css } from 'styled-components';

interface LabelProps {
    disabled?: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 40px;
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
    font-family: Arial;
    color: #000000;
`;

export const FormDiv = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FormColumnDiv = styled.div`
    width: 45%;
    height: auto;
`;

export const FieldDiv = styled.div`
    width: 100%;
    height: 3rem;
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const CheckBox = styled.label`
    width: 40%;
    height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-right: auto;
    padding: 10px;
    gap: 20px;
    background: #4D5456;
    border: solid 1px #4D5456;
    font-size: 65%;
    font-weight: 600;
    font-family: Arial;
    color: #FFFFFF;
`;

export const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
    widht: 50%
    height: 40%;
    outline: none;
    white-space: nowrap;
    border-radius: 2px;
`;

export const Label = styled.label<LabelProps>`
    width: 6rem;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4D5456;
    border: solid 1px #4D5456;
    font-size: 65%;
    font-weight: 600;
    font-family: Arial;
    color: #FFFFFF;
    transition: 0.3s linear;
    ${({disabled}) =>
        !disabled && css`
            background: red;
            border: solid 1px red;
        `}
`;

export const Input = styled.input`
    width: 98%;
    height: 60%;
    border: solid 1px #7C7C7C;
    outline: none;
    padding: 0 0.5rem;
    transition: 0.3s linear;
    &:hover {
        transition: 0.5s ease-out;
        border: solid 1px #4884A4;
    }
    &:disabled {
        border: solid 1px red; 
    }
`;

export const Span = styled.span`
    width: 15%;
    height: 60%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #99A4A4;
    border: solid 1px #7C7C7C;
    font-size: 9px;
    font-weight: 600;
    font-family: Arial;
    color: #FFFFFF;
    text-shadow: 1px 1px #666666;
    &:hover {
        cursor: default;
    }
`;

export const RadioGroup = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: solid 1px #4D5456;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
    display: none;
`;

export const RadioLabel = styled.label`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    font-family: Arial;
    color: #4D5456;
    transition: 0.5s ease-out;
    cursor: pointer;
    &:hover {
        background: #A9B0B2;
    }
    ${(props)=> {
        return css`
            ${RadioButton}:checked + && {
                background: #4D5456;
                color: white;
            }
        `
    }}
`;

export const Divider = styled.div`
    width: 1px;
    height: 100%;
    background: #4D5456;
`;


export const ButtonsDiv = styled.div`
    width: 90%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled("button")<{primary?: boolean}>`
    width: 15rem;
    height: 2rem;
    background: ${props => props.primary ? "#1D70C3" : "#7C7C7C"};
    border: none;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 600;
    font-family: Arial;
    color: #FFFFFF;
    transition: 0.5s ease-out;
    cursor: pointer;
    &:hover {
        background: ${props => props.primary ? "#144D85" : "#4D5456"};
        box-shadow: 2px 2px 3px 1px rgba(1,1,1,0.5);
    }
`;