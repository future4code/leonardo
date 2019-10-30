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

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
});



class CheckboxList extends React.Component {
	state = {
		checked: [0],
	};

	handleToggle = value => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		this.setState({
			checked: newChecked,
		});
	};

	render() {
		const { classes } = this.props;

		return (


			<ListItem role={undefined} dense button onClick={this.handleToggle()}>
				<Checkbox
					checked={this.state.checked.indexOf() !== -1}
					tabIndex={-1}
					disableRipple
				/>
				<ListItemText> {this.props.todo.text}</ListItemText>
				<ListItemSecondaryAction>
					<IconButton >
						<DeleteIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>


		);
	}
}

CheckboxList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);