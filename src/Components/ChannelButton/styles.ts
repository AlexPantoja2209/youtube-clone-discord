import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';


//estilo do ChannelButton
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;  //tempoda transição do butão


  //divs internas do butão
  //=================================
  > div {
    display: flex;
    align-items: center;
  }

  > div span {            //texto do butão
    margin-left: 5px;
    color: var(--senary);
  }
  //==================================


  //quando passar o mouse ou ativar o butão ele mudará de cor
  &:hover,        
  &.active {
    background-color: var(--quinary);   //muda a cor de fundo

    > div span {
      color: var(--white);              //muda a cor do texto
    }
  }
`;

//icone da hastag
export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;


//icone de InviteIcon
export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;


export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
