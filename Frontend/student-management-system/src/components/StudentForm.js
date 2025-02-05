import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentForm = ({ setStudentToEdit, studentToEdit, setStudents, setFormVisible }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setAge(studentToEdit.age);
      setStudentClass(studentToEdit.studentClass);
      setPhone(studentToEdit.phoneNumber);
    }
  }, [studentToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!name || !age || !studentClass || !phoneNumber) {
      setErrorMessage("All fields are required.");
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (age <= 0 || age > 100) {
      setErrorMessage("Please enter a valid age.");
      return;
    }

    if (studentClass < 1 || studentClass > 12) {
      setErrorMessage("Class must be between 1 and 12.");
      return;
    }

    const studentData = { name, age, studentClass, phoneNumber };

    if (studentToEdit) {
      axios
        .put(`http://localhost:8080/api/students/${studentToEdit.id}`, studentData)
        .then(() => {
          alert("Student updated successfully!");
          refreshPage();
          setStudentToEdit(null);
          setStudents((prevStudents) =>
            prevStudents.map((student) =>
              student.id === studentToEdit.id ? { ...student, ...studentData } : student
            )
          );
          setFormVisible(false);  // Hide the form after submission
        })
        .catch((err) => {
          setErrorMessage("Error updating student.");
          console.error(err);
        });
    } else {
      axios
        .post("http://localhost:8080/api/students", studentData)
        .then((response) => {
          alert("Student added successfully!");
          refreshPage();
          setStudents((prevStudents) => [...prevStudents, response.data]);
          setName("");
          setAge("");
          setStudentClass("");
          setPhone("");
          setErrorMessage("");
          setFormVisible(false);  // Hide the form after submission
        })
        .catch((err) => {
          setErrorMessage("Error adding student.");
          console.error(err);
        });
    }
  };

  // Refresh page function
  const refreshPage = () => {
    window.location.reload(); // Reloads the page
  };

  return (
    <div className="form-container">
      <h2>{studentToEdit ? "Update Student" : "Add New Student"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-field">
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              pattern="[A-Za-z\s]+" // Only letters and spaces
              title="Name must contain only letters and spaces"
              required
            />
          </div>
          <div className="input-field">
            <label>Age: </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="1"
              max="100"
              required
            />
          </div>
          <div className="input-field">
            <label>Class: </label>
            <input
              type="number"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              min="1"
              max="12"
              required
            />
          </div>
          <div className="input-field">
            <label>Phone: </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
              pattern="\d{10}"
              title="Phone number must be 10 digits"
              required
            />
          </div>
        </div>
        <button type="submit">{studentToEdit ? "Update" : "Add Student"}</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default StudentForm;
