import * as Styled from './DinamycComponentStyles';
import Grafico from '../Grafico/Grafico';
import Draggable from 'react-draggable';
import { useContext, useState } from 'react';
import FormModalContext from '../Modal/components/FormModal/FormModalProvider';

interface DinamycComponentProps {
    index: number
    title: string;
    width: string;
    height: string;
    border: boolean;
    borderWidth?: string;
    image?: string | null;
    graphic?: string;
}

const DinamycComponent = ({
    index,
    title,
    width,
    height,
    border,
    borderWidth,
    image,
    graphic
}:DinamycComponentProps) => {
    
    const { removeToList } = useContext(FormModalContext)!;
    const [show, setShow] = useState(false);
    
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseOut = () => {
        setShow(false);
    };

    return (
        <Draggable  
            bounds="parent"
            defaultPosition={{x: 0, y: 0}}
        >
            <Styled.Container 
                width={width} 
                height={height} 
                border={border} 
                borderWidth={borderWidth}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <Styled.ButtonCloseDiv>
                    <Styled.Button
                        show={show}
                        onClick={() => removeToList(index)}
                    >
                        X
                    </Styled.Button>
                </Styled.ButtonCloseDiv>
                <Styled.Title>{title}</Styled.Title>
                <Styled.ContentDiv>
                    { image ? <Styled.Image src={image}/> : <Grafico width={width} height={height} tipo={graphic} />}
                </Styled.ContentDiv>
            </Styled.Container>
        </Draggable>
    );
}
export default DinamycComponent;