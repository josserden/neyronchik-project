[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Neuronchik project

The author and full information of the starter [here](info.md)

## 🥁 Getting started

1. Clone repo

```bash
git@github.com:josserden/neyronchik-project.git
```

2. Recommended for use `yarn` - `yarn` or `yarn install`
3. Create file `.env.local` in the project root using `.env.local.example` as a
   template
4. `yarn dev`
5. Open `http://localhost:3000`.

## Project structure

> ### Attention
>
> **each folder has a re-export file - `index.ts`**

---

```
  |-- components -> folder with reusable components
      |-- name_component -> folders for each component
            |-- name_component.tsx -> main component
            |-- name_component.props -> type or interface
            |-- name_component.module.css -> styles
  |-- fonts -> custom local fonts
  |-- hooks -> custom users hooks
  |-- layout -> components that are used as a main template
  |-- pages -> pages and routing
      |-- api -> api, that are required to work
  |-- styles -> global styles
  |-- public
    |-- locales - all locales
    |-- favicon -> favicon for the site
    |-- images -> images та svg, that are required to work
  |-- utils -> helpers or additional functions to the project
  |-- views -> individual components (compositions) for blocks (sections of the landing)
```

## Components API:

- ### IconBtn

| Prop         | Default | Description                                     |
| ------------ | :-----: | ----------------------------------------------- |
| `appearance` | `dark`  | choose the correct option: `dark` or `white`    |
| `variant`    |   `-`   | choose the correct variant: `close` or `burger` |

---

- ### Heading

| Prop       | Default | Description                                           |
| ---------- | :-----: | ----------------------------------------------------- |
| `tag`      |   `-`   | choose the heading types you'd need: `h1`, `h2`, `h3` |
| `children` |   `-`   | any content                                           |

---

- ### Button

| Prop         | Default | Description                                                |
| ------------ | :-----: | ---------------------------------------------------------- |
| `children`   |   `-`   | any content                                                |
| `appearance` |   `-`   | choose the appearance you'd need: `primary`, `ghost`, `h3` |
