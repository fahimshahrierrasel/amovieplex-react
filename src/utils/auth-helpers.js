import decode from "jwt-decode";

export const decodeToken = token => {
  if (!token) return null;
  try {
    let decodedToken = decode(token);
    return decodedToken;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const checkValidity = decodedToken => {
  const currentTimeEpoch = Math.round(new Date().getTime() / 1000);
  return currentTimeEpoch < decodedToken.exp;
};
