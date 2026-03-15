# Ajit Kumar Yadav Portfolio

Full-stack portfolio website built with React, Vite, Node.js, and Express.

## Features

- Interactive single-page portfolio with hero, skills, projects, achievements, training, education, and contact sections
- Downloadable resume button backed by a generated PDF resume in the client public directory
- Express contact API with validation and message persistence in `server/data/messages.json`
- Root-level development script that runs the frontend and backend together

## Project Structure

- `client` contains the React and Vite frontend
- `server` contains the Express API
- `.vscode/tasks.json` includes a task to run the full-stack app

## Run Locally

1. Install dependencies in the root, client, and server folders.
2. Run `npm run dev` from the project root.
3. Open `http://localhost:5173`.

## Build

- Run `npm run build` from the project root to generate the production frontend build.
- Run `npm run start` from the project root to start the Express server.

## Notes

- The resume download now points to `client/public/Ajit-Kumar-Yadav-Resume.pdf`.
- Contact submissions are stored locally in `server/data/messages.json`.