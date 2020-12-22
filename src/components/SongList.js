import React from 'react';
import { connect } from 'react-redux';
class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.renderSongList = this.renderSongList.bind(this);
  }
  renderSongList() {
    return this.props.song.map(({ title, duration }) => {
      return (
        <div className='item' key={title}>
          <div className='right floated content'>
            <button className='ui button primary'>Select</button>
          </div>
          <div className='content'>{title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.song);

    return <div className='ui list divided'>{this.renderSongList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { song: state.songs };
};
export default connect(mapStateToProps)(SongList);
