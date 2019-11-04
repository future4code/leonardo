import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { connect } from 'react-redux'


import styled from 'styled-components';
import TodoItem from './TodoItem';
import { ListItem, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
});

const AppWrapper = styled.div`
  display:flex;
  justify-content:center;
  vertical-align:middle;
  margin-top:10px;
`


class TodoList extends React.Component {



	render() {
		const { classes } = this.props;
		console.log(this.props.todos)
		return (
			<AppWrapper>
				<List>
					
					<ListItem button  >
				
				 
				<ListItemText primary={this.props.todos.map((todo) => (<p>{todo.text}</p>))} ></ListItemText>
				<ListItemSecondaryAction>
					<IconButton >
						<DeleteIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
				</List>
			</AppWrapper>
		);
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos.allTodos
	}
}

export default connect(mapStateToProps)(withStyles(styles)(TodoList));