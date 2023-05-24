
<br/>
<p align="center">
  <a href="https://github.com/Ambushfall/turborepo">
    <img src="public/midj/img7.png" alt="Logo" width="300" height="300">
  </a>

  <h3 align="center">ExperimentalApp</h3>

  <p align="center">
    NextJS 13 App Dir
    <br/>
    <a href="https://ambushfall-next13-app.vercel.app/" target="_blank">View Demo</a>
    |
    <a href="https://github.com/Ambushfall/turborepo/issues">Report Bug</a>
    |
    <a href="https://github.com/Ambushfall/turborepo/issues">Request Feature</a>
  </p>
</p>

## Table of contents
- [Table of contents](#table-of-contents)
- [Quick start](#quick-start)
- [Status](#status)
- [Version](#version)
- [What is included](#what-is-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [To Be added](#to-be-added)
- [Creators](#creators)
- [Thanks](#thanks)
- [License](#license)
- [Testing](#testing)
<!--  -->

## Quick start

```sh
pnpm i && pnpm run dev
```

## Status

Development

## Version

- Version [1.5.1]

## What is included

> Folder Structure :


[//]: # (dree - BEGIN)
```
turborepo
 ├─> apps
 │   ├─> cloudinary-test
 │   │   ├─> components
 │   │   │   ├── Carousel.tsx
 │   │   │   ├─> Icons
 │   │   │   │   ├── Bridge.tsx
 │   │   │   │   ├── Logo.tsx
 │   │   │   │   └── Twitter.tsx
 │   │   │   ├── Modal.tsx
 │   │   │   └── SharedModal.tsx
 │   │   ├── next.config.js
 │   │   ├── package.json
 │   │   ├─> pages
 │   │   │   ├── _app.tsx
 │   │   │   ├── _document.tsx
 │   │   │   ├── index.tsx
 │   │   │   └─> p
 │   │   │       └── [photoId].tsx
 │   │   ├── postcss.config.js
 │   │   ├─> public
 │   │   │   ├── favicon.ico
 │   │   │   └── og-image.png
 │   │   ├── README.md
 │   │   ├─> styles
 │   │   │   └── index.css
 │   │   ├── tailwind.config.js
 │   │   ├── tsconfig.json
 │   │   └─> utils
 │   │       ├── animationVariants.ts
 │   │       ├── cachedImages.ts
 │   │       ├── cloudinary.ts
 │   │       ├── downloadPhoto.ts
 │   │       ├── generateBlurPlaceholder.ts
 │   │       ├── range.ts
 │   │       ├── types.ts
 │   │       └── useLastViewedPhoto.ts
 │   └─> experimentalapp
 │       ├─> app
 │       │   ├─> api
 │       │   │   └── route.ts
 │       │   ├─> editor
 │       │   │   └── page.tsx
 │       │   ├── error.tsx
 │       │   ├── Footer.tsx
 │       │   ├─> gallery
 │       │   │   └── page.tsx
 │       │   ├─> github
 │       │   │   └─> [userName]
 │       │   │       └── route.ts
 │       │   ├── head.tsx
 │       │   ├── icon.tsx
 │       │   ├── layout.tsx
 │       │   ├─> lightbox
 │       │   │   ├── Lightbox.tsx
 │       │   │   ├── page.tsx
 │       │   │   ├── slides.ts
 │       │   │   └── useLightbox.tsx
 │       │   ├── loading.tsx
 │       │   ├── page.tsx
 │       │   ├─> projects
 │       │   │   └── page.tsx
 │       │   └── sitemap.ts
 │       ├─> components
 │       │   ├── analytics.tsx
 │       │   ├── favicon.tsx
 │       │   ├─> gallery
 │       │   │   └── Gallery.tsx
 │       │   ├── gradientBackground.tsx
 │       │   ├─> navbar
 │       │   │   └── NavLinkTailwind.tsx
 │       │   ├─> projects
 │       │   │   ├── Constants.ts
 │       │   │   ├── displayProfile.tsx
 │       │   │   ├── ProjectModule.tsx
 │       │   │   └── RepositoryModule.tsx
 │       │   └─> svg
 │       │       ├── github.tsx
 │       │       └── homeSVG.tsx
 │       ├── dree.config.json
 │       ├─> helpers
 │       │   └── toPascalCase.tsx
 │       ├── ignore-step.sh
 │       ├─> json
 │       │   └── manifest.json
 │       ├── next.config.js
 │       ├── package.json
 │       ├─> pages
 │       │   └─> docs
 │       │       └── index.mdx
 │       ├── postcss.config.js
 │       ├── prebuild.js
 │       ├─> public
 │       │   ├── favicon.ico
 │       │   ├── MD_CHEATSHEET.MD
 │       │   ├─> midj
 │       │   │   ├── grid_0.png
 │       │   │   ├── grid_1.png
 │       │   │   ├── grid_2.png
 │       │   │   ├── grid_3.png
 │       │   │   ├── grid_4.png
 │       │   │   ├── img1.png
 │       │   │   ├── img2.jpg
 │       │   │   ├── img3.png
 │       │   │   ├── img4.png
 │       │   │   ├── img5.png
 │       │   │   ├── img6.png
 │       │   │   ├── img7.png
 │       │   │   └── monorepo.png
 │       │   └── vercel.svg
 │       ├── README.md
 │       ├─> styles
 │       │   ├── globals.css
 │       │   └── page.module.css
 │       ├── tailwind.config.js
 │       ├── theme-config.tsx
 │       ├── tsconfig.json
 │       ├─> tw
 │       │   └── styles.ts
 │       ├── typedoc.json
 │       ├─> types
 │       │   ├── css.mod.d.ts
 │       │   ├── get-repos.d.ts
 │       │   ├── json-file.d.ts
 │       │   └── repositories.d.ts
 │       └─> utils
 │           ├── getImages.ts
 │           ├── getrepos.ts
 │           ├── getUrl.ts
 │           └── index.ts
 ├── CONTRIBUTING.md
 ├─> demo
 │   ├── demo.png
 │   └── madewithnext.svg
 ├── LICENSE.md
 ├── package.json
 ├── pnpm-lock.yaml
 ├── pnpm-workspace.yaml
 ├── readme.md
 └── turbo.json
```
[//]: # (dree - END)



## Bugs and feature requests

Have a bug or a feature request? Please first read the [Quick start](#quick-start)

If your problem or idea is not addressed yet, 
[Post an issue on the GitHub Repo](https://github.com/Ambushfall/experimentalapp/issues/new/choose)

## To Be added

- [ ] N/A

## Creators



## Thanks

For taking your time to read/Contribute or assist with the Project!!

## License

Distributed under the MIT License. See [LICENSE](https://github.com/Ambushfall/turborepo/blob/master/LICENSE.md) for more information.


**[Back to TOP](#)**

## Testing
<!--  -->
