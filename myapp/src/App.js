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

  deleteContact = (id) => {
    // console.log(id);
    let contactForm = this.state.contactForm.filter(contact => {
      return contact.id !== id
    })

    this.setState({
      contactForm:contactForm
    })
  }
  componentDidMount() {
    console.log('挂载完成！')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('更新完成！')
    console.log(prevProps);
    console.log(prevState);
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
       <h1>这是我的第一个React应用程序！</h1>
      </header>
        <Contact deleteContact={this.deleteContact} contactForm={this.state.contactForm} />
        <AddContact addContact={this.addContact}/>
    </div>
  );
  }
  
}

export default App;
