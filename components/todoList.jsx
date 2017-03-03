import React,{Component} from 'react';

class TodoList extends Component{

	constructor(props){
		super(props);
		this.state = {
			todo:[]
		}
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleAdd(name){
		var newArr = this.state.todo;
		newArr.push(name);
		console.log(newArr);
		this.setState({
			todo:newArr
		});
	}

	handleDelete(index){
		var newArr = this.state.todo;
		newArr.splice(index,1);
		this.setState({
			todo:newArr
		});
		console.log(index);
		console.log("delete");
	}

	render(){
		return (
			<div>
				Hello World 23!
				<List list = {this.state} handleDelete={this.handleDelete} />
				<TodoText handleAdd={this.handleAdd} list = {this.state} />
			</div>
		)
	}
}

class TodoText extends Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		var value = this.refs.todoInput.value;
		this.props.handleAdd(value);
		this.refs.todoInput.value = "";
	}

	render(){
		return (
			<div>
				<input type="text" ref="todoInput" />
				<button onClick={this.handleClick}>Add</button>
			</div>
		);
	}
}

class List extends Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		console.log(e.target.getAttribute('data-index'));
		this.props.handleDelete(e.target.getAttribute('data-index'));
	}

	render(){
		var list = this.props.list.todo;
		return (
			<div>
				<ul>
					{
						list.map((item,index)=>{
							console.log(item);
							console.log(index);
							return (
								<li key={index}>{item}<button onClick={this.handleClick} data-index={index}>done</button></li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default TodoList;