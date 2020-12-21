import React from 'react';
import { connect } from 'react-redux';
class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.renderSongList = this.renderSongList.bind(this);
  }
  renderSongList() {
    return this.props.song.map((item) => {
      return (
        <div key={item.duration}>
          <h3 className='ui header'>{item.title}</h3>
          <h4 className='ui'>{item.duration}</h4>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.song);

    return <div>{this.renderSongList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { song: state.songs };
};
export default connect(mapStateToProps)(SongList);
