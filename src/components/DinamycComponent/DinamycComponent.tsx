import * as Styled from './DinamycComponentStyles';

import Grafico from '../Grafico/Grafico';

interface DinamycComponentProps {
    title: string;
    width: string;
    height: string;
    border: boolean;
    borderWidth?: string;
    image?: string;
    graphic?: string;
}

const DinamycComponent = ({
    title,
    width,
    height,
    border,
    borderWidth,
    image,
    graphic
}:DinamycComponentProps) => {

    return (
        <Styled.Container 
            width={width} 
            height={height} 
            border={border} 
            borderWidth={borderWidth}
        >
            <Styled.Title>{title}</Styled.Title>
            <Styled.ContentDiv>{ image ? <img src={image}/> : <Grafico tipo={graphic} />}</Styled.ContentDiv>
        </Styled.Container>
    );
}
export default DinamycComponent;