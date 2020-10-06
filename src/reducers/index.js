import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { id: 0, title: "Megan Thee Stallion", duration: "3:00" },
    { id: 1, title: "Genda Phool", duration: "3:00" },
    { id: 2, title: "Bad Bunny Yo Perreo Solan", duration: "3:00" },
    { id: 3, title: "BRELAND My Truck", duration: "3:00" },
    { id: 4, title: "Perfume Genius On the Floor", duration: "3:00" },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "select_song") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectSongReducer,
});
