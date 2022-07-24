import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 2%;
`;

export const Input = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: Arial;
`;

export const Label = styled.label`
    width: 100%;
    height: 1.8rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4D5456;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: Arial;
    color: #FFFFFF;
    cursor: pointer;
`;

export const Text = styled.h1`
    font-size: 0.6rem;
    font-weight: 300;
    font-family: Arial;
    color:#4D5456;
    cursor: pointer;
    &:hover {
        color: red;
    }
`;