import styled from 'styled-components';

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
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FormColumnDiv = styled.div`
    width: 40%;
    height: auto;
`;

export const FieldDiv = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`;

export const InputDiv = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
`;

export const Label = styled.label`
    width: 100%;
    font-size: 15px;
    font-weight: 300;
    font-family: Arial;
    color: #000000;
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #000000;
    outline: none;
`;

export const ButtonsDiv = styled.div`
    width: 80%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    width: 5rem;
    height: 2rem;
    background: #7C7C7C;
`;