import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	teste: {
		textDecoration: 'line-through',
		color: 'red',
		hover: 'red',
	}
});



class TodoItem extends React.Component {
	state = {
		checked: false,
	};
	
	handleChange = name => event => {
		let newValue = !this.props.todo.completed
		this.setState({ [name]: newValue });
	  };
	

	render() {
		const { classes } = this.props;

		return (


			<ListItem className={classes.teste}  dense button >
				<Checkbox
					checked={this.props.todo.completed}
					onChange={this.handleChange('checked')}
					
					
				/>
				 
				<ListItemText onClick={this.handleChange('checked')} > {this.props.todo.text}</ListItemText>
				<ListItemSecondaryAction>
					<IconButton >
						<DeleteIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>


		);
	}
}

TodoItem.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoItem);