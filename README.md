💸 Arthly - Expense Tracker App
Arthly is a full-stack expense tracker application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It empowers users to manage their finances by tracking income and expenses, categorizing transactions, and gaining insights into their spending habits.

🚀 Features
User Authentication: Secure login and registration system.

Transaction Management: Add, edit, and delete income and expense entries.

Categorization: Organize transactions by customizable categories.

Filtering: View transactions based on date ranges and categories.

Dashboard: Visual representations of spending patterns and summaries.

Responsive Design: Optimized for both desktop and mobile devices.

🛠️ Tech Stack
Frontend:

React.js

React Router

Axios

CSS Modules / Tailwind CSS / Bootstrap (based on your styling preference)

Backend:

Node.js

Express.js

MongoDB with Mongoose

JSON Web Tokens (JWT) for authentication

bcrypt for password hashing

📁 Project Structure
pgsql
Copy
Edit
Expense-Tracker-App/
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── Frontend/
    └── expense-tracker/
        ├── public/
        └── src/
            ├── components/
            ├── pages/
            ├── context/
            └── App.js
🧰 Getting Started
Prerequisites
Node.js and npm installed

MongoDB instance (local or hosted)

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Ani280205/Expense-Tracker-App.git
cd Expense-Tracker-App
Backend Setup:

bash
Copy
Edit
cd Backend
npm install
Create a .env file in the Backend directory with the following variables:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy
Edit
npm start
Frontend Setup:

bash
Copy
Edit
cd ../Frontend/expense-tracker
npm install
Start the frontend development server:

bash
Copy
Edit
npm start
The application will be accessible at http://localhost:3000.

🔒 Environment Variables
Ensure the following environment variables are set in your .env file within the Backend directory:

PORT: Port number for the server (e.g., 5000)

MONGO_URI: MongoDB connection string

JWT_SECRET: Secret key for JWT authentication

📌 Future Enhancements
Exporting reports as PDF or CSV

Budget planning and alerts

Multi-user support with shared expenses

Integration with third-party financial APIs

🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

📄 License
This project is open-source and available under the MIT License.

📬 Contact
Created by Anirav, Pranav, Prince & Manish. Feel free to reach out for any queries or collaborations.
