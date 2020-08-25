import axios from "axios";

export const fetchCats = () => (dispatch) => {
  axios.get(`/db.json`).then(({ data }) => {
    dispatch(setCats(data.content));
  });
};

export const setCats = (items) => ({
  type: "SET_CATS",
  payload: items
});