import * as Styled from './ModalStyles';
import IconGraphic from '../../assets/images/IconGraphic.svg';
import IconImage from '../../assets/images/IconImage.svg';
import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from "react";

interface ModalProps {
    openModal: boolean,
    setShowModal:  Dispatch<SetStateAction<boolean>>
}

const Modal = ({openModal, setShowModal}:ModalProps) => {
    
    const closeModal = (e: any) => {
        setShowModal(false);
    };

    return(
        <>
            { openModal ? (
                <Styled.Background onClick={closeModal}>
                    <Styled.ModalWrapper>
                        <Styled.ModalContent>
                            <Styled.Title>Selecione o Modelo:</Styled.Title>
                            <Styled.ButtonsDiv>
                                <Styled.Button>
                                    <Styled.Subtitle>Grafico</Styled.Subtitle>
                                    <Styled.Icon src={IconGraphic} />
                                </Styled.Button>
                                <Styled.Button >
                                    <Styled.Subtitle>Imagem</Styled.Subtitle>
                                    <Styled.Icon src={IconImage} />
                                </Styled.Button>
                            </Styled.ButtonsDiv>
                        </Styled.ModalContent>
                    </Styled.ModalWrapper>
                </Styled.Background>
            ) : <></>}
        </>
    );
}
export default Modal;