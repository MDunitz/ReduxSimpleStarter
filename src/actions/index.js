import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  FETCH_DATA
} from './types';

const ROOT_URL_DB = 'http://localhost:3000/api'
const dataObj ={
  user : byUser,
  input : byPrint,
  output : byPrint,
  pressure : byPrint,
  extruder1 : byPrint,
  extruder2 : byPrint,
  clEnabled : byPrint,
  clDuration : byPrint,
  clIntensity : byPrint,
  layerNum : byPrint,
  layerHeight : byPrint,
  wellplate : byPrint,
  livePercent : byResult,  
  deadPercent : byResult,
  elasticity : byResult
}

//contain all the action creators that we make
//action creators return an action which will run through all the reducers
export function selectData(data, sortedBy){
  const sortType = dataObj[sortedBy];
  const request = axios.get(`${ROOT_URL_DB}/${sortType}`, {
    params : {
      data : data,
      sortedBy : sortedBy
    }
  });
  return {
    type: FETCH_DATA,
    payload: request
  };
}

