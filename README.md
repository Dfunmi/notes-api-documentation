🗒️ Notes API

A simple and secure Notes API built with Node.js, Express, and MongoDB.
It lets users register, log in, and manage personal notes — all protected with JWT authentication.
API endpoints are fully documented with Swagger UI for easy testing.

🚀 Features

🧑‍💻 User registration & login

🔐 JWT authentication

📝 Create, read, update & delete notes

📚 Swagger API documentation

💾 MongoDB database integration

⚙️ Tech Stack

Node.js · Express · MongoDB · Mongoose · JWT · Swagger · Morgan · dotenv

🧰 Setup & Installation

Clone the repository

git clone https://github.com/your-username/notes-api.git
cd notes-api


Install dependencies

npm install


Add a .env file

NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the server

npm run dev


👉 Server runs on: http://localhost:5000

👉 Swagger docs available at: http://localhost:5000/api-docs

👉 Live Swagger Documentation: https://notes-api-documentation.onrender.com/api-docs

📖 API Endpoints
👤 User Routes
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Log in and get a token
GET	/api/users/profile	Get logged-in user profile (protected)
📝 Note Routes
Method	Endpoint	Description
GET	/api/notes	Get all notes (protected)
POST	/api/notes	Create a new note (protected)
PUT	/api/notes/:id	Update a note (protected)
DELETE	/api/notes/:id	Delete a note (protected)
🔐 Authentication

All protected routes require a JWT token.
Include it in your request headers:

Authorization: Bearer <your_token>
