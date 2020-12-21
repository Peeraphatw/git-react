import React, { useState } from 'react';
import actions from '../actions';
import SongList from './SongList';
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <SongList />
    </div>
  );
};

export default App;
