# 🚀 FormBridge LMS — Dynamic EdTech Platform Powered by Google Forms

FormBridge LMS is a full-stack ed-tech application that connects **React**, **Node.js**, **PostgreSQL**, **Google Forms**, and **Google Sheets** into one seamless data pipeline.

It allows:
- Admins to create courses dynamically
- Users to enroll through Google Forms
- Admins to view live form responses directly inside the application

> Without ever opening Google Sheets.

This project focuses on **system design, API integration, and dynamic data flow**, rather than UI.

---

## 🧠 Problem Statement

Google Forms stores responses inside Google Sheets, but typical applications cannot access that data without complex APIs and authentication.

**FormBridge LMS solves this by:**

> Treating the published Google Sheet CSV as a live data source and dynamically mapping it per course inside PostgreSQL.

This creates a lightweight but powerful bridge between third-party form data and a custom web application.

---

## 🏗️ System Architecture

React Frontend
↓
Node / Express API Layer
↓
PostgreSQL Database
↓
Google Sheets (Published CSV from Forms)


---

## ✨ Key Features

- Dynamic course creation from Admin Panel
- User enrollment through Google Forms
- Live form responses visible in Admin Panel
- No hardcoding — fully database driven
- Clean separation between User and Admin views
- Lightweight integration without Google APIs or OAuth

---

## 🛠️ Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | React, Axios |
| Backend     | Node.js, Express |
| Database    | PostgreSQL |
| External    | Google Forms, Google Sheets (CSV publish) |

---

## 🔌 Core APIs

| API | Description |
|-----|-------------|
| `GET /courses` | Fetch all courses dynamically from DB |
| `POST /add-course` | Add new course with form and sheet mapping |
| `GET /responses/:id` | Fetch live Google Sheet responses for a course |

---

## 🗄️ Database Schema

**Table: courses**

| Column      | Purpose |
|-------------|---------|
| id          | Primary key |
| title       | Course name |
| form_link   | Google Form URL |
| sheet_link  | Published CSV link from Google Sheet |

---

## ⚙️ How It Works

1. Admin creates a Google Form for a course
2. Google Form stores responses in Google Sheets
3. Admin publishes the sheet as CSV and adds the link while creating the course
4. The mapping is stored in PostgreSQL
5. When admin clicks a course, backend fetches live CSV data and displays it in React

---

## 🧩 Engineering Challenges Solved

- PostgreSQL authentication and connection pooling
- CORS and Axios communication issues
- Handling dynamic data without hardcoding
- React state update timing problems
- Designing a dynamic bridge between Google Forms and backend without APIs
- Handling null database values and runtime fetch errors

---

## ▶️ Running Locally

### 1️⃣ Backend Setup

Create a `.env` file inside `backend`:
DB_USER=your_user
DB_HOST=localhost
DB_NAME=edtech
DB_PASSWORD=your_password
DB_PORT=5432

Run:
cd backend
npm install
node server.js

### 2️⃣ Frontend Setup

cd frontend
npm install
npm start


---

## 🎯 What This Project Demonstrates

- Full-stack system integration
- API design and usage
- Database schema design
- Third-party data integration
- Real-world debugging and problem solving
- Practical engineering thinking beyond tutorials

---

## 📌 Author

Built as a full-stack system design project demonstrating dynamic data flow between external services and a custom application.

---

⭐ If you found this interesting, feel free to explore the code.


- Merina GT
