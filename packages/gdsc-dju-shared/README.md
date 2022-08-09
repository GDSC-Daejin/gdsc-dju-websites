# GDSC DJU Event Site




## Getting Started

```bash
 > npx react-vite-todo-boilerplate my-project
 > yarn && yarn install
 > yarn dev && vite 
```

or

```bash
> git clone https://github.com/GDSC-Daejin/react-vite-todo-boilerplate
> yarn && yarn install
> yarn dev && vite
```



## Stack

- React.js + TypeScript
- [Vite](https://vitejs-kr.github.io/)
- Eslint
- Prettier
- Styled-Components (CSS in JS)
- [Zustand (상태관리)](https://zustand.surge.sh/)



## FolderIcon Structure

```
├── package-lock.json //프로젝트 초기
├── package.json // 프로젝트 정보가 담긴 공간입니다.
├── src
│   ├── App.tsx
│   ├── README.md
│   ├── apis //서버 통신을 위한 파일을 두는 폴더입니다.
│   ├── assets //사진, 아이콘을 저장하는 폴더입니다.
│   ├── components //버튼, 인풋 같은 재사용을 해야하는 컴포넌트를 저장하는 폴더입니다.
│   │   └── TodoCard.tsx
│   ├── fonts //폰트 저장소입니다.
│   ├── layout //페이지 레이아웃을 저장하는 폴더입니다.
│   │   ├── home.home.styled.ts // 홈 레이아웃 스타일을 저장하는 파일입니다.
│   │   ├── home.tsx //홈 레이아웃 파일입니다.
│   │   └── ScrollTop.tsx //route를 위한 파일입니다.
│   ├── main.tsx
│   ├── pages // 페이지를 저장하는 폴더입니다.
│   │   └── Home
│   │       └── ScrollTop.tsx
│   ├── store // 상태를 저장하는 폴더입니다.
│   │   └── menuStore.ts
│   ├── styles // 스타일을 저장하는 폴더입니다.
│   │   ├── declare.ts //커스텀 스타일을 사용하기 위한 파일입니다.
│   │   ├── fontSize.ts // 폰트 크기를 저장하는 파일입니다.
│   │   ├── globalStyles.ts // 전역 스타일을 저장하는 파일입니다.
│   │   ├── layouts.ts // 레이아웃을 저장하는 파일입니다.
│   │   ├── index.ts // 색상을 저장하는 파일입니다.
│   │   ├── theme.ts // 각 에셋을 합쳐주는 파일입니다.
│   │   └── windowSize.ts // 윈도우 크기를 저장하는 파일입니다.
│   ├── types // 타입을 저장하는 폴더입니다.
│   │   └── todo.d.ts
│   ├── utils // 기타 커스텀 파일을 저장하는 폴더입니다.
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
