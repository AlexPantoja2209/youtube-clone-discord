import React from "react";
import { Button } from './styles';
import Logo from '../../assets/Logo.svg'


export interface Props{                //interface de Props
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({        //adicionando as props a função
    selected,
    isHome,
    hasNotifications,       //Recebendo as Props
    mentions

}) => {     
    return(             //vai retornar
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}     //passando props para o botão
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="Rocketseat" />}
        </Button>
    )    
};

export default ServerButton;