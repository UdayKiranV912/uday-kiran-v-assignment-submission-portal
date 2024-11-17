Assignment Submission Portal
Overview
This project implements a backend system for an assignment submission portal. It allows Users to upload assignments, and Admins to accept or reject assignments. The system is built with a modular architecture and uses MongoDB as the database.

Features
Users:
Register and log in.
Upload assignments.
Admins:
Register and log in.
View assignments tagged to them.
Accept or reject assignments.
Technology Stack
Backend Framework: Node.js with Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens) or OAuth2 (optional)
ORM: Mongoose (for MongoDB interaction)
Validation: Joi or express-validator
Environment Variables: dotenv
API Endpoints
User Endpoints
POST /register

Register a new user.
Request Body:
json
Copy code
{
  "username": "Soumik",
  "password": "securepassword"
}
Response:
json
Copy code
{
  "message": "User registered successfully"
}
POST /login

User login.
Request Body:
json
Copy code
{
  "username": "Soumik",
  "password": "securepassword"
}
Response:
json
Copy code
{
  "token": "jwt-token"
}
POST /upload

Upload an assignment.
Request Body:
json
Copy code
{
  "userId": "Soumik",
  "task": "Hello World",
  "admin": "Alok"
}
Response:
json
Copy code
{
  "message": "Assignment uploaded successfully"
}
GET /admins

Fetch all admins.
Response:
json
Copy code
[
  {
    "id": "admin1",
    "username": "Alok"
  }
]
Admin Endpoints
POST /register

Register a new admin.
Request Body:
json
Copy code
{
  "username": "Alok",
  "password": "adminpassword"
}
Response:
json
Copy code
{
  "message": "Admin registered successfully"
}
POST /login

Admin login.
Request Body:
json
Copy code
{
  "username": "Alok",
  "password": "adminpassword"
}
Response:
json
Copy code
{
  "token": "jwt-token"
}
GET /assignments

Fetch all assignments tagged to the admin.
Response:
json
Copy code
[
  {
    "userId": "Soumik",
    "task": "Hello World",
    "admin": "Alok",
    "timestamp": "2024-11-17T12:34:56Z"
  }
]
POST /assignments/
/accept

Accept an assignment.
Request Body:
json
Copy code
{
  "message": "Assignment accepted"
}
Response:
json
Copy code
{
  "message": "Assignment accepted successfully"
}
POST /assignments/
/reject

Reject an assignment.
Request Body:
json
Copy code
{
  "message": "Assignment rejected"
}
Response:
json
Copy code
{
  "message": "Assignment rejected successfully"
}
Database Schema
User Schema:

javascript
Copy code
{
  username: String,
  password: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
}
Assignment Schema:

javascript
Copy code
{
  userId: String,
  task: String,
  admin: String,
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
}
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/UdayKiranV912/uday-kiran-v-assignment-submission-portal
cd assignment-portal
Install dependencies:

bash
Copy code
npm install
Create a .env file for environment variables:

bash
Copy code
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000
Run the server:

bash
Copy code
npm start
The server will run on http://localhost:5000.

Authentication
The system uses JWT (JSON Web Tokens) for authentication.
When a user or admin logs in successfully, a JWT token is returned.
This token should be included in the Authorization header of requests to protected routes.
Validation
Inputs are validated using Joi or express-validator.
Invalid inputs return proper error messages with appropriate HTTP status codes.
Future Enhancements (Optional)
OAuth2 integration for user authentication.
Email notification when assignments are accepted or rejected.
Admin dashboard for better management of assignments.