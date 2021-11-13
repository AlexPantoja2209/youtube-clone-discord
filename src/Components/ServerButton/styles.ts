import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center; // centro vertical 
  justify-content: center; // centro horizontal
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) =>  //definindo a cor de acordo com butão home
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  position: relative;   // ajustando a bola vermelha das menções
  cursor: pointer;      

  > img {
    width: 24px;
    height: 24px;
  }

  //regras de css

  //pseudo alements da bolinha de mentions
  &::before {   
    width: 9px;     //configuração da bolinha branca da mentions
    height: 9px;    

    position: absolute; //a posição absoluta so vai funcionar se tiver com relative na base
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;   // deixando o botão redondo

    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};  //se houver notificações aparecerar a bolinha
  }


  //pseudo alements da bolinha de notifications
  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${(props) => props.mentions && props.mentions}';  //pegando as mentions por props
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'}  //condição para mostrar as mentions se caso forem maior que 0
  }

  transition: border-radius 0.2s, background-color 0.2s;

  //efeitos de transições
  &.active,     //guando o mouse for ativo fazer as configurações seguintes
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>      //efeitos de cores de fundo
      props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;
