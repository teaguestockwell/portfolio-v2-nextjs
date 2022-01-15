[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[license-shield]: https://img.shields.io/github/license/teaguestockwell/portfolio-v2-nextjs.svg
[license-url]: https://github.com/teaguestockwell/portfolio-v2-nextjs/blob/master/licence.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/teague-stockwell/

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://teaguestockwell.com">
    <img src="./public/favorite-icons/mstile-150x150.png" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">Portfolio</h3>

  <p align="center">
    See my work and learn a little about me.
    <br />
    <a href="https://teaguestockwell.com">View Portfolio</a>
    ·
    <a href="https://github.com/teaguestockwell/portfolio-v2-nextjs/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A static website created with Next.js to showcase my development work. Some of the features of this portfolio are:

- Statically generated HTML with Next.js
- PWA (Progressive Web App)
- HLS (Http Live Streaming) demo videos

## Built With

- [Create Next App](https://nextjs.org/docs/api-reference/create-next-app)
- [TypeScript](https://www.typescriptlang.org)

## Getting Started

To get a local copy up and running follow these simple steps.

1. Fork the repository
2. Clone the repository
3. Install dependencies

```sh
npm i
```

4. Run the dev server

```sh
npm run dev
```

5. Navigate to http://localhost:3000

## Deployment

1. [Generate favorite icons and upload them into ./public](https://realfavicongenerator.net)
2. Modify manifest.json to point to your icons, and to include a description
3. [Set up a bucket for video hosting](https://www.youtube.com/watch?v=e6w9LwZJFIA)
4. [Configure a cdn in front of the bucket](https://www.youtube.com/watch?v=e6w9LwZJFIA)
5. [Encoded your project demo videos into an m3u8 playlist for http live streaming (HLS)](https://www.youtube.com/watch?v=x20Qx7lWSLQ)
6. [Deploy the portfolio](https://nextjs.org/docs/deployment)
7. [Customize the domain of the deployment](https://vercel.com/docs/custom-domains)
8. Modify the portfolio data to reflect your work, deployment domain, the source of the m3u8 playlists for videojs, and the path to your images inside ./public

## Roadmap

See the [open issues](https://github.com/teaguestockwell/portfolio-v2-nextjs/issues) for a list of proposed features (and known issues).

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Teague Stockwell - [LinkedIn](https://www.linkedin.com/in/teague-stockwell)

## Acknowledgements

- [Brady Haden's Portfolio](https://github.com/bhaden94/react-portfolio)
- [Simple Icons](https://github.com/simple-icons/simple-icons)
- [Video JS](https://github.com/videojs/video.js)
- [Tag Canvas](https://github.com/goat1000/TagCanvas)
