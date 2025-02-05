# Student Management Application

## Overview

The **Student Management Application** is a full-stack web application that allows users to manage student records efficiently. This application provides functionalities for adding, displaying, searching, modifying, and removing student records. It follows an **API-first** approach and is built with **Spring Boot** for the backend and **React.js** for the frontend.

The system provides a simple yet powerful way to manage student data and integrates with a database to persist and retrieve information.

## Technologies Used

### Backend:
- **Java** (JDK 17+)
- **Spring Boot** (Version 2.5+)
- **Spring Data JPA** (Hibernate)
- **MySQL** (Database)
- **Spring Security** (optional, for authentication)
- **Maven** (Build Tool)

### Frontend:
- **React.js** (Version 17+)
- **Axios** (For API calls)
- **CSS** (For styling)
- **React Hooks** (For state management)

### Development Tools:
- **Spring Tool Suite** (IDE for backend)
- **VS Code** (IDE for frontend)
- **Git** (Version control)
- **GitHub** (Repository hosting)
- **Postman** (For testing APIs)

## Features

- **Add Student**: Allows adding new student records with basic information such as name, age, roll number, etc.
- **Display Student Records**: Displays a list of all students stored in the database.
- **Search Students**: Allows searching students based on attributes like name or roll number.
- **Modify Student Records**: Allows updating existing student records.
- **Delete Student**: Allows deleting student records from the system.
- **Responsive UI**: The frontend is designed to be simple, responsive, and intuitive.

## Folder Structure

### Backend:

Backend/ ├── src/ │ ├── main/ │ │ ├── java/ │ │ │ └── com/student/studentapplication/ │ │ │ ├── controller/ │ │ │ ├── model/ │ │ │ ├── repository/ │ │ │ └── service/ │ │ ├── resources/ │ │ │ └── application.properties ├── pom.xml




### Frontend:

Frontend/ ├── public/ ├── src/ │ ├── components/ │ │ ├── StudentForm.js │ │ └── StudentList.js │ ├── App.js │ └── index.js ├── package.json └── README.md


## How to Set Up the Project Locally

### Backend Setup (Spring Boot)

1. **Clone the repository:**
   Clone the repository to your local machine.

   ```bash
     git clone https://github.com/sheetalarya21/student-management-application.git
2. **Navigate to the Backend directory:** Go to the Backend folder in your terminal.
cd student-management-application/Backend

3. **Configure the Database:** Set up a MySQL database and update the application.properties file with your database credentials.
Example configuration:

spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

4. **Run the Backend:** Use Maven to run the backend application.
mvn spring-boot:run

**Frontend Setup (React)**
1. **Navigate to the Frontend directory:**
cd student-management-application/Frontend

2.**Install Dependencies:** Run the following command to install all the required dependencies.
npm install

3.**Start the Frontend:** Start the React development server.
npm start
4. **Access the Application:** Open your browser and go to http://localhost:3000 to access the frontend of the application.


**API Endpoints (Backend)**

The backend exposes several RESTful API endpoints to interact with the student data:

**POST** /api/students - Create a new student record.
**GET** /api/students - Retrieve all students.
**GET** /api/students/{id} - Retrieve a student by ID.
**PUT** /api/students/{id} - Update a student record.
**DELETE** /api/students/{id} - Delete a student record.

**Frontend Components**

**StudentForm**: A React component for handling student form submissions (add/update).
**StudentList**: A React component for displaying a list of students.
**App**: The main React component that manages routing and state.

**Running Tests**

To ensure the backend and frontend are working correctly:

**Backend Tests (Spring Boot)**
You can run unit tests using Maven:
mvn test

**Frontend Tests (React)**
To run tests for React components:

npm test

**Contributing**

Contributions are welcome! If you find any issues or want to add new features, feel free to fork the repository and create a pull request.

