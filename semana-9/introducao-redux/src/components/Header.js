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
import { addTodo } from '../actions/todo'

const AppWrapper = styled.div`
  display:flex;
  justify-content:center;
  vertical-align:middle;
  margin-top: 10vh;
`

const styles = theme => ({
	root: {
		padding: '2px 4px',
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
		paddingLeft: theme.spacing.unit * 10,
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

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	onClickEnviar = () => {
		this.props.addTodo(this.state.inputTodo)
		console.log(this.state.inputTodo)
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
					<Paper className={classes.root} elevation={1}>
						<InputBase className={classes.inputInput} placeholder="Deseja lembrar de algo?"
							onChange={this.handleChange('inputTodo')}
						/>
						<Button variant="contained" color="primary"	onClick={this.onClickEnviar} className={classes.button}>Salvar</Button>
					</Paper>
				</AppWrapper>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (text) => dispatch(addTodo(text))
	}
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));