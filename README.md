# Employee Management System

A full-stack web application to manage employee records with Create, Read, Update, and Delete (CRUD) operations.

## Tech Stack

- **Backend:** Java, Spring Boot, REST APIs
- **Database access:** Spring Data JPA, Hibernate
- **Database:** MySQL
- **Frontend:** React.js (Vite)
- **Tools:** Maven, Postman, Git/GitHub

## Features

- Add a new employee
- View all employees in a table
- Edit an existing employee
- Delete an employee

## Architecture

The backend follows a layered architecture:

```
React -> Controller -> Service -> Repository -> MySQL
```

| Layer | Purpose |
|---|---|
| Controller | Receives HTTP requests and returns responses |
| Service | Contains the business logic |
| Repository | Talks to the database using Spring Data JPA |
| Entity | Maps the Java class to a MySQL table |

## Project Structure

```
employee-management-system/
├── backend/     (Spring Boot)
└── frontend/    (React + Vite)
```

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/employees | Get all employees |
| GET | /api/employees/{id} | Get one employee |
| POST | /api/employees | Add an employee |
| PUT | /api/employees/{id} | Update an employee |
| DELETE | /api/employees/{id} | Delete an employee |

## How to Run Locally

### Prerequisites

- Java 17 or higher
- Node.js (LTS)
- MySQL

### 1. Create the database

Open MySQL Workbench and run:

```sql
CREATE DATABASE employee_db;
```

### 2. Run the backend

1. Open the `backend` folder.
2. Create the file `src/main/resources/application.properties` with:

```properties
spring.application.name=backend

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

3. Start the app:

```bash
cd backend
./mvnw spring-boot:run
```

On Windows PowerShell, use `.\mvnw spring-boot:run`. The backend runs at `http://localhost:8080`. The `employee` table is created automatically by Hibernate.

### 3. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Screenshots

Add your screenshots here (see the `screenshots` folder).

## Author

**Aaruhya Reddy**
GitHub: [aaruhyareddy66](https://github.com/aaruhyareddy66)
