import * as Styled from './MenuStyles';

function Menu() {
    return (
        <Styled.Menu>
            <Styled.TitleDiv>
                <Styled.Title>Menu</Styled.Title>
            </Styled.TitleDiv>
            <Styled.ButtonsDiv>
                <Styled.Button>Adicionar</Styled.Button>
                <Styled.Button>Imprimir</Styled.Button>
            </Styled.ButtonsDiv>
        </Styled.Menu>
    );
}
export default Menu;