import styled from 'styled-components';

export const Menu = styled.div`
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 25px 0;
    background-color: #25262D;
    color: #FFFFFF;
    border-radius: 0 7px 7px 0;
`;

export const TitleDiv = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-dontent: flex-start;
    align-items: center;
    padding: 0 2rem;
    border-bottom: 1px solid #FFFFFF;
`;

export const Title = styled.h2`
    font-size: 26px;
    font-weight: 600;
    font-family: Arial;
`;

export const ButtonsDiv = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.button`
    width: 80%;
    background: #FFFFFF;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 8px;
    transition: 0.4s ease-out;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    font-family: Arial;
    &:hover {
        background: #1E1F27;
        color: white;
        box-shadow: 2px 1px 5px 1px rgba(221,226,228,0.3);
    }
`;