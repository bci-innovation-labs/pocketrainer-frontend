import axios from "axios";
import { getDefaultAxios } from "./apiHelper"

import { PROFILE_UPDATE_ENDPOINT} from "../Constants/App";

export function putProfileDetail(data, onPutProfileSucces, onPutProfileError, onPutProfileDone){
  let url = PROFILE_UPDATE_ENDPOINT.replace("<id>", data.id)
  const a = getDefaultAxios()
  a.put(url, data)
  .then(onPutProfileSucces)
  .catch(onPutProfileError)
  .then(onPutProfileDone);
}


export function getProfileDetail(onGetProfileSucces, onGetProfileError, onGetProfileDone){
  const a = getDefaultAxios()
  a.get(PROFILE_UPDATE_ENDPOINT)
  .then(onGetProfileSucces)
  .catch(onGetProfileError)
  .then(onGetProfileDone)
}

export function postProfileCall(data, onPostProfileSucces, onPostProfileError, onPostProfileDone){
  console.log(data)
  axios.post(PROFILE_UPDATE_ENDPOINT, data)
  .then(onPostProfileSucces)
  .catch(onPostProfileError)
  .then(onPostProfileDone)
}
