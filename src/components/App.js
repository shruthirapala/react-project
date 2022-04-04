import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';



function App() {
const LOCAL_STORAGE_KEY = "contacts"
const [contacts, setContacts] = useState([]);
const addContactHandler = (contact) => {
  // to get data from child component to parent component we use handlers 
  // to add the contact to the list use setcontact to update the state and add to the exsisting list
  setContacts([...contacts, { id: uuid(), ...contact }]);
 
};

 const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

 useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

// to persist data, when ever the value changes it helps to render the component again
useEffect(() => {
  // add to local storage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts])

  return (


    <div className="ui container">
      <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<ContactList contacts = {contacts} getContactId={removeContactHandler}/>}/>
      <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
