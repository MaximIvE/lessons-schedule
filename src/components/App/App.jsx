import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Container, Section } from "./App.styled";

import Settings from 'components/Settings';
import langContext from 'langContext';
import Week from 'components/Week';


const  App = () => {

  // const [contacts, setContacts] = useState(()=>localContacts('contacts'));
  // const [filter, setFilter] = useState("");
  //Відмальовування активної мови відбувається в Langaguge, а цей стейт потрібен для контексту
  const [langauge, setLangauge] = useState(()=>localContacts('langauge'));
  const [background, setBackground] = useState(()=>localContacts('background'));

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
    localStorage.setItem('background', JSON.stringify(background));
  },[background]);


  const handleBackground=(newbackground)=>{
    console.log(newbackground);
    setBackground(newbackground);
  };


  const changeLangauge = useCallback((lang)=>{return setLangauge(lang)},[setLangauge])
 
  

    return (
      <langContext. Provider value={langauge}>
      <Container bg={background}>
        
      <Settings 
        langauge={langauge} 
        changeLangauge={changeLangauge}
        changeBackground={handleBackground}
      />
      <Section>
        <Week/>
          
          </Section>
      </Container>
      </langContext. Provider>
    );
};

export default App;
