# 🌐 Portfolio Website

This is my personal **Portfolio Website** built to showcase my projects, skills, and experience as a developer. The website highlights my technical background, coding projects, and provides a way to connect with me.

## 🚀 Live Demo
🔗 https://stirring-hotteok-2c0cfa.netlify.app/

## 📌 Features
- Interactive single-page portfolio with hero, skills, projects, achievements, training, education, and contact sections
- Downloadable resume button backed by a generated PDF resume in the client public directory
- Express contact API with validation and message persistence in `server/data/messages.json`
- Separate root-level scripts to run frontend and backend independently
- Responsive design with smooth navigation

## 🛠️ Technologies Used
- React
- Vite
- Express.js
- Node.js
- HTML, CSS, JavaScript

## 📂 Project Structure
- `client` contains the React and Vite frontend
- `server` contains the Express API
- `.vscode/tasks.json` includes separate tasks for frontend and backend

## Run Locally

1. Install dependencies in the root, client, and server folders.
2. Run `npm run dev` from the project root to start the frontend.
3. Run `npm run dev:backend` from the project root to start the backend API.
4. Open `http://localhost:5173`.

## Build

- Run `npm run build` from the project root to generate the production frontend build.
- Run `npm run start` from the project root to start the Express server.
- Run `npm run dev:fullstack` from the project root if you want to start frontend and backend together.

## Notes

- The resume download points to `client/public/Ajit-Kumar-Yadav-Resume.pdf`.
- Contact submissions are stored locally in `server/data/messages.json`.
