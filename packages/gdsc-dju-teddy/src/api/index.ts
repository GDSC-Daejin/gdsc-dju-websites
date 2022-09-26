import axios from 'axios';
import { rowScoreBoardType, rowUserStateDataType } from '../types';
import { FilterType } from '../types/filterType';

export class TeddyBearApi {
  protected API: string;
  constructor() {
    this.API = 'https://gold-candles-sink-218-236-101-36.loca.lt';
  }
  getMonthlyScoreBoard = (filter: FilterType) => {
    return axios.get<rowScoreBoardType>(`${this.API}/scoreboard/${filter}/inc`);
  };
  getWeeklyScoreBoard = (filter: FilterType) => {
    return axios.get<rowScoreBoardType>(`${this.API}/scoreboard${filter}/inc`);
  };
  getUserState = (filter: FilterType, userID: string) => {
    return axios.get<rowUserStateDataType>(`${this.API}/userstats/${userID}`);
  };
}
export default new TeddyBearApi();
