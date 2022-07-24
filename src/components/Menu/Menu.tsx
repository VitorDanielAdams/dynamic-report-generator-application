import * as Styled from './MenuStyles';
import { useState } from 'react';
import Modal from '../Modal/Modal';

interface MenuProps {
    print: () => void;
}

const Menu = ({print}:MenuProps) => {
    
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
            <Modal openModal={showModal} setShowModal={setShowModal} />
            <Styled.Container>
                <Styled.TitleDiv>
                    <Styled.Title>Menu</Styled.Title>
                </Styled.TitleDiv>
                <Styled.ButtonsDiv>
                    <Styled.Button onClick={() => setShowModal(true) }>Adicionar</Styled.Button>
                    <Styled.Button onClick={print}>Imprimir</Styled.Button>
                </Styled.ButtonsDiv>
            </Styled.Container>
        </>
    );
}
export default Menu;