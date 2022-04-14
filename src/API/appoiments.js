import axios from "axios";
import { getDefaultAxios } from "./apiHelper"


import { LIST_CREATE_APPOIMENTS_ENDPOINT, GET_APPOIMENTS_ID_ENDPOINT,RETRIEVE_UPDATE_DELETE_APPOIMENT_ENDPOINT } from "../Constants/App";

export function getAppoimentList(onGetAppoimentSucces, onGetAppoimentError, onGetAppoimentDone, filters = {}){
  let url = LIST_CREATE_APPOIMENTS_ENDPOINT;
  if (filters.trainer_id !== undefined && filters.trainer_id !== null && filters.trainer_id !== 0) {
    url += "?trainer_id=" + filters.trainer_id
  }
<<<<<<< HEAD
  else if (filters.client_id !== undefined && filters.client_id !== null && filters.client_id !== 0) {
    url += "?client_id=" + filters.client_id
  }
  if (filters.has_client_read !== undefined && filters.has_client_read !== null) {
    url += "&has_client_read=" + filters.has_client_read
=======
  if (filters.has_trainer_read !== undefined && filters.has_trainer_read !== null) {
    url += "&has_trainer_read=" + filters.has_trainer_read
>>>>>>> 2798d947a9cc7eb65ed4abcf979f6e2cd63644a8
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
