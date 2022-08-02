export const onBoardingData = [
  {
    id: 'email',
    title: 'Email Address',
    subTitle: '지원서에 적어주신 이메일을 입력해주세요.',
    colors: '#E94436',
    placeHolder: '사용 중인 구글 이메일',
    img: 'Human1',
    next: 'middle/nickname',
  },
  {
    id: 'nickname',
    title: 'English Name',
    subTitle:
      '지원서에 다들 적어주셨듯, GDSC DJU 에서는 영어이름을 호칭으로 사용합니다. ',
    colors: '#179D58',
    placeHolder: '당신의 영어이름을 입력해주세요',
    img: 'Human2',
    next: 'middle/major',
  },
  {
    id: 'major',
    title: 'Major',
    subTitle: '당신이 속해있는 학과를 알려주세요.',
    colors: '#4385F3',
    placeHolder: '당신의 학과를 입력해주세요',
    img: 'Human3',
    next: 'middle/interest',
  },
  {
    id: 'interest',
    title: 'Interest',
    subTitle:
      '만들고 싶은 서비스나 요즘 관심있는 것, GDSC 에서 가장 하고 싶은 것 등을 자유롭게 적어주세요',
    colors: '#FABC05',
    placeHolder: '관심있는 기술, 프로젝트, 활동',
    img: 'Human4',
    next: 'almost',
  },
];
