import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
      avatar="https://randomuser.me/api/portraits/women/25.jpg"
      name="Jackie Harris"
      online
      />
      <Contact 
      avatar="https://randomuser.me/api/portraits/women/74.jpg"
      name="Naomi Wallace"
      />
      <Contact 
      avatar="https://randomuser.me/api/portraits/men/44.jpg"
      name="Matthew Kelly"
      online
      />
    </div>
  );
}

export default App;
