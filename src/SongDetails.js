import React from "react";
import { connect } from "react-redux";

class SongDetails extends React.Component {
  render() {
    if (this.props.song === null) {
      return <h1>Select A song</h1>;
    }
    return <h2>{this.props.song.title}</h2>;
  }
}

const getSingleSong = (state) => {
  console.log(state);
  return { song: state.selectedSong };
};

export default connect(getSingleSong)(SongDetails);
