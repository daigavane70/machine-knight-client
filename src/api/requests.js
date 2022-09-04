import axios from "axios";

const baseUrl = "https://house-rent-dharmiks.herokuapp.com/";

export const predict = async (values) => {
  return await axios.post(baseUrl, values);
};
