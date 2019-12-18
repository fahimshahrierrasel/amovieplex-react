import APIClient from "../APIClient";

export const login = userInfo => {
  return APIClient.post(`auth/login`, userInfo).then(
    response => response.data.data
  );
};
