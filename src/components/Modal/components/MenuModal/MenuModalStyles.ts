import styled from 'styled-components';

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
    width: 4rem;
    height: 4rem;
    @media only screen and (min-width: 768px) {
        width: 6rem;
        height: 6rem;
    }
`;