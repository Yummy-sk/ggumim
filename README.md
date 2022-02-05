<div id="top"></div>

<!-- PROJECT SHIELDS -->
<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">집꾸미기</h3>

  <p align="center">
    집꾸미기 API를 통해 상품 선택 기능을 구현해봤습니다.
    <br />
    <br />
    <a href="https://yummy-sk.github.io/ggumim/"><strong>배포 링크</strong></a>
  </p>
</div>

<br>

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#과제-소개">과제 소개</a></li>
    <li><a href="#구현한-기능">구현한 기능</a></li>
    <li>
      <a href="#설치-및-실행">설치 및 실행
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#프로젝트-구조">프로젝트 </a></li>
  </ol>
</details>

<br>
<hr>
<br>

<!-- 과제 소개 -->

## 과제 

![ezgif-5-7f2677cae8-min](https://user-images.githubusercontent.com/60822846/152635938-6225fe8b-4676-4c3a-b3dd-eca6cf7c2f67.gif)

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

<!-- 구현한 기능 -->

## 구현한 기능

-   [x] 가구 정보 뷰어 구현
    -   [x] 돋보기 아이콘을 클릭하면 상품 정보 tool tip을 출력하고, 돋보기 아이콘을 닫기 아이콘으로 변경한다.
    -   [x] tool tip이 출력되는 상태에서 다른 돋보기를 클릭하면 노출되던 tool tip 대신 새로운 tool tip을 출력한다.
    -   [x] 배경 이미지를 클릭하면 노출되던 tool tip이 닫힌다.
    -   [x] 돋보기가 위치한 사분면에 따라 tool tip의 위치가 변한다.
-   [x] 가구 이미지 슬라이더 구현
    -   [x] 가구 이미지를 클릭해 선택할 시 선택한 가구를 붉은색 테두리로 표시한다.
    -   [x] 선택한 가구 이미지를 다시 클릭하면 선택이 풀린다.
    -   [x] 슬라이더를 마우스로 드래그할 시 가구 이미지를 움직일 수 있다.
    -   [x] 할인율이 존재하는 가구의 경우 상단에 할인율을 표시한다.
-   [x] 가구 정보 뷰어와 가구 이미지 슬라이더 간 선택된 가구를 공유한다.

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

<!-- 설치 및 실행 -->

## 설치 및 실행

### Prerequisites

1. npm

```sh
npm install npm@latest -g
```

### Installation

1. Repo를 clone한다
    ```sh
    git clone https://github.com/gml9812/wanted-frontend-pre-on-boarding-mission.git
    ```
2. NPM pakage들을 설치한다
    ```sh
    npm install
    ```
3. localhost에서 프로젝트를 실행한다
    ```sh
    npm start
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

<!-- 프로젝트 구조 -->

## 프로젝트 구조

```bash
src
 ┣ components
 ┃ ┣ atom
 ┃ ┃ ┣ DiscountBadge
 ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┗ style.jsx
 ┃ ┃ ┣ ItemPicture
 ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┗ style.jsx
 ┃ ┃ ┣ Modal
 ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┗ style.jsx
 ┃ ┃ ┣ Photo
 ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┗ style.jsx
 ┃ ┃ ┗ TagIcon
 ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┗ style.jsx
 ┃ ┣ molecule
 ┃ ┃ ┗ SeeMore
 ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┗ style.jsx
 ┃ ┣ organism
 ┃ ┃ ┣ PhotoView
 ┃ ┃ ┃ ┗ index.jsx
 ┃ ┃ ┗ Swiper
 ┃ ┃ ┃ ┣ index.jsx
 ┃ ┃ ┃ ┗ style.jsx
 ┃ ┗ index.js
 ┣ hooks
 ┃ ┣ index.js
 ┃ ┗ useFetch.jsx
 ┣ pages
 ┃ ┣ Contents
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ style.jsx
 ┃ ┗ index.js
 ┣ utils
 ┃ ┣ index.js
 ┃ ┣ putCommaAtPrice.js
 ┃ ┗ urls.js
 ┣ .eslintrc.js
 ┣ .prettierrc.js
 ┣ App.jsx
 ┗ index.jsx
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>
