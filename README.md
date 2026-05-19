# 🏫 School Management API

A robust RESTful API built with **Node.js, Express.js, and MySQL** to efficiently manage school data. This system allows users to seamlessly add new schools and accurately retrieve a list of schools sorted by geographical proximity to a user-specified location using the Haversine formula.

---

## 🚀 Live Demo

**Base URL:** `[Your Vercel Link Here]` *(Replace after Vercel deployment)*

---

## 🛠️ Tech Stack

- **Backend Framework:** Node.js, Express.js
- **Database:** MySQL
- **Other Packages:** `dotenv` (Environment Variables), `cors` (Cross-Origin Resource Sharing), `mysql2` (MySQL client)

---

## 🗄️ Database Setup

The API uses a MySQL database. Ensure you have your database instance running (e.g., Aiven, PlanetScale, or Railway for Vercel compatibility, or Local MySQL for development) and create the `schools` table using the following schema:

```sql
CREATE DATABASE school_management;
USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/Sahil-Hode/School-Management-API.git
cd School-Management-API
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your database credentials:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
```
*(Note: When deploying to Vercel, make sure to add these environment variables in your Vercel Project Settings!)*

### 4. Start the Development Server
```bash
npm run dev
```

The server will start running on `http://localhost:5000`.

---

## 📚 API Documentation

### 1. Add a School
Adds a new school to the database.

- **Endpoint:** `/addSchool`
- **Method:** `POST`
- **Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "Greenwood High",
  "address": "123, Tech Street, City",
  "latitude": 12.9716,
  "longitude": 77.5946
}
```

**Success Response (201 Created):**
```json
{
  "message": "School added successfully"
}
```

---

### 2. List Schools by Proximity
Fetches all schools and sorts them based on the geographical distance from the user's provided coordinates.

- **Endpoint:** `/listSchools`
- **Method:** `GET`
- **Query Parameters:**
  - `latitude` (Float, Required)
  - `longitude` (Float, Required)

**Example Request:**
`/listSchools?latitude=12.9716&longitude=77.5946`

**Success Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Greenwood High",
    "address": "123, Tech Street, City",
    "latitude": 12.9716,
    "longitude": 77.5946,
    "distance": "0.00"
  },
  {
    "id": 2,
    "name": "Oakridge International",
    "address": "45, Park Avenue",
    "latitude": 13.0234,
    "longitude": 77.6432,
    "distance": "7.84"
  }
]
```

---

### 3. Get All Schools
Retrieves all schools from the database without any sorting.

- **Endpoint:** `/allSchools`
- **Method:** `GET`

---

## 🧪 Postman Collection

A Postman collection is included in this repository to make API testing effortless.

1. Download the `School_Management_API.postman_collection.json` file from the root directory.
2. Open Postman.
3. Click on **Import** (top left).
4. Select the downloaded JSON file.
5. You can now test all the endpoints with pre-configured requests!

---

## 👨‍💻 Author

**Sahil Hode**
- GitHub: [@Sahil-Hode](https://github.com/Sahil-Hode)
