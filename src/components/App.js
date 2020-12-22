import React, { useState } from 'react';
import SongList from './SongList';
const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight list'>
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
