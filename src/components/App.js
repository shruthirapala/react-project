import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {

  const contacts = [
    { 
      id: "1", 
      name: "John",
      email: "john@example.com"
    },
    { 
      id: "2", 
      name:"Smith",
      email: "smith@example.com"
    },
    { 
    id:"3",
    name:"Kevin",
    email: "kevin@example.com"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
