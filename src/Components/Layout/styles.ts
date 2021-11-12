import styled from "styled-components";

// SL - Server List
// SN - Server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel Data 
//UL - Users List
//UI - Users Info



export const Grid = styled.div`
    display: grid;

    grid-template-columns: 71px 240px auto 240px;   // Definindo a largura das colunas;
    grid-template-rows: 46px auto 52px; 
 
    grid-template-areas: 
        'SL SN CI CI'       //Criando o Grid com 4 colunas e 3 linhas
        'SL CL CD UL'
        'SL UI CD UL';

        height: 100vh;
    ;
`;   