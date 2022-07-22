import * as Styled from './UploadImageStyles';
import { ChangeEvent, MouseEvent, useState } from 'react';

interface UploadImageProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: MouseEvent<HTMLElement>) => void;
    nameFile?: string | null;
}

const UploadImage = ({onChange,onClick,nameFile}:UploadImageProps) => {
    
    return (
        <Styled.UploadDiv>
            <Styled.Label htmlFor="image">
                <Styled.Input 
                    id="image"
                    type="file" 
                    name="imagem"
                    accept="image/*"
                    multiple={false}
                    onChange={onChange}
                />
                Imagem
            </Styled.Label>
            <Styled.Text onClick={onClick}>{nameFile}</Styled.Text>
        </Styled.UploadDiv>
    );
}
export default UploadImage;