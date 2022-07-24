import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #F1F1F1;
`;

export const Content = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 150px 0 0 0;
    @media only screen and (min-width: 992px) {
        margin: 0 0 0 25%;
    }
`;