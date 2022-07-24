import * as Styled from './UploadImageStyles';
import { ChangeEvent, MouseEvent } from 'react';

interface UploadImageProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: MouseEvent<HTMLElement>) => void;
    nameFile?: string | null;
}

const UploadImage = ({onChange,onClick,nameFile}:UploadImageProps) => {
    
    return (
        <Styled.Container>
            <Styled.Label htmlFor="image">
                <Styled.Input 
                    id="image"
                    type="file" 
                    name="image"
                    accept="image/*"
                    multiple={false}
                    onChange={onChange}
                />
                Imagem
            </Styled.Label>
            <Styled.Text onClick={onClick}>{nameFile}</Styled.Text>
        </Styled.Container>
    );
}
export default UploadImage;