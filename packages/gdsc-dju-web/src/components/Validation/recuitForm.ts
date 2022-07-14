import { applicationQuestions } from '../../apis/pageData/recruitInfo';

export const formValidation = {
  name: {
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[ㄱ-ㅎ|가-힣]/g,
      message: '한글만 입력 가능해요.',
    },
    minLength: {
      value: 2,
      message: '이름 전체를 입력해주세요.',
    },
  },
  phoneNumber: {
    pattern: {
      value: /^01([0|1|6|7|8|9])-(\d{4})-(\d{4})$/,
      message: '전화번호 형식에 맞춰 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[gmail]+\.[A-Z]{3}$/i,
      message: '이메일 형식에 맞춰 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  major: {
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[ㄱ-ㅎ|가-힣]/g,
      message: '한글만 입력 가능해요.',
    },
    minLength: {
      value: 3,
      message: '전공을 전부 입력해주세요',
    },
  },
  studentID: {
    pattern: {
      value: /^[0-9]{8}$/,
      message: '학번을 전부 입력해주세요',
    },
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  position: {},
  question1: {
    label: applicationQuestions.question1,
    text: '* 디자이너 분들은 사용가능한 툴에 대해서 알려주세요.',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  question2: {
    label: applicationQuestions.question2,
    text: ' * 프로젝트 경험이 없다면 본인이 노력해서 보람을 느낀 일에 대해서 알려주세요.',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  question3: {
    label: applicationQuestions.question3,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  question4: {
    label: applicationQuestions.question4,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  question5: {
    label: applicationQuestions.question5,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  link0: {
    pattern: {
      value:
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z\d]+([\-\.]{1}[a-z\d]+)*\.[a-z]{2,5}(:\d{1,5})?(\/.*)?$/,
      message: 'URL 형식에 맞춰 입력해주세요',
    },
  },
  link1: {
    pattern: {
      value:
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
      message: 'URL 형식에 맞춰 입력해주세요',
    },
  },
  recommender: {},
};
