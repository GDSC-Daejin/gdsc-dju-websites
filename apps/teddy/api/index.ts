import axios from 'axios';

import { rowScoreBoardType, rowUserStateDataType } from '../types';
import { FilterType, ListType } from '../types/filterType';

export class TeddyBearApi {
  protected API: string;
  constructor() {
    this.API = 'https://teddy-backend.gdscdju.dev';
    
  }
  getScoreboard = (filter: FilterType, listType: ListType) => {
    return axios.get<rowScoreBoardType>(
      `${this.API}/scoreboard/${filter}/${listType}/inc`,
    );
  };
  getUserState = (filter: FilterType, userID: string) => {
    return axios.get<rowUserStateDataType>(
      `${this.API}/userstats/${filter}/${userID}`,
    );
  };
}
export default new TeddyBearApi();
