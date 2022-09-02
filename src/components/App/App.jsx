import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Container, Message } from "./App.styled";

import DataInputForm from '../DataInputForm/DataInputForm';
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Settings from 'components/Settings';
import langContext from 'langContext';
import locale from '../../materials/langauges.json';

const  App = () => {

  const [contacts, setContacts] = useState(()=>localContacts('contacts'));
  const [filter, setFilter] = useState("");
  //Відмальовування активної мови відбувається в Langaguge, а цей стейт потрібен для контексту
  const [langauge, setLangauge] = useState(()=>localContacts('langauge'));
  const [background, setBackground] = useState(()=>localContacts('background'));

  const content = locale[langauge];

  // defaultContacts = [
  //   {name: 'Rosie Simpson', number: '459-12-56'},
  //   {name: 'Hermione Kline', number: '443-89-12'},
  //   {name: 'Eden Clements', number: '645-17-79'},
  //   {name: 'Annie Copeland', number: '227-91-26'},
  // ];

  //"Махінацію" з цією функцією прийшлось зробити із-за строгого режима. Під час перезавантаження сторінки useEffect запускався два рази і перезатирав значення LocaleStorage на пустий масив
  function localContacts(key){
    const data = localStorage.getItem(key);
    if(!data){
      if(key === 'contacts')return[];
      if(key === 'langauge')return'Ua';
      if(key === 'background')return "https://pixabay.com/get/g80f41fd59adf124489f03eac4b8389d901aa890cb15edb2f8a653c64b2e86dae4b9b7bf328749f3c412a64c82cd2b6a078efb800f826b40b83743a5b2234e804_1280.jpg";
    }
    const parseContacts = JSON.parse(data);
    if (parseContacts)return parseContacts;
  };
  
  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]);

  useEffect(()=>{
    localStorage.setItem('background', JSON.stringify(background));
  },[background]);

  const addContact = useCallback((name, number)=>{
    if (contacts.find(contact => contact.name === name)){
      alert(name + " " + content.notific);
      return;
    };
    setContacts(prevState=>{return [{name, number}, ...prevState]});
  },[contacts, content.notific]);


  const handleFilter=(filter)=>{
    setFilter(filter);
  };

  const handleBackground=(newbackground)=>{
    console.log(newbackground);
    setBackground(newbackground);
  };

  const removeConactApp=useCallback((id)=>{
    const newContacts = contacts.filter(contact => {return ((contact.name) !== id )});
    setContacts(newContacts);
  },[contacts]);

  const changeLangauge = useCallback((lang)=>{return setLangauge(lang)},[setLangauge])
 
  const normalizeTodos = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeTodos));
  

    return (
      <langContext. Provider value={langauge}>
      <Settings 
        langauge={langauge} 
        changeLangauge={changeLangauge}
        changeBackground={handleBackground}
      />
      <Container bg={background}>
          <Section>{content.phonebook.header}
            {<DataInputForm 
              addContact={addContact}
            />}
          </Section>
          {contacts.length > 0 
          ? <Section>{content.contacts.header}
              <Filter handleFilter={handleFilter}/>
              <Contacts 
                contacts={visibleContacts}
                removeConactApp={removeConactApp}
              />
            </Section>
          : <Message>{content.message}</Message>}
      </Container>
      </langContext. Provider>
    );
};

export default App;
