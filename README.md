![ExperimentalApp](/public/midj/grid_20.png)

## ExperimentalApp

 - [Report]()
 - [Request a Feature](h)

## Table of contents
- [ExperimentalApp](#experimentalapp)
- [Table of contents](#table-of-contents)
- [Quick start](#quick-start)
- [Status](#status)
- [Version](#version)
- [What is included](#what-is-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [To Be added](#to-be-added)
- [Creators](#creators)
- [Thanks](#thanks)
- [Testing](#testing)
<!--  -->

## Quick start

```code
npm i && npm run dev
```


## Status

Development

## Version

- Version [1.5.1]

## What is included

> Folder Structure :


[//]: # (dree - BEGIN)
```
experimentalapp
 ├── .env
 ├── .eslintrc.json
 ├─> .git
 │   ├── FETCH_HEAD
 │   ├── HEAD
 │   ├─> branches
 │   ├── config
 │   ├── description
 │   ├─> hooks
 │   │   ├── applypatch-msg.sample
 │   │   ├── commit-msg.sample
 │   │   ├── fsmonitor-watchman.sample
 │   │   ├── post-update.sample
 │   │   ├── pre-applypatch.sample
 │   │   ├── pre-commit.sample
 │   │   ├── pre-merge-commit.sample
 │   │   ├── pre-push.sample
 │   │   ├── pre-rebase.sample
 │   │   ├── pre-receive.sample
 │   │   ├── prepare-commit-msg.sample
 │   │   ├── push-to-checkout.sample
 │   │   └── update.sample
 │   ├── index
 │   ├─> info
 │   │   └── exclude
 │   ├─> logs
 │   │   ├── HEAD
 │   │   └─> refs
 │   │       ├─> heads
 │   │       │   └── master
 │   │       └─> remotes
 │   │           └─> origin
 │   │               └── master
 │   ├─> objects
 │   │   ├─> 08
 │   │   │   └── 1198f7df34bf674aa6a298026951490edb5575
 │   │   ├─> 0f
 │   │   │   └── 17b436aded175b58295168ba5aed403380d496
 │   │   ├─> 17
 │   │   │   └── 8d8cc63a4f60d4faed04545ac5ded5c014bcb5
 │   │   ├─> 1a
 │   │   │   ├── 515f9f81fc04eb6f02fddeeb854d48f19af2a6
 │   │   │   └── a1227a6853efae5fda5446e1cf469eba13771e
 │   │   ├─> 1c
 │   │   │   └── 6938c9dda542c732b66194472e6bed28e5042f
 │   │   ├─> 23
 │   │   │   └── 1a62c1287e43a916237c3ef711eb0995d57d2b
 │   │   ├─> 24
 │   │   │   └── f0cbd8e948852e86de5262c1d64df00cc390ac
 │   │   ├─> 26
 │   │   │   └── 1f088c5ba8041dbd3d6072311369e8eeab45fa
 │   │   ├─> 27
 │   │   │   └── e4ac0ce491974b490180478b1c1ea2ff72ff15
 │   │   ├─> 2b
 │   │   │   └── 17fad6c86c612fea0edca14a50bf934cfa9e1f
 │   │   ├─> 33
 │   │   │   └── ad091d26d8a9dc95ebdf616e217d985ec215b8
 │   │   ├─> 35
 │   │   │   └── f71c0a239fd25e6a4cc91064fbff1c4412c928
 │   │   ├─> 3d
 │   │   │   └── 728626c4b8d16c3f2a7d19eac097d1809b80b1
 │   │   ├─> 43
 │   │   │   └── e02a915a3c1f69150311df64ce523fe6c7a88d
 │   │   ├─> 4a
 │   │   │   └── 426fbfcd64675a9d497e41803196721c3fe322
 │   │   ├─> 4b
 │   │   │   └── f241baebc60b7c1523a560c6e9b2a3195cbbe4
 │   │   ├─> 4d
 │   │   │   └── d28a2fb3eac8797d9b3b17a6b4211107fb749d
 │   │   ├─> 4e
 │   │   │   └── 1f7cb6e7dbd3469f3e8873e2d3ea1548fe100d
 │   │   ├─> 5b
 │   │   │   ├── 091c86795ae52a9d9a372b28e5932c83a62f75
 │   │   │   └── 8f1e580d43c6378ab96c71c8de1c9b988b8cd7
 │   │   ├─> 5c
 │   │   │   └── 3c9853a36c42aaefab9c8804fb9310e753974f
 │   │   ├─> 5e
 │   │   │   └── 7740a5d66f1a87af907f9574980c1300502065
 │   │   ├─> 5f
 │   │   │   └── 7098183cea2284a5de50ef2b12577b2a093abe
 │   │   ├─> 61
 │   │   │   └── ff3bb53e197ae07f77a24f2ee184b20cd43948
 │   │   ├─> 64
 │   │   │   └── 2e58e3239e1a9cffcbba5e29912fe50e4b7404
 │   │   ├─> 67
 │   │   │   ├── 3e106f968b3ac9c14e0c8a88226fcbd8cb00aa
 │   │   │   └── 58f11c025ea4207332e4beffbee851f01e46aa
 │   │   ├─> 6a
 │   │   │   └── 79e0a280ee73ef760641b91ec775d041d0bf30
 │   │   ├─> 6c
 │   │   │   └── 964db3022d7e146cf696713127692d54077e4b
 │   │   ├─> 6d
 │   │   │   └── 4762ad426bf6d356754c20b4e4017097bd81bc
 │   │   ├─> 71
 │   │   │   └── 8d6fea4835ec2d246af9800eddb7ffb276240c
 │   │   ├─> 72
 │   │   │   └── 95c150b49aa099b66048921bc556c00fe37f53
 │   │   ├─> 73
 │   │   │   └── f020a53a2e4adff8266abc398cd0ed39d554df
 │   │   ├─> 77
 │   │   │   └── 48b32b5a09585e635c6799833f7763a6f98af3
 │   │   ├─> 7d
 │   │   │   └── 7b78d040016d65936a6d0510fe3c50347f3b6e
 │   │   ├─> 86
 │   │   │   └── f5ab38947e5e0e3bdc65ea2e0d85b68660eceb
 │   │   ├─> 87
 │   │   │   └── 4229835e649ce1bf0128c633983d747f228abe
 │   │   ├─> 89
 │   │   │   └── da940529071f3189dfee19ed14f8b8a5b72c7c
 │   │   ├─> 8c
 │   │   │   └── a0884f425403d42fce3b4e05f0949aca746e2a
 │   │   ├─> 90
 │   │   │   ├── 90cfea9107b7e5fcb8f74b23456445ad1af9be
 │   │   │   └── afd60103033de6e7a60b785dcaf57e09ba19d5
 │   │   ├─> 92
 │   │   │   └── be93a1f365a616728c8592f88c9781bfed9ac4
 │   │   ├─> 93
 │   │   │   └── b75bf58590ab37902b99b845a9e4f56fe7990c
 │   │   ├─> 95
 │   │   │   └── e9e6a2067efe22468799cb15bd4ff2c87b7800
 │   │   ├─> 9c
 │   │   │   └── 5616bdadf62dadc432ee0e2a1f742ce3dc2212
 │   │   ├─> a2
 │   │   │   └── f2bbeb1d46537479314123b353ae179c69365f
 │   │   ├─> a7
 │   │   │   └── d7f861f8565694f9e51cae409ba9986d481a01
 │   │   ├─> ad
 │   │   │   ├── 1f40fe9fa599c110f11241bcdf7f130674ab88
 │   │   │   └── ebaae1c58a70f8f7d6c1aa48c4a1fa397d646d
 │   │   ├─> b2
 │   │   │   └── 073b97485195e3bcaea22b3c1dbb252bede8c1
 │   │   ├─> b5
 │   │   │   └── 94400e24eba09d19082265a4649abc587c3668
 │   │   ├─> b9
 │   │   │   └── f86c9d78d13591dc1b5dbc3508cf35ce37aa37
 │   │   ├─> ba
 │   │   │   └── 2e98434169cfe6758536a70f87baaa391d84ea
 │   │   ├─> be
 │   │   │   └── 0f44c0279e1b71c1a65a5f5661986dfcdbcbec
 │   │   ├─> bf
 │   │   │   └── fb357a7122523ec94045523758c4b825b448ef
 │   │   ├─> c0
 │   │   │   └── 0159afc1de63827673be8eed7d2ba81506d2d7
 │   │   ├─> c5
 │   │   │   ├── 52f4e4e6a53515c53599441d7abe95157e07dc
 │   │   │   └── a036070837f0325c93cba244456bbf13631cb6
 │   │   ├─> ce
 │   │   │   ├── 2117cc781b8948fd48e3759d01a44a32810839
 │   │   │   └── baef512835607daf0487012ff67f816a4b7a54
 │   │   ├─> da
 │   │   │   └── fb0c88e961e6e23d276af61ca2bca5650c03b2
 │   │   ├─> df
 │   │   │   └── 4db98cd0db9e45d6da13a32e4f21ff3d338817
 │   │   ├─> e6
 │   │   │   └── e76b04ba06581f4204c88c083963a04e2eeca7
 │   │   ├─> ec
 │   │   │   └── b704ea2bafe8f55d9d1ed880acf9a7d385f518
 │   │   ├─> ed
 │   │   │   └── 966a72be693404f7e15d2532963addbd79b10a
 │   │   ├─> ef
 │   │   │   └── 3fd240d6c49476d556d63708aef27d846a1a4c
 │   │   ├─> f4
 │   │   │   └── 4deabbf51a51cfa5d37d2d94a054e51f8d2c46
 │   │   ├─> fb
 │   │   │   └── f0e25a651c28931b2fe8afa2947e124eebc74f
 │   │   ├─> info
 │   │   └─> pack
 │   ├─> refs
 │   │   ├─> heads
 │   │   │   └── master
 │   │   ├─> remotes
 │   │   │   └─> origin
 │   │   │       └── master
 │   │   └─> tags
 │   └── shallow
 ├─> .github
 │   └─> workflows
 │       └── generateDirTree.yaml
 ├── .gitignore
 ├─> .vscode
 │   └── settings.json
 ├── README.md
 ├─> app
 │   ├── Footer.tsx
 │   ├─> api
 │   │   └── route.ts
 │   ├─> components
 │   │   ├── NavLinkTailwind.tsx
 │   │   ├── analytics.tsx
 │   │   ├── gradientBackground.tsx
 │   │   └── homeSVG.tsx
 │   ├─> editor
 │   │   └── page.tsx
 │   ├── error.tsx
 │   ├─> gallery
 │   │   ├── Gallery.tsx
 │   │   └── page.tsx
 │   ├─> github
 │   │   └─> [userName]
 │   │       └── route.ts
 │   ├── globals.css
 │   ├── head.tsx
 │   ├── layout.tsx
 │   ├── loading.tsx
 │   ├── page.module.css
 │   ├── page.tsx
 │   └─> projects
 │       ├── Constants.ts
 │       ├── ProjectModule.tsx
 │       ├── RepositoryModule.tsx
 │       ├── displayProfile.tsx
 │       └── page.tsx
 ├─> helpers
 │   └── toPascalCase.tsx
 ├── manifest.json
 ├── next.config.js
 ├── package-lock.json
 ├── package.json
 ├── postcss.config.js
 ├─> public
 │   ├── Mysvg.svg
 │   ├── favicon.ico
 │   ├─> midj
 │   │   ├── 1374123_696361327042412_1521345073_n.jpg
 │   │   ├── 3f74d8c3-4b06-4542-9fa9-826651472d53_progress_image_54.webp
 │   │   ├── f0721959-f313-4539-bfec-8324f3a11bf9_progress_image_50.webp
 │   │   ├── grid_0 (1).png
 │   │   ├── grid_0 (2).png
 │   │   ├── grid_0 (3).png
 │   │   ├── grid_0 (4).png
 │   │   ├── grid_0.png
 │   │   ├── grid_20.png
 │   │   ├── lukacolic_None_3f74d8c3-4b06-4542-9fa9-826651472d53.png
 │   │   ├── lukacolic_None_779903d2-59d0-471e-a574-38a3b3de1157.png
 │   │   └── lukacolic_null_3f74d8c3-4b06-4542-9fa9-826651472d53.png
 │   └── vercel.svg
 ├── tailwind.config.js
 ├─> target
 │   └── npmlist.json
 ├── tsconfig.json
 └─> utils
     └── getrepos.ts
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

**[Back to TOP](#)**

## Testing
<!--  -->
