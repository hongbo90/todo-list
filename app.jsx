import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todoList'

var node = document.createElement('div');
ReactDOM.render(
	<TodoList />,
	document.body.appendChild(node)
);