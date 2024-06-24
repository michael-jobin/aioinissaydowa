## Project Information

- **Compiler:** [Astro](https://astro.build/)
- **Compiler Configuration:** `/astro.config.mjs`
- **Project Root:** `/`
- **Test Server URL:** https://data.ondo-inc.jp/humancapital/
  - **ID:** admin
  - **Password:** i3hmls627pgfy
- **Production URL:** https://www.aioinissaydowa-saiyou.com/humancapital/
- **CMS:** []
- **Design:** 井上さん
- **Client:** [works japan + あいおいニッセイ同和損保]
- **Date:** [5/2024]
- **Delivery:** [データー納品]

## Memo

```
各URLの語尾には必ず『スラッシュ』を入れて欲しいとのことです（誤作動回避）
==============
これを
https://◯◯◯.com/◯◯◯
↓↓↓
このように語尾に「/」つける
https://◯◯◯.com/◯◯◯/
```

## Stucture:

```

public
  └── assets
      └── images                        // images (git ignored)
src
  └── components                        // small components
      └── icons
          ├── Header.astro
          ...
  └── data                              // site data text content
      ├── areasList.json
      ├── companyProfile.json
      └── interviewsList.json
  └── layouts                           // base template for every pages
  └── pages                             // pages
      ├── dei
      ├── humanresource-development
      ├── humanresource-management
      ├── interview
      └── index.astro
  └── sections                          // pages sections
      ├── areas
      ├── home
      └── interview
  └── styles
  └── types
  └── utils

```
