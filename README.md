# Bookstore Management System

A web-based **Bookstore Management System** designed to allow only authenticated users to access the course folder and the free books are accessible by everyone.To have the knowledge about hooks, props, toast etc. The project is hosted locally at `http://localhost:5173/` for development purposes.

## Features

- **User Authentication**: Users can sign up, log in, and logout.
- **Book Catalog**: Users are having access to story book,music book etc.
- **Dark Theme**:It gives a soothing user interface.
- **Admin Panel**: Admins can manage book inventory, orders, and customers.


## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 16 or higher)
- npm (version 7 or higher)
- A local database (MySQL, PostgreSQL, etc.)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/bookstore.git
    cd bookstore
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory with the following details:

    ```plaintext
    VITE_API_URL=http://localhost:5000    # Backend API URL
    VITE_PORT=5173                        # Frontend development port
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=bookstore_db
    ```

2. Set up your database using your preferred database system (MySQL, PostgreSQL, etc.). Create the necessary tables using the provided SQL scripts or ORM migration tools.

### Running the Application

#### Frontend

1. Start the frontend development server:
    ```bash
    npm run dev
    ```

2. The frontend application will be running on `http://localhost:5173/`.

#### Backend (Optional)

If the project includes a backend server (e.g., for API and database interaction):

1. Navigate to the backend directory and install the backend dependencies:
    ```bash
    cd backend
    pip install -r requirements.txt  # If using Python
    ```

2. Start the backend server:
    ```bash
    flask run  # Flask example
    ```

By default, the backend will be available on `http://localhost:5000/`.

### Building for Production

To build the frontend for production:

```bash
npm run build
```
**Project Structure**
```
.
├── frontend                # Frontend API 
├── README.md               # Documentation
├── .env                    # Environment variables
├── /src                    # Frontend source code
│   ├── /components         # Reusable components (e.g., Navbar,Freebook,Login)
│   ├── /home               # Application pages (e.g., Home, Checkout)
│   ├── /assets             # Custom React.svg ( using React)
│   ├── /context            # API authentication process
│   ├── /Courses            # Shows different books
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── /public                 # Static files (e.g banner,vite)
├── /tailwind               # import theme
├── /vite                   # Define config
├── /backend                # Backend API (if applicable)
│   ├── /model              # Database model
│   ├── /routes             # API routes (e.g., /login, /signup)
│   ├── /controllers        # Business logic for each route
│   └── index.js            #  server file
├── package.json            # Project dependencies and scripts
└── /node_modules           # Node.js dependencies (automatically generated)
```
