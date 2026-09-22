# Second Brain

A full-stack productivity app for saving and organizing content like YouTube links, with authentication and optional brain sharing.

## Overview

This project is split into two apps:

- Backend: Node.js + Express + TypeScript
- Frontend: React + Vite + TypeScript

Users can sign up, sign in, store content items, and share their saved "brain" with a generated link.

## Features

- User authentication with username/password
- Save content entries with title, URL, and type
- View saved content in a dashboard
- Share a brain via a generated shareable link
- React frontend for dashboard and auth screens

## Tech Stack

### Backend

- Node.js
- TypeScript
- Express
- MongoDB with Mongoose
- JWT for authentication
- CORS enabled

### Frontend

- React 19
- Vite
- TypeScript
- React Router
- Axios
- Tailwind CSS

## Project Structure

```text
Second Brain/
├── README.md
├── Second Brain (Backend)/
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── config.ts
│   │   ├── db.ts
│   │   ├── index.ts
│   │   ├── middleware.ts
│   │   └── utils.ts
│   └── ...
└── Second Brain (Frontend)/
    ├── package.json
    ├── vite.config.ts
    ├── src/
    │   ├── App.tsx
    │   ├── config.ts
    │   ├── components/
    │   ├── hooks/
    │   ├── pages/
    │   └── assets/
    └── ...
```

## Prerequisites

Before running the app, make sure you have:

- Node.js installed
- npm installed
- A MongoDB database available
- A terminal open for each app

## Backend Setup

1. Open a terminal and go to the backend folder:

```bash
cd "Second Brain (Backend)"
```

2. Install dependencies:

```bash
npm install
```

3. Configure the database and JWT secret in `src/config.ts`.

The current backend code contains a hardcoded MongoDB connection string and JWT secret:

- MongoDB URI: `src/config.ts`
- JWT secret: `src/config.ts`

Update these values to match your environment before starting the server.

4. Start the backend in development mode:

```bash
npm run dev
```

This runs the TypeScript build and starts the server on port `3000`.

## Frontend Setup

1. Open a second terminal and go to the frontend folder:

```bash
cd "Second Brain (Frontend)"
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

The app will run locally with Vite, typically on:

```text
http://localhost:5173
```

## Environment Notes

- The frontend is configured to call the backend at `http://localhost:3000` in `src/config.ts`.
- If your backend port or domain changes, update `BACKEND_URL` in the frontend config.
- The backend currently listens on port `3000`.

## API Overview

The backend exposes REST endpoints such as:

- `POST /api/v1/signup`
- `POST /api/v1/signin`
- `POST /api/v1/content`
- `GET /api/v1/content`
- `POST /api/v1/brain/share`
- `GET /api/v1/brain/:shareLink`

These routes are used by the frontend for authentication, content management, and brain sharing.

## Usage

1. Start the backend and frontend.
2. Open the frontend in the browser.
3. Sign up for an account.
4. Log in to the dashboard.
5. Add content by entering a title and link.
6. Click "Share Brain" to copy a shareable brain link.

## Notes

This project is a working prototype and still contains some implementation details that may need adjustment depending on your environment, especially:

- MongoDB connection settings
- JWT secret configuration
- Share page routing if you want to expose the brain link publicly as a separate frontend route

## License

This project currently does not specify a formal license in the package metadata.
