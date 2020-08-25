import axios from "axios";

export const fetchTitle = () => (dispatch) => {
  axios.get(`/db.json`).then(({ data }) => {
    dispatch(setTitle(data.title));
  });
};

export const setTitle = (items) => ({
  type: "SET_TITLE",
  payload: items
});
