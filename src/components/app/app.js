import React, {Component} from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form'
import ItemStatusFilter from "../item-status-filter";

import "./app.css"

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    search: "",
    filter: ""
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: ++this.maxId
    }
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx+1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    
    const newItem = this.createTodoItem(text)

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData, newItem
      ]
      return {
        todoData: newArr
      }
    });
  };

  toggleProperty(arr, id, propName) {

    const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]}

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx+1)
      ];
  };

  onToggleImportant = (id) => {
    this.setState(({todoData})=>{
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData})=>{
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  searchItems = (text) => {
    this.setState({
      search: text
    })
  };

  onToggleFilter = (item) => {
    this.setState({
      filter: item
    })
  }

  render(){
    const {todoData, search, filter} = this.state;

    const doneCount = todoData
                        .filter((el) => el.done).length;
    
    const todoCount = todoData.length - doneCount;

    return (
        <div className="app">
            <AppHeader todo={todoCount} done={doneCount} className="col"/>
            <SearchPanel searchItems={this.searchItems}/>
            <ItemStatusFilter onToggleFilter={this.onToggleFilter}/>
            <TodoList 
              todos={todoData} 
              onDeleted={this.deleteItem}
              onToggleImportant={this.onToggleImportant} 
              onToggleDone={this.onToggleDone}
              search={search}
              filter={filter}
            />
            <ItemAddForm onItemAdded={this.addItem}/>
        </div>
    );
  };
}
