import styled from 'styled-components';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export const ModalWrapper = styled.div`
    width: 43rem;
    height: 28rem;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #FFFFFF;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const ButtonCloseDiv = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: end;
    align-self: start;
    margin-top: -40px;
    margin-right: 20px;
`;

export const ButtonClose = styled.button`
    width: 2rem;
    height: 2rem;
    background: none;
    font-size: 20px;
    font-weight: 600;
    font-family: Arial;
    color: #000000;
    outline: none;
    border: none;
    text-align: center;
    cursor: pointer;
    transition: 0.3s ease-out;
    &:hover {
        color: #7A0000;
    }
`;