import styled from "styled-components";


//Criando o sidebar de usuário

export const Container = styled.div`
    grid-area: SL;

    display: flex;                          //flex=box
    flex-direction: column;
    align-items: center;

    background-color: var( --tertiary);     //usando variável para cor
    padding: 11px 0;

    max-height: 100vh;                      //visão geral da tela

    overflow-y: scroll;                     //Scrollbar
    ::-webkit-scrollbar{                    //ocultando a scrollbar
        display: none;
    }
`;

//Criando o separador
export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid var(--quaternary);

    margin-bottom: 8px;    
`;