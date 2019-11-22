import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function ButtonAppBar(props) {

    return (

        <AppBar position="static" style={{ flexGrow: 1 }}>
            <Toolbar>
                <Button color="inherit" onClick={props.onClickHome}>Home</Button>
                <Button color="inherit" onClick={props.onClickApplicationTrip}>Inscrever Viagem</Button>
                <Button color="inherit" onClick={props.onClickLogin}>Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default ButtonAppBar;