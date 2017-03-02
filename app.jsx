import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	render(){
		return (
			<div>
				Hello World!
			</div>
		)
	}
}

var node = document.createElement('div');
ReactDOM.render(
	<App />,
	document.body.appendChild(node)
);