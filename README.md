# My favorite images

##  <a name='Tableofcontents'></a>Table of contents

<!-- vscode-markdown-toc -->
 1. [ Introduction](#Introduction)
 2. [ Installation manual](#Installationmanual)
 3. [ Structure](#Structure)
 4. [ Packages and dependencies](#Packagesanddependencies)
 5. [ Documentation](#Documentation)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='Introduction'></a> Introduction

A web application to see and work with photos.

##  2. <a name='Installationmanual'></a> Installation manual

```bash
#Clone the repository:
git clone https://yolmm.github.io/fav-images/

#Initiate yarn:
yarn init
#Or use this instead:
yarn init -y

#Install dependencies:
yarn install

#To execute the project, define a port and use next commands in a window for the api 
yarn run seed
yarn run dev
#Once everything is loaded in the DB, open a new window for the front and use next command:
yarn run dev
```

##  3. <a name='Structure'></a> Structure

### 3.1. Repository

It is a monorepo and its structure is:

```
    fav-images
    │
    ├──packages/
    |    ├── api/
    │    |    ├── src/
    |    |    |    ├── lib/
    |    |    |    ├── models/
    |    |    |    ├── routers/
    |    |    |    ├── scripts/
    |    |    |    ├── app.ts
    |    |    |    ├── config.ts
    │    |    |    └── server.ts
    |    |    ├── tsconfig.json
    │    |    └── package.json
    |    |
    |    └── front/
    |         ├── src/
    |         |    ├── components/
    |         |    ├── App.tsx
    │         |    └── index.tsx
    |         ├── index.html
    |         ├── package.json
    |         └── tsconfig.json
    │
    ├── .eslintrc.json
    ├── .gitignore
    ├── package.json
    └── README.md
```

### 3.2. API

* Models:

    ```ts
    Images: {
        title: String,
        image: String,
    };
    ```


* CRUD:

    | Method | Route   | Description                      |
    |--------|---------|----------------------------------|
    | GET    | /       | Shows all images and its titles  |
    | POST   | /       | Upload an image with its title   |
    | POST   | /:id    | Update an image or/and its title |
    | DELETE | /:id    | Delete an image and its title    |

##  4. <a name='Packagesanddependencies'></a> Packages and dependencies

    | Front      | Api          | All           |
    | ---------- | -------------| --------------|
    | parcel     | dotenv       | eslint        |
    | react      | fastify      | typescript    |
    | react-dom  | fastify-cors | yarn          |
    |            | mongoose     |               |
    |            | nodemon      |               |
    |            | pino         |               |
    |            | pino-pretty  |               |
    |            | ts-node      |               |

##  5. <a name='Documentation'></a> Documentation

- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- Mongoose [docs](https://mongoosejs.com/docs/)
- [React](https://es.reactjs.org/)