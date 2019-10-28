import React from 'react'
import { createStore } from "redux";

var addTodo = function addTodo(text) {
	return {
	  type: types.ADD_TODO,
	  text: text
	};
  };
  
  exports.addTodo = addTodo;
  
  var deleteTodo = function deleteTodo(id) {
	return {
	  type: types.DEL_TODO,
	  id: id
	};
  };
  
  exports.deleteTodo = deleteTodo;
  
  var editTodo = function editTodo(id, text) {
	return {
	  type: types.EDIT_TODO,
	  id: id,
	  text: text
	};
  };
  
  exports.editTodo = editTodo;
  
  var completeTodo = function completeTodo(id) {
	return {
	  type: types.COMPLETE_TODO,
	  id: id
	};
  };
  
  exports.completeTodo = completeTodo;
  
  var completeAllTodos = function completeAllTodos() {
	return {
	  type: types.COMPLETE_ALL_TODOS
	};
  };
  
  exports.completeAllTodos = completeAllTodos;
  
  var clearCompleted = function clearCompleted() {
	return {
	  type: types.CLEAR_COMPLETED
	};
  };
  
  exports.clearCompleted = clearCompleted;
  
  var filter = function filter(filter) {
	return {
	  type: types.FILTER,
	  filter: filter
	};
  };
  
  exports.filter = filter;

