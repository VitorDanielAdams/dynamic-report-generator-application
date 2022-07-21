import * as Styled from './ModalStyles';
import { Dispatch, SetStateAction, useState } from "react";
import ConditionalRenderModal from './components/ConditionalRenderModal';

interface ModalProps {

    openModal: boolean;
    setShowModal:  Dispatch<SetStateAction<boolean>>;
}

const Modal = ({openModal, setShowModal}:ModalProps) => {
    
    const [menuModal, setMenuModal] = useState(true);

    const closeModal = () => {
        setMenuModal(true)
        setShowModal(false);
    };

    return(
        <>
            { openModal ? (
                <Styled.Background>
                    <Styled.ModalWrapper>
                        <ConditionalRenderModal menuModal={menuModal} setMenuModal={setMenuModal}/>
                        <Styled.ButtonCloseDiv>
                            <Styled.ButtonClose onClick={closeModal}>X</Styled.ButtonClose>
                        </Styled.ButtonCloseDiv>
                    </Styled.ModalWrapper>
                </Styled.Background>
            ) : <></>}
        </>
    );
}
export default Modal;