# Automation Demo Website for mastering skills

## Project Structure

```md
/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── utils/
└── package.json
```

## Commands

It's highly recommended to use the latest version of yarn modern (3.x.x or 4.x.x), do not use yarn 1.x.x version

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn`                 | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |
| `yarn enforceStyle`    | Run prettier across all project files            |
