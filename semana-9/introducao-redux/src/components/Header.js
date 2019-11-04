import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTodo, updateTodoTitle } from '../actions/todo'
import { TextField } from '@material-ui/core';


const AppWrapper = styled.div`
  display:flex;
  justify-content:center;
  vertical-align:middle;
  margin-top: 10vh;
`

const styles = theme => ({
	root: {
		padding: '2px',
		display: 'flex',
		alignItems: 'center',
		width: 400,
		alignSeld: 'center',
	},

	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing.unit * 2,
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit * 3,
			width: 'auto',
		},
	},

	button: {
		margin: theme.spacing.unit,
	},

	searchIcon: {
		width: theme.spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	inputRoot: {
		color: 'inherit',
		width: '100%',
	},

	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 400,
		},
	},

	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
});

class Header extends React.Component {
	state = {
		inputTodo: ''
	};

	onUpdateTodoTitle  = event => {
		this.props.updateTodoTitle(event.target.value)
	};

	onEnterPress = (event ) => {
		if( event.key === 'Enter'){
			let newId = new Date().getTime()
			this.props.addNewTodo(newId)
		}
	}

	render() {

		const { classes } = this.props;

		return (
			<div >
				<AppBar position="static">
					<Toolbar>

						<Typography variant="h6" color="inherit" noWrap>
							Tasks 4U
            			</Typography>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
							/>
						</div>
					</Toolbar>
				</AppBar>
				<AppWrapper>
					<Paper className={classes.root} >
						<TextField className={classes.inputInput} placeholder="Deseja lembrar de algo?"
							onChange={this.onUpdateTodoTitle}
							value={this.props.currentTodoText}
							onKeyPress={this.onEnterPress}
						/>
						
					</Paper>
				</AppWrapper>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	currentTodoText: state.todos.currentTodoText,
})

const mapDispatchToProps = (dispatch) => {
	return {
		addNewTodo: (id) => dispatch(addTodo(id)),
		updateTodoTitle: (newTitle) => dispatch(updateTodoTitle(newTitle))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));