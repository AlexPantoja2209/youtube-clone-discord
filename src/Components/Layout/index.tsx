import React from "react";
import { Grid } from './styles';
import ServerList from '../ServerList';
const Layout: React.FC = () => {        //expecifica para o typescript que esta criando um componente react 
    return (
        <Grid>
            <ServerList />
        </Grid>
    );
}

export default Layout;