import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.renderSongList = this.renderSongList.bind(this);
  }
  renderSongList() {
    return this.props.song.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div className='ui list divided'>{this.renderSongList()}</div>;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { song: state.songs };
};
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
