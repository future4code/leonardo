import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router";
import {doSignup, doLogout} from "../../actions/auth/login";
import {getUserVideos} from "../../actions/video/video";
import Avatar from '@material-ui/core/Avatar';


export const ToolbarStyled = styled(Toolbar)`
justify-content: space-around;
`

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
        anchorE2: null,
        photo: ''
    };

    handleChange = event => {
        this.setState({auth: event.target.checked});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenu2 = event => {
        this.setState({anchorE2: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    handleClose2 = () => {
        this.setState({anchorE2: null});
    };


    render() {
        console.log("foto", this.props.photo)
        const {auth, anchorEl, anchorE2} = this.state;
        const open = Boolean(anchorEl);
        const open2 = Boolean(anchorE2);
        return (

            <AppBar>
                <ToolbarStyled>
                    <div>
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}

                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.props.goToFeed}>Início</MenuItem>
                            <MenuItem onClick={this.props.getUserVideos}>Meus Videos</MenuItem>
                            <MenuItem onClick={this.props.goToUploadVideo}>Inserir Video</MenuItem>


                        </Menu>
                    </div>

                    <Typography variant="h6" color="inherit" onClick={this.props.goToFeed}>
                        Future Tube
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                aria-owns={open2 ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu2}
                                color="inherit"
                            >
                                <Avatar alt="" src={this.props.photo}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorE2}

                                open={open2}
                                onClose={this.handleClose2}
                            >
                                <MenuItem onClick={this.props.doLogout}>Logout</MenuItem>

                            </Menu>
                        </div>
                    )}
                </ToolbarStyled>
            </AppBar>

        );
    }
}

const mapStateToProps = state => {
    return {
        photo: state.login.photo,
    };
};


const mapDispatchToProps = dispatch => ({
    goToUploadVideo: () => dispatch(push(routes.uploadVideo)),
    doSignup: (email, password, name, birthday, photo) => dispatch(doSignup(email, password, name, birthday, photo)),
    goToFeed: () => dispatch(push(routes.feed)),
    doLogout: () => dispatch(doLogout()),
    getUserVideos: () => dispatch(getUserVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);