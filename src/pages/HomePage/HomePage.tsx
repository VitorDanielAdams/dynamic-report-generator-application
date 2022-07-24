import * as Styled from './HomePageStyles';
import FolhaA4 from '../../components/FolhaA4/A4';
import Menu from '../../components/Menu/Menu';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function HomePage() {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <Styled.Container>
            <Menu download={handlePrint} />
            <Styled.Box>
                <FolhaA4 ref={componentRef}></FolhaA4>
            </Styled.Box>
        </Styled.Container>
    );
}
export default HomePage;