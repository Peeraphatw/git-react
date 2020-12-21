import React, { useState } from 'react';
import Nav from './Nav';
const App = () => {
  const [login, setLogin] = useState(false);

  const renderBody = () => {
    switch (login) {
      case true:
        return 'Login';
        break;
      case false:
        return 'No Session';
        break;
    }
  };
  return (
    <div>
      <input type='text' onChange={(e) => setLogin(e.target.value)} />
      <button onClick={() => alert(login)}>Check Session</button>
      {renderBody()}
      <Nav />
    </div>
  );
};

export default App;
