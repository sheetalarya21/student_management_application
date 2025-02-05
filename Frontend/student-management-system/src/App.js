import React, { useState, useEffect } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import axios from "axios";
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [formVisible, setFormVisible] = useState(false); // Track form visibility

  // Fetch students from the backend on initial load
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/students")
      .then((response) => setStudents(response.data))
      .catch(() => alert("Failed to load students"));
  }, []);

  // Handle the addition of a new student
  const handleAddStudent = () => {
    setStudentToEdit(null); // No student to edit
    setFormVisible(true); // Show the form
  };

  const handleEditStudent = (student) => {
    setStudentToEdit(student); // Set student to edit
    setFormVisible(true); // Show the form
  };

  return (
    <div>
      <h1>Student Management System</h1>

      {/* Button to trigger Add Student form */}
      <button
        onClick={handleAddStudent}
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Add New Student
      </button>

      {/* Display the Student Form only if formVisible is true */}
      {formVisible && (
        <StudentForm 
          studentToEdit={studentToEdit} 
          setStudentToEdit={setStudentToEdit} 
          setStudents={setStudents} 
          setFormVisible={setFormVisible}  // Pass the setter to hide the form after submission
        />
      )}

      {/* Display the list of students */}
      <StudentList 
        students={students} 
        setStudentToEdit={handleEditStudent} 
        setStudents={setStudents} 
      />
    </div>
  );
}

export default App;
