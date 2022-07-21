import * as Styled from './UploadImageStyles';
import { ChangeEvent, useState } from 'react';

interface UploadImageProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UploadImage = ({onChange}:UploadImageProps) => {
    
    return (
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
        
    );
}
export default UploadImage;