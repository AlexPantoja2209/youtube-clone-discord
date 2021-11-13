import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';




//Container
export const Container = styled.div`
  display: flex;    //display flex pra poder serar o nome da flexinha ao lado com o space-between
  align-items: center;
  justify-content: space-between;
  padding: 0 11px 0 16px;
  background-color: var(--secondary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;  //bordar com sombra
  z-index: 2;
`;




// style do titulo
export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;




//
export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: var(--white);
  cursor: pointer;
`;
