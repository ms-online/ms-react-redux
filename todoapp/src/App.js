import React, { Component } from 'react'
import Todos from './Todos'

class App extends Component{
  state = {
    todos: [
      {id:1, content:'买菜'},
      {id:2, content:'打扫卫生'},
      {id:3, content:'阅读书籍'},
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">任务列表</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  );
  }
  
}

export default App;
