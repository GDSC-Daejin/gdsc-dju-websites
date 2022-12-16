import { androidRecruitInfo } from '@contents/recruitment/android';
import { backendRecruitInfo } from '@contents/recruitment/backend';
import { beginnerRecruitInfo } from '@contents/recruitment/beginner';
import { designRecruitInfo } from '@contents/recruitment/design';
import { designBeginnerRecruitInfo } from '@contents/recruitment/designBeginner';
import { frontendRecruitInfo } from '@contents/recruitment/frontend';
import { iosRecruitInfo } from '@contents/recruitment/ios';
import { mlRecruitInfo } from '@contents/recruitment/ml';
import { AnnouncementData } from '@type/pageData';

export const recruitDefaultText = {
  developer:
    '코딩에 대한 남다른 애정을 가지신 분\n' +
    '1년이상 활동이 가능하신 분\n' +
    '책임감이 있으신 분\n' +
    '주도적으로 의견을 얘기하거나 반박하는데 거리낌이 없으신 분\n' +
    '동료들에게 좋은 시너지를 줄 수 있으신 분\n' +
    '타인의 의견을 적극적으로 수용하고 개선하려고 노력하시는 분\n' +
    '프로젝트의 애정과 책임을 가지고 주도적으로 개발, 개선할 수 있으신 분\n' +
    '커뮤니케이션 및 개발 문서 정리에 능숙하신 분\n' +
    '코딩에 대하여 잘 모르더라도 매일 학습하고, 모르는 게 있으면 주도적으로 해결할 수 있으신 분',
  designer:
    'UX/UI 디자인에 대한 남다른 애정을 가지신 분\n' +
    '1년이상 활동이 가능하신 분\n' +
    '책임감이 있으신 분\n' +
    '주도적으로 의견을 얘기하거나 반박하는데 거리낌이 없으신 분\n' +
    '동료들에게 좋은 시너지를 줄 수 있으신 분\n' +
    '타인의 의견을 적극적으로 수용하고 개선하려고 노력하시는 분\n' +
    '프로젝트의 애정과 책임을 가지고 주도적으로 개발, 개선할 수 있으신 분\n' +
    '커뮤니케이션 및 문서 정리에 능숙하신 분\n' +
    '디자인에 대하여 잘 모르더라도 매일 학습하고, 모르는 게 있으면 주도적으로 해결할 수 있으신 분',
  goodMember:
    'Github, git에 대한 경험이나 프로젝트 경험이 있는 분이면 좋습니다.\n' +
    'Framework나 Library 사용이 능숙하신 분이면 좋습니다.',
  benefits:
    '여러 국가의 GDSC 및 GDSC Korea와의 커뮤니케이션\n' +
    'GDG 개발자와의 컨택 기회\n' +
    'google에서 지원하는 기념품\n' +
    '자체 스터디를 위한 google의 코세라, 퀵랩 바우처 지급',
  process:
    '서류접수 > 인터뷰 > 최종합격 (결과 발표에는 최대 2주가 소요될 수 있습니다.)',
};

export const announcementData: AnnouncementData[] = [
  frontendRecruitInfo,
  backendRecruitInfo,
  androidRecruitInfo,
  mlRecruitInfo,
  iosRecruitInfo,
  designRecruitInfo,
  designBeginnerRecruitInfo,
  beginnerRecruitInfo,
];
