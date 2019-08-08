import React, { Component/*, useState*/ } from 'react';
import './App.css';
import Person from './Person/Person'
import './Person/Person.css'

class App extends Component {
  state = {
    persons: [
      {name: "Dr7", age: 21},
      {name: "Raquel", age: 17},
      {name: "Joao", age: 34}
    ],
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Dr7", age: 21},
        {name: event.target.value, age: 17},
        {name: "Joao", age: 34}
      ]
    })
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name: "Dr7", age: 21},
        {name: newName, age: 17},
        {name: "Joao", age: 34}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (<div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Raquel')}
          change={this.nameChangeHandler}>To na maratona</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        </div>)
    }

    return (
      <div className="App">
        <h1>Mi primero App React</h1>
        <p>De mi curso</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Mirar tarjetas</button>
        {persons}
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Dr7 Teste'))
  }
}

export default App;

// Using React Hooks

// const app = props => {

//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       {name: "Dr7", age: 21},
//       {name: "Josias", age: 17},
//       {name: "Joao", age: 34}
//     ]
//   })

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: "ss", age: 21},
//         {name: "aa", age: 17},
//         {name: "bb", age: 34}
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Meu primeiro App React</h1>
//       <p>Testão</p>
//       <button onClick={switchNameHandler}>Cambiar Nombre</button>
//       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>To na maratona</Person>
//       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//     </div>
    
//   );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Dr7 Teste'))
// }

// export default app;
