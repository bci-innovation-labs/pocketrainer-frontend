import axios from "axios";
import { getDefaultAxios } from "./apiHelper"


import { LIST_CREATE_APPOIMENTS_ENDPOINT, GET_APPOIMENTS_ID_ENDPOINT } from "../Constants/App";

export function getAppoimentList(onGetAppoimentSucces, onGetAppoimentError, onGetAppoimentDone){
  const a = getDefaultAxios()
  a.get(LIST_CREATE_APPOIMENTS_ENDPOINT)
  .then(onGetAppoimentSucces)
  .catch(onGetAppoimentError)
  .then(onGetAppoimentDone)
}

export function postGetAppoimentsIdCall(data, onPostGetAppoimentsIdSucces, onPostGetAppoimentsIdError, onPostGetAppoimentsIdDone){
  console.log(data)
  const a = getDefaultAxios()
  a.post(GET_APPOIMENTS_ID_ENDPOINT, data)
  .then(onPostGetAppoimentsIdSucces)
  .catch(onPostGetAppoimentsIdError)
  .then(onPostGetAppoimentsIdDone)
}
