
# 🎧 BlendedBeats Event Management System

Developed a comprehensive music event management system that empowers organizers and performers through seamless scheduling, artist onboarding, and real-time coordination, ensuring secure and efficient event execution 
---

## 📂 Project Structure

```
BlendedBeats/
├── frontend/   # React + Vite application
│   └── src/
│       ├── pages/
│       ├── site-pages/
│       └── App.jsx
├── backend/    # Express.js + MongoDB REST API
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── .env
```

---

## ⚙️ Technologies Used

### 🔹 Frontend
- React 18
- Vite
- React Router v6
- Bootstrap 
- Axios

### 🔹 Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- dotenv + nodemon
- Sequelize (optional for MySQL support)

---

## 🧑‍💻 Getting Started

### 🔧 Prerequisites
- Node.js ≥ 18.x
- MongoDB installed locally or via Atlas

---

## 🔌 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit: `http://localhost:5173`

---

## 🔐 Backend Setup

```bash
cd backend
npm install
npm run dev

```

Visit API base: `http://localhost:5000/`

---

## 📚 API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | `/api/users/login`  | User login               |
| POST   | `/api/users/register`| Register new user       |
| GET    | `/api/students/`    | Get all students         |
| POST   | `/api/tasks/`       | Add a new task           |

---

## 🔒 Authentication

JWT tokens are issued at login and stored client-side. Protected routes require a valid token in the Authorization header.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♀️ Author

**Teena S**  
📧 Contact: [teena050121@gmai.com]  
🌐 GitHub: [@Teena-S](https://github.com/Teena-S)
 
