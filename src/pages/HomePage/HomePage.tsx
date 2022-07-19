import React from 'react';
import * as Styled from './HomePageStyles';
import { FolhaA4 } from '../../components/FolhaA4/A4';
import Menu from '../../components/Menu/Menu';

function HomePage() {
    return (
        <Styled.Container>
            <Menu />
            <Styled.Box>
                <FolhaA4></FolhaA4>
            </Styled.Box>
        </Styled.Container>
    );
}
export default HomePage;