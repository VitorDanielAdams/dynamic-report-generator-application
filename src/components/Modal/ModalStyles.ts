import styled from 'styled-components';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalWrapper = styled.div`
    width: 43rem;
    height: 28rem;
    position: relative;
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

export const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 80px;
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
    font-family: Arial;
    color: #000000;
`;

export const ButtonsDiv = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.button`
    width: 40%;
    height: 100%;
    background: none;
    outline: none;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    cursor: pointer;
    transition: 0.5s ease-out;
    &:hover {
        box-shadow: 2px 2px 3px 2px rgba(1,1,1,0.3);
    }
`;

export const Subtitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    font-family: Arial;
    color: #000000;
`;

export const Icon = styled.img`
    width: 6rem;
    height: 6rem;
`;