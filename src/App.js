import './App.css';
import { AiFillTrophy  } from "react-icons/ai";
import contactsAll from './contacts.json';
import React, {useState} from 'react';

function App() {
  const [contacts, setContacts]= useState(contactsAll.slice(5,10))
 
  const addRandom = () =>{
    const contactsCopy= [...contacts]
    const newArray = contactsAll.filter(contact => {
      return !contactsCopy.includes(contact)
    });
    const randomNumber= Math.floor(Math.random()*newArray.length)
    contactsCopy.push(newArray[randomNumber])
    setContacts(contactsCopy)
  };

  const sortContacts = () =>{
    const contactsCopy = [...contacts]
    contactsCopy.sort(
      (a,b) => b.popularity - a.popularity
    )
    setContacts(contactsCopy)
  };

  const sortName = () => {
    const contactsCopy= [...contacts]
    contactsCopy.sort( (a,b) => {
      if(a.name < b.name){
        return -1
      } else if (a.name> b.name){
        return 1
      } else {
        return 0
      }
    }
    )
    setContacts(contactsCopy)
  };

  const deleteContact = contactId => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
     <h1>IronContacts</h1>
     <button onClick={()=> addRandom()}>Add Random Contact</button>
     <button onClick={()=> sortContacts()}>Sort by popularity</button>
     <button onClick={()=> sortName()}>Sort by name</button>
      <table className='Contacts'>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        </thead>
        <tbody>
      {contacts.map(contact => {
        return (
  
          <tr key={contact.id}>
            <td><img className='Image' src={contact.pictureUrl} alt='celeb'/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar && <AiFillTrophy />}</td>
            <td>{contact.wonEmmy && <AiFillTrophy/>}</td>
            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>
        );
      })}
      </tbody>
    </table>
    </div>
  );
}

export default App;
