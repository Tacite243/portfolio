import React, { useEffect, useState } from 'react';
import './index.css'
import axios from 'axios'

function App() {
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/profile/').then(response => {
      setProfile(response.data)
    }).catch(error => {
      console.error('Il y a une erreur!', error)
    });
  }, []);

  if (!profile) return <div>Chargement...</div>;
  
  return (
    <>
      <div className="app">
        <header className="App-header">
          <h1>{profile.name}</h1>
          <p>{profile.bio}</p>
          <h2>{Compétences}</h2>
          <p>{profile.skills}</p>
          <h2>{Expérience}</h2>
          <p>{profile.experience}</p>
          <h2>Contact</h2>
          <p>{profile.contact}</p>
        </header>
      </div>
    </>
  )
}

export default App
