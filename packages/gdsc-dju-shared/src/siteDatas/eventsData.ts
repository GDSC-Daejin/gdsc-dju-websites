import { EventsDataType } from '../types/event';
import { userData } from './userData';

export const eventsData: EventsDataType = [
  {
    type: 'session',
    title: 'GDSC DJU \n public Session #2',
    description: '모두가 참여할 수 있는 public Session',
    start: '2022-08-03 21:00',
    end: '2022-08-03 22:00',
    applyLink: 'https://festa.io/events/jzANzyaSGSBxi9BJYgRB5w/',
    sessions: [
      {
        title: '비전공 개발자에서 동아리 내 백엔드 최강자가 되기까지',
        time: '21:00 - 20:15',
        profileImage: userData.Rocoli.profileImage,
        name: userData.Rocoli.name,
        position: userData.Rocoli.position,
      },
      {
        title: '대학생 프로젝트를 회사 업무처럼 진행해보기',
        time: '21:20 - 22:35',
        profileImage: userData.Saboten.profileImage,
        name: userData.Saboten.name,
        position: userData.Saboten.position,
      },
      {
        title: 'IT 기업 기술 인터뷰 후기와 현실',
        time: '21:40 - 21:55',
        profileImage: userData.Jason.profileImage,
        name: userData.Jason.name,
        position: userData.Jason.position,
      },
      {
        title: 'GDSC에 대해',
        time: '22:00 - 21:15',
        profileImage: userData.Jim.profileImage,
        name: userData.Jim.name,
        position: userData.Jim.position,
      },
    ],
  },
  {
    type: 'session',
    title: 'GDSC DJU public Session #1',
    description: '모두가 참여할 수 있는 public Session',
    start: '2022-05-18 20:00',
    end: '2022-05-18 22:00',
    applyLink: '',

    sessions: [
      {
        title: '비전공자가 프론트?',
        time: '20:00 - 20:20',
        profileImage: userData.Jason.profileImage,
        name: userData.Jason.name,
        position: userData.Jason.position,
      },
      {
        title: '디자이너가 개발자 사이에서 살아남는 방법',
        time: '20:30 - 20:50',
        profileImage: userData.Blaire.profileImage,
        name: userData.Blaire.name,
        position: userData.Blaire.position,
      },
      {
        title: '창업부터 보안까지 대학생활의 묘미! 대외활동 탐방기',
        time: '21:00 - 21:20',
        profileImage: userData.Want.profileImage,
        name: userData.Want.name,
        position: userData.Want.position,
      },
      {
        title: '코흘리개 안드로이드 뉴비에서 코흘리개 콴다 개발자까지\n',
        time: '21:30 - 21:50',
        profileImage: userData.Harry.profileImage,
        name: userData.Harry.name,
        position: userData.Harry.position,
      },
    ],
  },
];
