import React from "react";
import { connect } from "react-redux";
import selectSong from "./actions/SelectSong.js";

class SongList extends React.Component {
  render() {
    return this.props.songs.map((item) => {
      return (
        <div key={item.id}>
          <div className="song-title">{item.title}</div>
          <div className="duration">{item.duration}</div>
          <button onClick={() => this.props.selectSong(item)} type="submit">
            Select Songs
          </button>
        </div>
      );
    });
  }
}

const getSongData = (state) => {
  return { songs: state.songs };
};

export default connect(getSongData, { selectSong })(SongList);
