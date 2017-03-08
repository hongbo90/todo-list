import React,{Component} from 'react';
import './todolist.scss';

class TodoList extends Component{

	constructor(props){
		super(props);
		this.state = {
			todo:[],
			done:[]
		}
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleAdd(name){
		var newArr = this.state.todo;
		newArr.push(name);
		this.setState({
			todo:newArr
		});
	}

	handleDelete(index){
		var newArr = this.state.todo;
		var doneArr = this.state.done;
		console.log(newArr,doneArr);
		doneArr.push(newArr[index]);
		newArr.splice(index,1);
		this.setState({
			todo:newArr,
			done:doneArr
		});
	}

	render(){
		return (
			<div>
				<h1>TodoList</h1>
				<List list = {this.state} handleDelete={this.handleDelete} />
				<TodoText handleAdd={this.handleAdd} list = {this.state} />
				<DoneList list={this.state} />
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
				<input className="inputText" type="text" ref="todoInput" />
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
		this.props.handleDelete(e.target.getAttribute('data-index'));
	}

	render(){
		var list = this.props.list.todo;
		return (
			<div>
				<ul>
					{
						list.map((item,index)=>{
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

class DoneList extends Component{
	render(){
		var list = this.props.list.done;
		console.log(list);
		return (
			<div>
				<ul>
					{
						list.map((item,index)=>{
							return (
								<li key={index}><del>{item}</del></li>
							)
						})	
					}
				</ul>
			</div>
		)
	}
}

export default TodoList;