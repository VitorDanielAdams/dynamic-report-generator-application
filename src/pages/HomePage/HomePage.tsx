import * as Styled from './HomePageStyles';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import FolhaA4 from '../../components/FolhaA4/A4';
import Menu from '../../components/Menu/Menu';

function HomePage() {

    const componentRef = useRef(null);
    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
    return (
        <Styled.Container>
            <Menu print={handlePrint} />
            <Styled.Content>
                <FolhaA4 ref={componentRef}></FolhaA4>
            </Styled.Content>
        </Styled.Container>
    );
}
export default HomePage;