import axios from "axios";
import { getDefaultAxios } from "./apiHelper"


import { LIST_CREATE_APPOIMENTS_ENDPOINT, GET_APPOIMENTS_ID_ENDPOINT,RETRIEVE_UPDATE_DELETE_APPOIMENT_ENDPOINT,UPDATE_HAS_TRAINER_READ_APPOINTMENT_ENDPOINT } from "../Constants/App";

export function getAppoimentList(onGetAppoimentSucces, onGetAppoimentError, onGetAppoimentDone, filters = {}){
  let url = LIST_CREATE_APPOIMENTS_ENDPOINT;
  if (filters.trainer_id !== undefined && filters.trainer_id !== null && filters.trainer_id !== 0) {
    url += "?trainer_id=" + filters.trainer_id
  }
  else if (filters.client_id !== undefined && filters.client_id !== null && filters.client_id !== 0) {
    url += "?client_id=" + filters.client_id
  }
  if (filters.has_client_read !== undefined && filters.has_client_read !== null) {
    url += "&has_client_read=" + filters.has_client_read
  }
  if (filters.has_trainer_read !== undefined && filters.has_trainer_read !== null) {
    url += "&has_trainer_read=" + filters.has_trainer_read
  }
  const a = getDefaultAxios()
  a.get(url)
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

export function putAppoimentTrainerRead(data, onSucces, onError, onDone){
  let url = UPDATE_HAS_TRAINER_READ_APPOINTMENT_ENDPOINT.replace(":id", data.id)
  const a = getDefaultAxios()
  axios.put(url,data)
  .then(onSucces)
  .catch(onError)
  .then(onDone)
}
