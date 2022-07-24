import * as Styled from './MenuStyles';
import { useState } from 'react';
import Modal from '../Modal/Modal';

interface MenuProps {
    download: () => void;
}

const Menu = ({download}:MenuProps) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
            <Modal openModal={showModal} setShowModal={setShowModal} />
            <Styled.Menu>
                <Styled.TitleDiv>
                    <Styled.Title>Menu</Styled.Title>
                </Styled.TitleDiv>
                <Styled.ButtonsDiv>
                    <Styled.Button onClick={() => setShowModal(true) }>Adicionar</Styled.Button>
                    <Styled.Button onClick={download}>Imprimir</Styled.Button>
                </Styled.ButtonsDiv>
            </Styled.Menu>
        </>
    );
}
export default Menu;