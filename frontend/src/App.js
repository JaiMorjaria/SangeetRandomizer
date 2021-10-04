import React, {useEffect, useState} from 'react';
import {People}  from './components/People';
import './App.css';
import { PersonForm } from './components/PersonForm';
import { Container } from 'semantic-ui-react';

function App() {

  const[people, setPeople] =  useState([])

  useEffect(() => {
    fetch("/people").then(response =>
      response.json().then(data => {
        setPeople(data.people)
      })
    );
  }, []);


  return (
    <div>
    <Container style ={{marginTop: 40}}>
      <PersonForm onNewPerson={person => setPeople(currentPeople => [person, ...currentPeople ])} />
     <People people={people} />
    </Container>
    </div>
  );
}

export default App;
