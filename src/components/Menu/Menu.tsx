import * as Styled from './MenuStyles';
import { useState } from 'react';
import Modal from '../Modal/Modal';

function Menu() {
    const [showModal, setShowModal] = useState(false);
    return (
        <Styled.Menu>
            <Modal openModal={showModal} setShowModal={setShowModal} />
            <Styled.TitleDiv>
                <Styled.Title>Menu</Styled.Title>
            </Styled.TitleDiv>
            <Styled.ButtonsDiv>
                <Styled.Button onClick={() => setShowModal(true) }>Adicionar</Styled.Button>
                <Styled.Button>Imprimir</Styled.Button>
            </Styled.ButtonsDiv>
        </Styled.Menu>
    );
}
export default Menu;