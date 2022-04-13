import axios from "axios";
import { getDefaultAxios } from "./apiHelper"


import { LIST_CREATE_APPOIMENTS_ENDPOINT, GET_APPOIMENTS_ID_ENDPOINT,RETRIEVE_UPDATE_DELETE_APPOIMENT_ENDPOINT } from "../Constants/App";

export function getAppoimentList(onGetAppoimentSucces, onGetAppoimentError, onGetAppoimentDone){
  const a = getDefaultAxios()
  a.get(LIST_CREATE_APPOIMENTS_ENDPOINT)
  .then(onGetAppoimentSucces)
  .catch(onGetAppoimentError)
  .then(onGetAppoimentDone)
}

export function postAppoiment(data, onPostAppoimentSucces, onPostAppoimentError, onPostAppoimentDone){
  console.log(data)
  const a = getDefaultAxios()
  a.post(LIST_CREATE_APPOIMENTS_ENDPOINT, data)
  .then(onPostAppoimentSucces)
  .catch(onPostAppoimentError)
  .then(onPostAppoimentDone)
}

export function postGetAppoimentsIdCall(data, onPostGetAppoimentsIdSucces, onPostGetAppoimentsIdError, onPostGetAppoimentsIdDone){
  console.log(data)
  const a = getDefaultAxios()
  a.post(GET_APPOIMENTS_ID_ENDPOINT, data)
  .then(onPostGetAppoimentsIdSucces)
  .catch(onPostGetAppoimentsIdError)
  .then(onPostGetAppoimentsIdDone)
}

export function getAppoimentDetails(id, onGetAppoimentDetailsSucces, onGetAppoimentDetailsError, onGetAppoimentDetailsDone){
  const a = getDefaultAxios()
  a.get(RETRIEVE_UPDATE_DELETE_APPOIMENT_ENDPOINT.replace(":id", id))
  .then(onGetAppoimentDetailsSucces)
  .catch(onGetAppoimentDetailsError)
  .then(onGetAppoimentDetailsDone)
}
