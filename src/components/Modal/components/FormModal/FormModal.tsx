import * as Styled from './FormModalStyles';
import { Dispatch, SetStateAction, useState } from 'react';
import { FormEnum } from '../../utils/FormEnum';
import UploadImage from '../../../UploadImage/UploadImage';

interface FormModalProps {
    menuModal: boolean;
    selectedForm: string;
    setMenuModal:  Dispatch<SetStateAction<boolean>>;
}


const FormModal = ({menuModal,selectedForm,setMenuModal}:FormModalProps) => {

    const [title, setTitle] = useState<string>("");
    const [width, setWidth] = useState<string>();
    const [height, setHeight] = useState<string>();
    const [border, setBorder] = useState<boolean>(false);
    const [borderWidth, setBorderWidth] = useState<string>();
    const [image, setImage] = useState<File>();
    const [graphic, setGraphic] = useState<string>("");

    const goBack = () => {
        setMenuModal(!menuModal);
    }

    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
        if (!fileList) return;
        setImage(fileList[0]);
    };

    console.log(image)

    return (
        <Styled.Container>
            <Styled.Title>{selectedForm}</Styled.Title>
            <Styled.FormDiv>
                <Styled.FormColumnDiv>
                    <Styled.FieldDiv>
                        <Styled.Input 
                            type="text"
                            name="titulo"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Styled.Label>Titulo</Styled.Label>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        <Styled.Input 
                            type="number"
                            name="altura"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <Styled.Label>Altura</Styled.Label>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        <Styled.Input 
                            type="number"
                            name="largura"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                        />
                        <Styled.Label>Largura</Styled.Label>
                    </Styled.FieldDiv>
                </Styled.FormColumnDiv>
                <Styled.FormColumnDiv>
                    <Styled.FieldDiv>
                        <Styled.Input 
                            type="checkbox"
                            name="borda"
                            checked={border}
                            onChange={(e) => setBorder(!border)}
                        />
                        <Styled.Label>Borda</Styled.Label>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        <Styled.Input 
                            type="number"
                            name="larguraBorda"
                            value={borderWidth}
                            onChange={(e) => setBorderWidth(e.target.value)}
                        />
                        <Styled.Label>Largura da Borda</Styled.Label>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        {
                            selectedForm === FormEnum.imagem ?
                            <UploadImage onChange={handleImageChange} />   
                            :   <Styled.Input 
                                    type="text" 
                                    name="grafico"
                                    value={graphic}
                                    onChange={(e) => setGraphic(e.target.value)}
                                />
                        }
                    </Styled.FieldDiv>
                </Styled.FormColumnDiv>
            </Styled.FormDiv>
            <Styled.ButtonsDiv>
                <Styled.Button onClick={goBack}>Voltar</Styled.Button>
                <Styled.Button>Adicionar</Styled.Button>
            </Styled.ButtonsDiv>
        </Styled.Container>
    );
}
export default FormModal;