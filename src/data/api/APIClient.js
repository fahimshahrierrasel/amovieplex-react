import { create } from "apisauce";

const APIClient = create({
  baseURL: process.env.REACT_APP_API_URL
});

export default APIClient;
