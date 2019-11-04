import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';






class TodoItem extends React.Component {
	state = {
		completed: false,
	};
	
	onToggleComplete = ()  => {
		let toggle = !this.state.completed
		this.setState({
			completed:toggle
		})
	  };
	

	render() {
		

		return (


			<ListItem button onClick={this.onToggleComplete()} >
				
				 
				<ListItemText  > {this.props.todo.text}</ListItemText>
				<ListItemSecondaryAction>
					<IconButton >
						<DeleteIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>


		);
	}
}


export default TodoItem;