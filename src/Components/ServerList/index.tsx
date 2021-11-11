import React from "react";

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton ishome/>

            <Separator />

            <ServerButton />
            <ServerButton hasnotification/>
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasnotification/>
            <ServerButton />            
            <ServerButton />
            <ServerButton mentions={72} />
            <ServerButton />

        </Container>
    )
}