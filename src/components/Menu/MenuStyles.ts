import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    z-index: 1;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    gap: 25px 0;
    background-color: #25262D;
    color: #FFFFFF;
    border-radius: 0 0 7px 7px;
    padding: 0 20px;
    @media only screen and (min-width: 992px) {
        top: 0;
        left: 0;
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        border-radius: 0 7px 7px 0;
    } 
`;

export const TitleDiv = styled.div`
    width: 20%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    @media only screen and (min-width: 992px) {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 2rem;
        border-bottom: 1px solid #FFFFFF;
    }
`;

export const Title = styled.h2`
    font-size: 26px;
    font-weight: 600;
    font-family: Arial; 
`;

export const ButtonsDiv = styled.div`
    width: 40%;
    height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 992px) {
        width: 100%;
        height: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`;

export const Button = styled.button`
    width: 40%;
    background: #FFFFFF;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 8px;
    transition: 0.4s ease-out;
    cursor: pointer;
    font-size: 10px;
    font-weight: 600;
    font-family: Arial;
    &:hover {
        background: #1E1F27;
        color: white;
        box-shadow: 2px 1px 5px 1px rgba(221,226,228,0.3);
    }
    @media only screen and (min-width: 768px) {
        font-size: 15px;
    }
    @media only screen and (min-width: 992px) {
        width: 80%;
    }
`;