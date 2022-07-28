import axios from 'axios';
import {
  rowScoreBoardType,
  rowUserStateDataType,
  scoreBoardType,
  userStateDataType,
} from '../types';

export class TeddyBearApi {
  private API: string;
  constructor() {
    this.API = 'https://gdsc-teddy-bear.herokuapp.com';
  }
  getMonthlyScoreBoard = (filter: string) => {
    return axios.get<rowScoreBoardType>(
      `${this.API}/api/scoreboard/${filter}/inc`,
    );
  };
  getWeeklyScoreBoard = (filter: string) => {
    return axios.get<rowScoreBoardType>(
      `${this.API}/api/scoreboard/${filter}/inc`,
    );
  };
  getUserState = (userID: string) => {
    return axios.get<rowUserStateDataType>(
      `${this.API}/api/userstats/${userID}`,
    );
  };
}
export default new TeddyBearApi();
/*

export default new TeddyBearApi();
async function fetcher (type, {username,listType, scoreType}) {
  switch (type) {
    case 'scoreboard':
      const res = await fetch(`/api/scoreboard/${listType}/${scoreType}`);
      const json = await res.json();
      return json.data;
      break;
    case 'userStats':
      const res1 = await fetch(`/api/userstats/${username}`);
      const json1 = await res1.json();
      return json1.data;
      break;
    case 'userScore':
      const res2 = await fetch(`/api/userscore/${username}/${listType}/${scoreType}`);
      const json2 = await res2.json();
      const {data} = json2;
      return json2;
      break;
  // }
*/
