import APIClient from "./APIClient";

export const Login = userInfo => {
  return APIClient.post(`auth/login`, userInfo).then(
    axiosResponse => axiosResponse.data
  );
};
