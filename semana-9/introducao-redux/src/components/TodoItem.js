import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 400,
	},
	input: {
		marginLeft: 8,
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
};

function CustomizedInputBase(props) {
	const { classes } = props;

	return (
		<div>
			<Paper className={classes.root} elevation={1}>
				<IconButton className={classes.iconButton} >
					<Checkbox />
				</IconButton>
				<InputBase className={classes.input} placeholder="Deseja lembrar de algo?" />
				<IconButton className={classes.iconButton} >
					<DeleteIcon />
				</IconButton>

			</Paper>
			<Paper className={classes.root} elevation={1}>
				<IconButton className={classes.iconButton} >
					<Checkbox />
				</IconButton>
				<InputBase className={classes.input} placeholder="Deseja lembrar de algo?" />
				<IconButton className={classes.iconButton} >
					<DeleteIcon />
				</IconButton>

			</Paper>
		</div>
	);
}

CustomizedInputBase.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);	