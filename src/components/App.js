import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
const LOCAL_STORAGE_KEY = "contacts"
const [contacts, setContacts] = useState([]);
const addContactHandler = (contact) => {
  // to get data from child component to parent component we use handlers 
  // to add the contact to the list use setcontact to update the state and add to the exsisting list
  setContacts([...contacts, contact]);
 
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
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
