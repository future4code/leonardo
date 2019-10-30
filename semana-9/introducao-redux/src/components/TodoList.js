import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { connect } from 'react-redux'


import styled from 'styled-components';
import TodoItem from './TodoItem';

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
  super(props){
	this.state = {
    checked: [0],
  };
  }
  

  render() {
    const { classes } = this.props;
    return (
		<AppWrapper>
		<List className={classes.root} >
		  {this.props.todos.map(todo => <TodoItem todo={todo}/>)}
		</List>
		</AppWrapper>
	  );
	}
  }

function mapStateToProps(state){
	return {
		todos: state.todos
	}
}

export default connect(mapStateToProps)(withStyles(styles)(TodoList));