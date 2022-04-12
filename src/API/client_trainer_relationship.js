import axios from "axios";
import { getDefaultAxios } from "./apiHelper"

import { LIST_CLIENT_TRAINER_RELATIONSHIP_ENDPOINT } from "../Constants/App";


export function getClientTrainerRelationshipList(onGetClientTrainerRelationshipSucces, onGetClientTrainerRelationshipError, onGetClientTrainerRelationshipDone){
  const a = getDefaultAxios()
  a.get(LIST_CLIENT_TRAINER_RELATIONSHIP_ENDPOINT)
  .then(onGetClientTrainerRelationshipSucces)
  .catch(onGetClientTrainerRelationshipError)
  .then(onGetClientTrainerRelationshipDone)
}

export function postClientTrainerRelationship(data, onSuccefulCallBack, onErrorCallBack, doneCallBack){
  const a = getDefaultAxios()
  a.post(LIST_CLIENT_TRAINER_RELATIONSHIP_ENDPOINT, data)
  .then(onSuccefulCallBack)
  .catch(onErrorCallBack)
  .then(doneCallBack)
}
