import {get, includes, isEqual} from "lodash";
import config from "../config.js";

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

const getName = (type,value) => {
  let name = value
  if (isEqual(type, 'status')){
    get(config,'STATUS',[]).map((element) => {
      if (isEqual(get(element,'value'),value)){
        name = get(element,'label')
      }
    })
  }else if (isEqual(type, 'service')){
    get(config,'SERVICE_TYPES',[]).map((element) => {
      if (isEqual(get(element,'value'),value)){
        name = get(element,'label')
      }
    })
  }
  return name;
}
const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const formatNumber = (number) => {
  return Intl.NumberFormat('en-US').format(number)
}

export { getStatus, isJson, formatNumber, getName};
