import { includes, isString } from "lodash";

const getStatus = (state) => {
  if (includes(state, "SUCCESS")) {
    return "green";
  }
  if (includes(state, "ERROR")) {
    return "red";
  }

  if (includes(state, "NEW")) {
    return "purple";
  }

  if (includes(state, "PROCESSING")) {
    return "blue";
  }

  return "default";
};
const getStatusEducation = (state) => {
  if (includes(state, "CHECK_REQUEST_END")) {
    return "green";
  }
  if (includes(state, "ERROR")) {
    return "red";
  }

  if (includes(state, "CHECK_REQUEST_START")) {
    return "purple";
  }

  if (includes(state, "PROCESSING")) {
    return "blue";
  }

  return "default";
};

const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const checkString = (str) => {
  if (isString(str)) {
    return str.replace(/['"]+/g, "");
  }

  return str;
};

export { getStatus, getStatusEducation, isJson, checkString };
