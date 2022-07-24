import styled from 'styled-components';
import ReactECharts from 'echarts-for-react'; 

function calculateResposive(value: string){
    return  ~~value * 60 / 100;
}

export const ECharts = styled(ReactECharts)<{width:string, height:string}>`
    width: ${props => calculateResposive(props.width)}px;
    height: ${props => calculateResposive(props.height)}px;
`;