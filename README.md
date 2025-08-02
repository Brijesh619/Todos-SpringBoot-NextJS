# Spring Boot + Next.js TODO App

This is a full-stack TODO list application built with:

- ✅ Spring Boot (Java) for the backend REST API
- ✅ Next.js (React + TypeScript) for the frontend UI
- ✅ MySQL for the database
- ✅ Axios for API communication

---

## 🏗️ Project Structure

```
todo-app/
├── backend/            # Spring Boot app (Java)
│   └── src/main/java/  # API logic
├── frontend/           # Next.js app (TypeScript)
│   └── app/            # Pages, components
├── README.md
```

---

## 🚀 Getting Started

### Backend (Spring Boot + MySQL)

1. **Configure MySQL:**

   - Create a database named `todo_db`
   - Update `application.properties` with your DB username/password:

     ```properties
     spring.datasource.username=root
     spring.datasource.password=your_password
     ```

2. **Run the backend:**

   Use Maven:
   ```bash
   cd backend
   mvn spring-boot:run
   ```

   Server runs on: `http://localhost:8080`

---

### Frontend (Next.js)

1. **Install dependencies:**

   ```bash
   cd frontend
   npm install
   ```

2. **Run the app:**

   ```bash
   npm run dev
   ```

   App runs on: `http://localhost:3000`

---

## 🧠 Features

- Add, delete, toggle, and edit TODO items
- Responsive design
- CORS enabled for frontend-backend communication
- RESTful API with clean structure

---

## 📦 API Endpoints

| Method | Endpoint                | Description         |
|--------|-------------------------|---------------------|
| GET    | `/api/todos`            | Get all TODOs       |
| POST   | `/api/todos`            | Add a new TODO      |
| PUT    | `/api/todos/{id}`       | Update a TODO       |
| DELETE | `/api/todos/{id}`       | Delete a TODO       |

---

## 🔐 CORS Setup (Spring Boot)

If you're running frontend and backend separately:

```java
@CrossOrigin(origins = "http://localhost:3000")
```

---

## 📸 Demo Screenshot

> ![TODO app preview](./screenshot.png)

---

## 🛠️ Tech Stack

- Spring Boot 3.x
- Java 17+
- MySQL
- Next.js 14
- Axios
- TypeScript
- DBeaver (optional DB viewer)

---

## 💡 Future Improvements

- Add user authentication
- Store tasks by user
- Mark priorities
- Use Prisma or JPA with DTOs

---

## 🤝 License

MIT License – Feel free to fork and improve!
