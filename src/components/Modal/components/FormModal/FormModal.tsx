import * as Styled from './FormModalStyles';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FormEnum } from '../../utils/FormEnum';
import UploadImage from '../../../UploadImage/UploadImage';

interface FormModalProps {
    menuModal: boolean;
    selectedForm: string;
    setMenuModal:  Dispatch<SetStateAction<boolean>>;
}

const FormModal = ({menuModal,selectedForm,setMenuModal}:FormModalProps) => {

    const [title, setTitle] = useState<string>("");
    const [width, setWidth] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [border, setBorder] = useState<boolean>(false);
    const [borderWidth, setBorderWidth] = useState<string>("");
    const [image, setImage] = useState<string | null>();
    const [imageName, setImageName] = useState<string | null>("");
    const [graphic, setGraphic] = useState<string>("");

    const goBack = () => {
        setMenuModal(!menuModal);
    }

    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
        if (!fileList) return;
        setImage(URL.createObjectURL(fileList[0]));
        setImageName(fileList[0].name)
    };

    const handleRemoveImage = function (e: React.MouseEvent<HTMLElement>) {
        setImage(null);
        setImageName(null);
    };

    const handleRadioChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        setGraphic(e.target.value);
    };

    useEffect(() => {
        if(border === false) {
            setBorderWidth("")
        }
    }, [border])

    return (
        <Styled.Container>
            <Styled.Title>{selectedForm}</Styled.Title>
            <Styled.FormDiv>
                <Styled.FormColumnDiv>
                    <Styled.FieldDiv>
                        <Styled.Label disabled={true}>Titulo</Styled.Label>
                        <Styled.Input 
                            type="text"
                            name="titulo"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        <Styled.Label disabled={true}>Altura</Styled.Label>
                        <Styled.Input 
                            type="number"
                            name="altura"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <Styled.Span>PX</Styled.Span>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        <Styled.Label disabled={true}>Largura</Styled.Label>
                        <Styled.Input 
                            type="number"
                            name="largura"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                        />
                        <Styled.Span>PX</Styled.Span>
                    </Styled.FieldDiv>
                </Styled.FormColumnDiv>
                <Styled.FormColumnDiv>
                    <Styled.FieldDiv>
                        <Styled.CheckBox>
                            <Styled.CheckBoxInput 
                                type="checkbox"
                                name="borda"
                                checked={border}
                                onChange={(e) => setBorder(!border)}
                            />
                            Borda
                        </Styled.CheckBox>
                        
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        <Styled.Label disabled={border}>Larg. Borda</Styled.Label> 
                        <Styled.Input 
                            type="number"
                            name="larguraBorda"
                            disabled={border === false}
                            value={borderWidth}
                            onChange={(e) => setBorderWidth(e.target.value)}
                        />
                        <Styled.Span>PX</Styled.Span>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        {
                            selectedForm === FormEnum.imagem ?
                            <Styled.FieldDiv>
                                <UploadImage onClick={handleRemoveImage} nameFile={imageName} onChange={handleImageChange} />
                            </Styled.FieldDiv>   
                            :   <Styled.FieldDiv>   
                                    <Styled.RadioGroup 
                                        onChange={handleRadioChange}
                                    >
                                        <Styled.RadioButton 
                                            type="radio" 
                                            name="grafico"
                                            value="bar"
                                            id="op1"
                                        />
                                        <Styled.RadioLabel htmlFor="op1">Barra</Styled.RadioLabel>
                                        <Styled.Divider />
                                        <Styled.RadioButton  
                                            type="radio" 
                                            name="grafico"
                                            value="pie"
                                            id="op2"
                                        />
                                        <Styled.RadioLabel htmlFor="op2">Pizza</Styled.RadioLabel>
                                    </Styled.RadioGroup>
                                </Styled.FieldDiv>
                            
                        }
                    </Styled.FieldDiv>
                </Styled.FormColumnDiv>
            </Styled.FormDiv>
            <Styled.ButtonsDiv>
                <Styled.Button onClick={goBack}>Voltar</Styled.Button>
                <Styled.Button primary>Adicionar</Styled.Button>
            </Styled.ButtonsDiv>
        </Styled.Container>
    );
}
export default FormModal;