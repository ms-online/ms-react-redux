import React, { Component} from 'react';
import Contact from './Contact'
import AddContact from './AddContact'

class App extends Component {
  state = {
    contactForm: [
      {name:'Summer', age:25, sex:'Female', id:1},
      {name:'Lucy', age:30, sex:'Female', id:2},
      {name:'Henry', age:32, sex:'Male', id:3},
    ]
  }

  addContact = (contact) => {
    // console.log(contact);
    contact.id = Math.random();
    let contactForm = [...this.state.contactForm, contact]
    this.setState({
      contactForm:contactForm
    })
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
       <h1>这是我的第一个React应用程序！</h1>
      </header>
        <Contact contactForm={this.state.contactForm} />
        <AddContact addContact={this.addContact}/>
    </div>
  );
  }
  
}

export default App;
