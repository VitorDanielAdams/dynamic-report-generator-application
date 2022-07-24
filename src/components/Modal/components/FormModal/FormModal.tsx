import * as Styled from './FormModalStyles';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { FormEnum } from '../../utils/FormEnum';
import UploadImage from '../../../UploadImage/UploadImage';
import FormModalContext from './FormModalProvider';

interface FormModalProps {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    menuModal: boolean;
    selectedForm: string;
    setMenuModal: Dispatch<SetStateAction<boolean>>;
}

export interface ComponentObject {
    title: string;
    width: string;
    height: string;
    border: boolean;
    borderWidth: string;
    image: string | null;
    graphic: string;
}

export interface ErrorObject {
    title: boolean;
    width: boolean;
    height: boolean;
    borderWidth: boolean;
    image: boolean;
    graphic: boolean;
    form: boolean;
}

const FormModal = ({setShowModal,menuModal,selectedForm,setMenuModal}:FormModalProps) => {

    const [error, setError] = useState<ErrorObject>({
        title: false,
        width: false,
        height: false,
        borderWidth: false,
        image: selectedForm === FormEnum.imagem ? false : true,
        graphic: selectedForm === FormEnum.grafico ? false : true,
        form: false
    });
    const [errorMessage, setErrorMessage] = useState({
        title: "",
        width: "",
        height: "",
        borderWidth: "",
        image: "",
        graphic: "",
        form: ""
    });
    const [componentObject, setComponentObject] = useState<ComponentObject>({
        title: "",
        width: "",
        height: "",
        border: false,
        borderWidth: "",
        image: "",
        graphic: ""
    });
    const [imageName, setImageName] = useState<string | null>("");
    const { addToList } = useContext(FormModalContext);
    const larguraTela = window.screen.width;
    const maxWidth = larguraTela <= 992 ? 600 : 700;
    const minWidth = larguraTela <= 992 ? 100 : 200;

    const goBack = () => {
        setMenuModal(!menuModal);
    }

    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
        if (!fileList) return;
        setComponentObject({...componentObject, image: URL.createObjectURL(fileList[0])});
        setError({...error, image: true});
        setImageName(fileList[0].name);
    };

    const handleRemoveImage = function (e: React.MouseEvent<HTMLElement>) {
        setComponentObject({...componentObject, image: ""});
        setImageName(null);
    };

    const handleSubmit = () => {
        if(error.form) {
            setErrorMessage({...errorMessage, form: ''});
            setMenuModal(true);
            setShowModal(false);
            addToList(componentObject);
        } else {
            setErrorMessage({...errorMessage, form: 
                'Os inputs tem que ser preenchidos corretamente'});
        }
    }

    const handleInputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        validateInput(e.target.name, e.target.value);
        setComponentObject({...componentObject,[e.target.name]: e.target.value});
    }

    function validateInput(name: string,value: string) {
        switch(name) {
            case 'title':
                var title = value.length > 0;
                setError({...error, [name]: title});
                setErrorMessage({...errorMessage, [name]: title ? '' : 
                    'É necessário um titulo'});
                break;
            case 'width':
                var width = value.length > 0 && ~~value <= maxWidth && ~~value >= minWidth;
                setError({...error, [name]: width});
                setErrorMessage({...errorMessage, [name]: width ? '' : 
                    'É necesário uma largura(min:'+minWidth+'|max:'+maxWidth+')'});
                break;
            case 'height':
                var height = value.length > 0 && ~~value <= 800 && ~~value >= 200;
                setError({...error, [name]: height});
                setErrorMessage({...errorMessage, [name]: height ? '' : 
                    'É necesário uma altura(min:200|max:800)'});
                break;
            case 'borderWidth':
                var borderWidth = value.length > 0 && ~~value <= 5;
                setError({...error, [name]: borderWidth});
                setErrorMessage({...errorMessage, [name]: borderWidth ? '' : 
                    'É necessário um valor de borda(max:5)'});
                break;
            case 'graphic':
                var graphic = value.length > 0;
                setError({...error, [name]: graphic});
                setErrorMessage({...errorMessage, [name]: graphic ? '' : 
                    'É necessário selecionar um tipo de gráfico'});
                break;
        }    
    }

    useEffect(() => {
        if(error.image === false) {
            setErrorMessage({...errorMessage, image: 
                'É necessário selecionar uma imagem'});
        } else {
            setErrorMessage({...errorMessage, image: ''});
        }
        setError({...error, form: 
            error.title 
            && error.width 
            && error.height 
            && error.borderWidth 
            && error.graphic 
            && error.image
        })
    }, [componentObject])

    useEffect(() => {
        if(componentObject?.border === false) {
            setError({...error, borderWidth: true})
            setComponentObject({...componentObject, borderWidth: ""});
        }
    }, [componentObject?.border])

    return (
        <Styled.Container>
            <Styled.Title>{selectedForm}</Styled.Title>
            <Styled.FormDiv>
                <Styled.FormColumnDiv>
                    <Styled.FieldDiv>
                        <Styled.Label 
                            disabled={true} 
                            error={errorMessage.title.length > 0}
                        >
                            Titulo
                        </Styled.Label>
                        <Styled.Input 
                            type="text"
                            name="title"
                            value={componentObject?.title}
                            onChange={handleInputChange}
                        />
                        <Styled.Error>{errorMessage.title}</Styled.Error>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        <Styled.Label 
                            disabled={true} 
                            error={errorMessage.height.length > 0}
                        >
                            Altura
                        </Styled.Label>
                        <Styled.Input 
                            type="number"
                            name="height"
                            value={componentObject?.height}
                            onChange={handleInputChange}
                        />
                        <Styled.Span>PX</Styled.Span>
                        <Styled.Error>{errorMessage.height}</Styled.Error>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        <Styled.Label 
                            disabled={true}
                            error={errorMessage.width.length > 0}
                        >
                            Largura
                        </Styled.Label>
                        <Styled.Input 
                            type="number"
                            name="width"
                            value={componentObject?.width}
                            onChange={handleInputChange}
                        />
                        <Styled.Span>PX</Styled.Span>
                        <Styled.Error>{errorMessage.width}</Styled.Error>
                    </Styled.FieldDiv>
                </Styled.FormColumnDiv>
                <Styled.FormColumnDiv>
                    <Styled.FieldDiv>
                        <Styled.CheckBox>
                            <Styled.CheckBoxInput 
                                type="checkbox"
                                name="border"
                                checked={componentObject?.border}
                                onChange={(e) => 
                                    setComponentObject({...componentObject, 
                                        border: !componentObject?.border})}
                            />
                            Borda
                        </Styled.CheckBox>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        <Styled.Label 
                            disabled={componentObject?.border}
                            error={errorMessage.borderWidth.length > 0}
                        >
                            Larg. Borda
                        </Styled.Label> 
                        <Styled.Input 
                            type="number"
                            name="borderWidth"
                            disabled={componentObject?.border === false}
                            value={componentObject?.borderWidth}
                            onChange={handleInputChange}
                        />
                        <Styled.Span>PX</Styled.Span>
                        <Styled.Error>{errorMessage.borderWidth}</Styled.Error>
                    </Styled.FieldDiv>
                    <Styled.FieldDiv>
                        {
                            selectedForm === FormEnum.imagem 
                            ?   <Styled.FieldDiv>
                                    <UploadImage 
                                        onClick={handleRemoveImage} 
                                        nameFile={imageName} 
                                        onChange={handleImageChange} 
                                    />
                                    <Styled.Error>{errorMessage.image}</Styled.Error>
                                </Styled.FieldDiv>   
                            :   <Styled.FieldDiv>   
                                    <Styled.RadioGroup 
                                        onChange={handleInputChange}
                                    >
                                        <Styled.RadioButton 
                                            type="radio" 
                                            name="graphic"
                                            value="bar"
                                            id="op1"
                                        />
                                        <Styled.RadioLabel htmlFor="op1">Barra</Styled.RadioLabel>
                                        <Styled.Divider />
                                        <Styled.RadioButton  
                                            type="radio" 
                                            name="graphic"
                                            value="pie"
                                            id="op2"
                                        />
                                        <Styled.RadioLabel htmlFor="op2">Pizza</Styled.RadioLabel>
                                    </Styled.RadioGroup>
                                    <Styled.Error>{errorMessage.graphic}</Styled.Error>
                                </Styled.FieldDiv>
                            
                        }
                    </Styled.FieldDiv>
                </Styled.FormColumnDiv>
            </Styled.FormDiv>
            <Styled.ErrorDiv>{errorMessage.form}</Styled.ErrorDiv>
            <Styled.ButtonsDiv>
                <Styled.Button onClick={goBack}>Voltar</Styled.Button>
                <Styled.Button 
                    primary 
                    onClick={handleSubmit}
                >
                    Adicionar
                </Styled.Button>
            </Styled.ButtonsDiv>
        </Styled.Container>
    );
}
export default FormModal;