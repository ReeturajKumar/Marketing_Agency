Marketing Application


This is a full-stack marketing application built with Node.js, Express, MongoDB, and React. It allows you to manage contact messages through an admin interface.

Features


Fetch and display contact messages from MongoDB on an admin page.
RESTful API built with Express for backend operations.


Prerequisites


Node.js (v14.x or higher)
npm (v6.x or higher)
MongoDB Atlas or local MongoDB server
Git



Getting Started
1. Clone the Repository
git clone https://github.com/yourusername/marketing-app.git

cd marketing-app



2. Set Up the Backend
(1) Navigate to the server directory:
cd server

(2) Install the dependencies:
npm install

(3) Create a .env file in the server directory and add the following environment variables:

MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000


(4) Start the backend server:
npm start


3. Set Up the Frontend
(1) Navigate to the client directory:
cd ../client

(2) Install the dependencies:
npm install


(3) Start the frontend development server:
npm start

(4)Access the Application
The backend API will be running on https://marketing-agency-5br7.onrender.com.
The frontend application will be running on http://localhost:5173.





Version Control
git init