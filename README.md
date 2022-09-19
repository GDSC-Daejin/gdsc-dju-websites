# gdsc-dju-frontend
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Deploy to GDSC DJU Web Live Channel](https://github.com/GDSC-Daejin/gdsc-dju-websites/actions/workflows/gdsc-dju-web-deploy-live.yml/badge.svg)](https://github.com/GDSC-Daejin/gdsc-dju-websites/actions/workflows/gdsc-dju-web-deploy-live.yml)

[![Deploy to GDSC DJU Shared Live Channel](https://github.com/GDSC-Daejin/gdsc-dju-websites/actions/workflows/gdsc-dju-shared-deploy-live.yml/badge.svg)](https://github.com/GDSC-Daejin/gdsc-dju-websites/actions/workflows/gdsc-dju-shared-deploy-live.yml)

[![Deploy to GDSC DJU ADMIN Live Channel](https://github.com/GDSC-Daejin/gdsc-dju-websites/actions/workflows/gdsc-dju-admin-deploy-live.yml/badge.svg)](https://github.com/GDSC-Daejin/gdsc-dju-websites/actions/workflows/gdsc-dju-admin-deploy-live.yml)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FGDSC-Daejin%2Fgdsc-dju-frontend&count_bg=%23EA4335&title_bg=%234285F4&icon=google.svg&icon_color=%23FFFFFF&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)


GDSC Daejin Univ. 에서 관리되는 서비스의 모노레포입니다.

[GDSC DJU WEB](https://web.gdsc-dju.com) 소개사이트

[GDSC DJU SHARED](https://shared.gdsc-dju.com) 이벤트 사이트

[GDSC DJU BLOG](https://blog.gdsc-dju.com) 기술 블로그(개발중)

[GDSC DJU HEY TEDDY](https://teddy.gdsc-dju.com) 칭찬 시스템

[GDSC DJU DESIGN SYSTEM](https://design.gdsc-dju.com) 디자인 시스템

## Git Flow / Commit convention rule

### Branch Rule

master과 develop을 제외한 다른 브랜치는 도메인 별로 다른 브랜치를 사용합니다.

- master - 메인 브랜치

- feature - 새로운 기능 브랜치

- refactor - 코드 리팩토링

- hotfix - 급한 경우만 사용하는 브랜치

feature/`프로젝트 이름`/`issue번호`-`기능이름`
 
ex) feature/gdsc-dju-web/29-navigation

### Commit convention rule

- feat : 새로운 기능에 대한 커밋
- fix : 버그 수정에 대한 커밋
- build : 빌드 관련 파일 수정에 대한 커밋
- chore : 그 외 자잘한 수정에 대한 커밋
- ci : CI관련 설정 수정에 대한 커밋
- docs : 문서 수정에 대한 커밋
- style : 코드 스타일 혹은 포맷 등에 관한 커밋
- refactor : 코드 리팩토링에 대한 커밋
- test : 테스트 코드 수정에 대한 커밋

## Getting started

```bash
> yarn install
> yarn workspace {project name} install
> yarn workspace {project name} dev && vite
```

## Contributors

<a href="https://github.com/GDSC-Daejin/gdsc-dju-frontend/graphs/contributors" style="display: flex; align-items: center; justify-content: center">
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/bjc1102"><img src="https://avatars.githubusercontent.com/u/71929440?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Byeong Ju Choi</b></sub></a><br /><a href="https://github.com/GDSC-Daejin/gdsc-dju-websites/commits?author=bjc1102" title="Code">💻</a></td>
      <td align="center"><a href="https://starlight-j-h.tistory.com/"><img src="https://avatars.githubusercontent.com/u/61281239?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hyeok_E</b></sub></a><br /><a href="https://github.com/GDSC-Daejin/gdsc-dju-websites/commits?author=HyeokE" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
