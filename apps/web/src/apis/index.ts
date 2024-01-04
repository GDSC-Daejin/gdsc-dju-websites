// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';

import { getRecruitmentInfoDataType, recruitmentInfoDataType } from './types';

export class GDSCApi {
  protected API: string;
  constructor() {
    this.API = 'https://api.gdscdju.dev';
  }

  getRecruitStatus = () => {
    return axios.get<getRecruitmentInfoDataType>(
      `${this.API}/member-route/api/v1/support/limit`,
    );
  };
  putRecruitStatus = (payload: recruitmentInfoDataType) => {
    return axios.put<recruitmentInfoDataType>(
      `${this.API}/member-route/api/admin/v1/support/limit/update`,
      payload,
    );
  };
  getMemberList = () => {
    return axios.get(`${this.API}/member-route/api/v1/members`);
  };
  getChapterEvents = () => {
    return axios.get(`https://gdsc.community.dev/api/event/?chapter=1833`);
  };
}
export const sendDiscordNotification = async (
  name: string,
  position: string,
) => {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL; // Replace with your webhook URL
  const message = {
    username: 'GDSC DJU',
    avatar_url: 'https://i.imgur.com/4M34hi2.png',
    content: '<@&907258554245861416> 지원서가 도착했습니다!',
    embeds: [
      {
        author: {
          name: `지원자 : ${name} 님`,
        },
        title: `GDSC ${position} 지원서 신청 알림`,
        url: 'https://admin.gdscdju.dev/',
        color: 15258703,
      },
    ],
  };

  try {
    await axios.post(webhookUrl, message);
  } catch (error) {
    console.error('Error sending notification to Discord', error);
  }
};

export default new GDSCApi();
