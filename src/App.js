import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/card-list/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}));
  }

  handlechange = (el) => {
     this.setState({searchField: el.target.value})
  } 
  

  render(){
     const{monsters, searchField} = this.state;
     const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
    
    <h1>Monster Rolerdex</h1>

     <SearchBox 
     placeholder= 'search monsters'
      handleChange = {this.handlechange} 
     />
    
    <CardList monsters={filteredMonsters} /> 
    </div>
  );
}
}

export default App;
