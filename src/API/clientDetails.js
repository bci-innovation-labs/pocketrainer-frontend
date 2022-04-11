
import axios from "axios";
import { getDefaultAxios } from "./apiHelper"


import { RETRIEVE_UPDATE_DELETE_CLIENT_ENDPOINT } from "../Constants/App";

export function getClientDetails(id, onGetClientDetailsSucces, onGetClientDetailsError, onGetClientDetailsDone){
  const a = getDefaultAxios()
  a.get(RETRIEVE_UPDATE_DELETE_CLIENT_ENDPOINT.replace(":id", id))
  .then(onGetClientDetailsSucces)
  .catch(onGetClientDetailsError)
  .then(onGetClientDetailsDone)
}
