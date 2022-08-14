import { ValidationMemberInfo } from '../../types/userDataType';

export type FormElementsType<T extends string> = {
  [key in T]: FormElement;
};
export type FormElement = {
  label?: string;
  placeholder?: string;
  isModifyBlock?: boolean;
  isBlock?: boolean;
  valueAsDate?: true;
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
};
//<keyof IUserInfoDataType>
export const formValidation: FormElementsType<keyof ValidationMemberInfo> = {
  generation: {
    label: '기수',
    placeholder: '관리자 권한입니다.',
    isBlock: true,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[A-Z]+[a-zA-Z]/,
      message: '대문자로 시작해야해요.',
    },
    minLength: {
      value: 2,
      message: '2글자 이상 작성해주세요.',
    },
  },
  nickname: {
    label: '닉네임',
    placeholder: 'Googler',
    isModifyBlock: true,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[A-Z]+[a-zA-Z]/,
      message: '대문자로 시작해야해요.',
    },
    minLength: {
      value: 2,
      message: '2글자 이상 작성해주세요.',
    },
  },
  introduce: {
    label: '소개글',
    placeholder: '자신을 소개하는 글을 적어주세요.',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    minLength: {
      value: 1,
      message: '1글자 이상 작성해주세요.',
    },
  },
  birthday: {
    label: '생일',
    placeholder: '2000.01.01',
    valueAsDate: true,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[0-9]{4}.^[0-9]{1,2}.^[0-9]{1,2}$/,
      message: '날짜 포멧(YYYY.MM.DD)을 지켜 입력해주세요.',
    },
  },
  phoneNumber: {
    label: '전화번호',
    placeholder: '010-1234-5678',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/,
      message: '전화번호 형식에 맞춰 입력해주세요.',
    },
  },
  major: {
    label: '전공',
    placeholder: '구글개발학과',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
      message: '한글만 입력할 수 있어요.',
    },
  },
  positionType: {
    label: '포지션',
    placeholder: '관리자 권한입니다.',
    isBlock: true,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
  },
  gitEmail: {
    label: '깃허브 이메일',
    placeholder: 'gdscdju@gmail.com',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value:
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
      message: '이메일 형식에 맞춰 작성해주세요.',
    },
  },
  studentID: {
    label: '학번',
    placeholder: '20221234',
    isModifyBlock: true,
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    pattern: {
      value: /^[0-9]{8}$/,
      message: '학번 8자리를 모두 입력해주세요.',
    },
  },
  hashTag: {
    label: '해시태그',
    placeholder: ',로 구분합니다.',
    required: {
      value: true,
      message: '필수 입력 값이에요.',
    },
    minLength: {
      value: 10,
      message: '10글자 이상 입력해주세요.',
    },
  },
  githubUrl: {
    label: '깃허브 주소',
    placeholder: 'https://',
    pattern: {
      value: /(http(s)?:\/\/)+(github)+\.+(com\/)+[A-Z,a-z]/,
      message: 'github.com 형식에 맞춰 작성해주세요.',
    },
  },
  blogUrl: {
    label: '블로그 주소',
    placeholder: 'https://',
    pattern: {
      value: /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/,
      message: 'http/https 형식으로 작성해주세요',
    },
  },
  etcUrl: {
    label: '기타 웹페이지',
    placeholder: 'https://',
    pattern: {
      value: /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/,
      message: 'http/https 형식으로 작성해주세요',
    },
  },
};
