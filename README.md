# Migramix

Welcome to the Migramix website! This [README.md](./README.md) file provides an overview of our website, its features, and information about our development team.

## Table of Contents

- [Migramix](#migramix)
  - [Table of Contents](#table-of-contents)
  - [About Migramix](#about-migramix)
    - [Demo](#demo)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Meet the Team](#meet-the-team)

## About Migramix

Migramix is a website for the promotion of migrant artists and their events, including the possibility for organisers to be promoted.
The aim of this site is to bring information from the artists to the artists, all in one place.

### Demo

Here is a working demo : **[Migramix]()**

## Features

Migramix offers a wide range of features to enhance your social networking experience, including:

1. **Events**:
   - Discover new events taken from the [API](https://do.diba.cat/api/dataset/actesturisme_es/camp-data_inici-like/2023-11) and our own Database
   - Create your own events which will be displayed on the main screen for full visibility.
2. **Profile Management**:
   - Create and customize your artist or event planner.
   - Upload your own profile picture.
   - Displays all the events a particular artist has.
   - Upload your own social media links

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Material UI](https://mui.com/)
- [Tailwind](https://tailwindcss.com/)
- [Node](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [Zod](https://zod.dev/)
- [PostgreSQL](https://www.postgresql.org/)
- [Firebase](https://firebase.google.com/)

# React/Node Project

This repository contains a React/Node project with a folder structure separated for the client and the server.

## Client Configuration

1. Run `npm install` in the client folder to install the dependencies.

2. Create a `.env` file in the client folder for Firebase configuration. You will need to create a project in Firebase (storage) to obtain the credentials and the appropriate settings (https://firebase.google.com/). Make sure to include the necessary variables in your `.env` file. Here is an example:

   ```env
        VITE_FIREBASE_API_KEY="your-api-key"
        VITE_FIREBASE_AUTH_DOMAIN="your-auth-domain"
        VITE_FIREBASE_PROJECT_ID="your-project-id"
        VITE_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
        VITE_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
        VITE_FIREBASE_APP_ID="your-app-id"
3. Run `npm run dev` in the client folder to start the application in development mode.

## Server Configuration

1. Run `npm install` in the server folder to install the dependencies.

2. Use the table creation script to set up the database (this is the file -> dbModel.sql ). Ensure that you have a configured database and adjust the script as needed.
3. Update the `.env` file in the server folder with your database information and other configurations. Here is an example:

   ```env
   TOKEN_SECRET = "your-Secret-token"
   PGUSER="your-pg-port"
   PGHOST="your-pg-host"
   PGPASSWORD="your-pg-password"
   PGDATABASE="your-pg-database"
   PGPORT="your-server-port"
4. Run `npm run dev` in the server folder to start the application in development mode.

Ready! Now, you should have both the client and server up and running.

## Meet the Team

Meet the talented individuals who have contributed to the development of Migramix:

| [![Damian Rodriguez](https://avatars.githubusercontent.com/u/56368966?v=3)](https://github.com/GamaG27) | [![Miguel Cañate](https://avatars.githubusercontent.com/u/94227693?v=3)](https://github.com/MiguelCagnate) | [![Dante](https://avatars.githubusercontent.com/u/127965845?v=3)](https://github.com/Ante2023) | [![Angelyn Bonaldy](https://avatars.githubusercontent.com/u/117824958?v=3)](https://github.com/anggifit) | [![Leonardo](https://avatars.githubusercontent.com/u/129212312?v=3)](https://github.com/LeonardoBabuin) |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [Damian Rodriguez](https://github.com/GamaG27)                                                          | [Miguel Cañate](https://github.com/MiguelCagnate)                                                          | [Dante](https://github.com/Ante2023)                                                           | [Angelyn Bonaldy](https://github.com/anggifit)                                                           | [Leonardo](https://github.com/LeonardoBabuin)                                                           |
