<h1>💸 Arthly - Expense Tracker App</h1>

<p>Arthly is a full-stack expense tracker application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It empowers users to manage their finances by tracking income and expenses, categorizing transactions, and gaining insights into their spending habits.</p>

<hr/>

<h2>🚀 Features</h2>
<ul>
           <li>User Authentication: Secure login and registration system.</li>
           <li>Transaction Management: Add, edit, and delete income and expense entries.</li>
           <li>Categorization: Organize transactions by customizable categories.</li>
           <li>Dashboard: Visual representations of spending patterns and summaries.</li>
           <li>Responsive Design: Optimized for both desktop and mobile devices.</li>
</ul>

<hr/>

<h2>🛠️ Tech Stack</h2>

<h4>Frontend:</h4>
<ul>
           <li>React.js</li>
           <li>React Router</li>
           <li>Axios</li>
           <li>CSS Modules / Tailwind CSS / Bootstrap (based on your styling preference)</li>
</ul>

<h4>Backend:</h4>
<ul>
           <li>Node.js</li>
           <li>Express.js</li>
           <li>MongoDB with Mongoose</li>
           <li>JSON Web Tokens (JWT) for authentication</li>
</ul>

<hr/>

<h2>📁 Project Structure</h2>
<pre>  Expense-Tracker-App/
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
</pre>

<hr/>

<h2>🧰 Getting Started</h2>
<h3>Prerequisites: </h3>
<ul>
           <li>Node.js and npm installed</li>
           <li>MongoDB instance (local or hosted)</li>
</ul>

<h2>Installation</h2>
<ol>
           <li>
            Clone the repository:
           git clone https://github.com/Ani280205/Expense-Tracker-App.git
           cd Expense-Tracker-App
           </li>
           <li>
            Backend Setup:
           cd Backend
           npm install
           </li>
           <ul>
                      <li>
                      Create a .env file in the Backend directory with the following variables:
                      PORT=5000
                      MONGO_URI=your_mongodb_connection_string
                      JWT_SECRET=your_jwt_secret
                       </li>
                      <li>
                      Start the backend server:
                      npm start
                      </li>
           </ul>
           <li>
           Frontend Setup:
           cd ../Frontend/expense-tracker
           npm install
           </li>
            <ul>
                      <li>
                      Start the frontend development server: 
                      npm run dev
                       </li>
           </ul>
</ol>

<hr/>

<h2>🔒 Environment Variables</h2>

<p>Ensure the following environment variables are set in your .env file within the Backend directory:</p>
<ul>
           <li>PORT: Port number for the server (e.g., 5000)</li>
           <li>MONGO_URI: MongoDB connection string</li>
           <li>JWT_SECRET: Secret key for JWT authentication</li>
</ul>

<hr/>

<h2>📌 Future Enhancements</h2>
<ul>
           <li>Exporting reports as PDF or CSV</li>
           <li>Budget planning and alerts</li>
           <li>Multi-user support with shared expenses</li>
           <li>Integration with third-party financial APIs</li>
</ul>

<hr/>

<h2>🤝 Contributing</h2>

<p>Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.</p>

<hr/>

<h2>📄 License</h2>

<p>This project is open-source and available under the MIT License.</p>

<hr/>

<h2>📬 Contact</h2>

<p>Created by Ani280205, Pranav, Prince & Manish. Feel free to reach out for any queries or collaborations.</p>

<hr/>







