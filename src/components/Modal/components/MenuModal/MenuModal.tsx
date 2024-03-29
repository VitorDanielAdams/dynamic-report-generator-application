import * as Styled from './MenuModalStyles';
import { FormEnum } from '../../utils/FormEnum';
import { Dispatch, SetStateAction } from 'react';
import IconGraphic from '../../../../assets/images/IconGraphic.svg';
import IconImage from '../../../../assets/images/IconImage.svg';

interface MenuModalProps {
    setMenuModal: Dispatch<SetStateAction<boolean>>;
    setSelectedForm: Dispatch<SetStateAction<string>>;
}

const MenuModal = ({setMenuModal, setSelectedForm}:MenuModalProps) => {

    const changeRender = (e: React.MouseEvent<HTMLButtonElement>) => {
        const componentOption: HTMLButtonElement = e.currentTarget;
        setSelectedForm(componentOption.name);
        setMenuModal(false);
    };

    return (
        <Styled.Content>
            <Styled.Title>Selecione o Modelo:</Styled.Title>
            <Styled.ButtonsDiv>
                <Styled.Button onClick={changeRender} name={FormEnum.grafico}>
                    <Styled.Subtitle>Grafico</Styled.Subtitle>
                    <Styled.Icon src={IconGraphic} />
                </Styled.Button>
                <Styled.Button onClick={changeRender} name={FormEnum.imagem}>
                    <Styled.Subtitle>Imagem</Styled.Subtitle>
                    <Styled.Icon src={IconImage} />
                </Styled.Button>
            </Styled.ButtonsDiv>
        </Styled.Content>
    );
}
export default MenuModal;