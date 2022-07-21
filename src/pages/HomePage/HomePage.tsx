import * as Styled from './HomePageStyles';
import FolhaA4 from '../../components/FolhaA4/A4';
import Menu from '../../components/Menu/Menu';
import Grafico from '../../components/Grafico/Grafico';

function HomePage() {
    return (
        <Styled.Container>
            <Menu />
            <Styled.Box>
                <FolhaA4><Grafico tipo={"pie"}/></FolhaA4>
            </Styled.Box>
        </Styled.Container>
    );
}
export default HomePage;