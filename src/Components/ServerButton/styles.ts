import styled from "styled-components";
import {Props} from '.';

export const Button = styled.button<Props>`
    display:flex;        //Criar o butão
    align-items:center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;

    margin-bottom: 8px;
    background-color: ${props =>
        props.isHome ? 'var(--rocketseat' : 'var(--primary)'};     //se for o botão da home usa a cor roxa, se não usa a cor normal
    position: relative;
    cursor: pointer;

`;