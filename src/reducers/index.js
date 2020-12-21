import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'I See Fire',
      duration: '5.00',
    },
    {
      title: 'All Start',
      duration: '4.30',
    },
    {
      title: 'as long as you care',
      duration: '3.40',
    },
    {
      title: 'young',
      duration: '4.00',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
