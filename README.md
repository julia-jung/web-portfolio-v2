<!-- HEADER -->
<br />
<h1 align="center">
  <a href="http://www.amitmerchant.com/electron-markdownify">
    👩‍💻
  </a>
  <br />
  My Web Portfolio v2
  <br />
</h1>

<!-- STACK -->

[![Next][Next.js]][Next-url] [![React][React.js]][React-url] [![Tailwind][TailwindCSS]][Tailwind-url] [![Typescript][Typescript]][Typescript-url] [![Vercel][Vercel]][Vercel-url]

<!-- DESCRIPTION-->

<div align="center">
  <img src="/public/images/preview.png" width="800" />
  <p align="center">
    A single page portfolio website showcasing my work and projects as a professional software engineer, built with <strong>React 18, Next.js 14, and styling fully with Tailwind CSS<strong>.
    <br />
    <h3>
      <a href="https://www.minji-jung.com">
        <strong>Visit 👉</strong>
      </a>
    </h3>
    <br />
    <br />
  </p>
</div>

<!-- CONTENTS -->

## Getting Started

### Prerequisites

- Node.js version >= v18.17.0 is required
- npm package manager

### Installation

```bash
$ npm install
```

### Running the App

```bash
$ npm run dev # listen to port 3000

```

- Open [localhost:3000](http://localhost:3000) in your browser to see the app

## Dependencies

| package       |  version |
| ------------- | -------: |
| `typescript`  |     `^5` |
| `react`       |    `^18` |
| `next`        | `14.1.3` |
| `tailwindcss` | `^3.3.0` |

## Directory Structure

```bash
├── app
├── components
│   ├── icons
│   ├── sections
│   └── ui
├── hooks
├── lib
├── public
└── types
```

| Path                 | Description                                                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| /app                 | Application entry (used to define routes by [Nextjs App Rotuer](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)) |
| /components          | All other React Components other than route pages                                                                                              |
| /components/icons    | Icons components                                                                                                                               |
| /components/sections | Section contents components (e.g. About, Projects,...)                                                                                         |
| /components/ui       | Shared UI components                                                                                                                           |
| /hooks               | Custom React Hooks                                                                                                                             |
| /lib                 | Sources outside React (data, fonts,...)                                                                                                        |
| /public              | Public assets (Images, docs,...)                                                                                                               |
| /types               | All Type files (Interfaces,...)                                                                                                                |

<!-- MARKDOWN LINKS & IMAGES -->

[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
