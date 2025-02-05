import React, { useState, useEffect } from "react";
import axios from "axios";

export function StudentList({ setStudentToEdit }) {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    } catch (error) {
      setError("Failed to load students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      axios
        .get(`http://localhost:8080/api/students/search?name=${searchQuery}`)
        .then((response) => {
          setStudents(response.data);
        })
        .catch(() => {
          alert("Error searching students");
        });
    } else {
      fetchStudents();
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    fetchStudents();
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);

      axios
        .delete(`http://localhost:8080/api/students/${id}`)
        .then(() => {
          alert("Student deleted successfully!");
          fetchStudents();
        })
        .catch(() => {
          alert("Failed to delete student");
          fetchStudents();
        });
    }
  };

  return (
    <div className="list-container">
      {error && <p className="error">{error}</p>}

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClearSearch}>Clear</button>
      </div>

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Class</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.studentClass}</td>
                  <td>{student.phoneNumber}</td>
                  <td>
                    <button onClick={() => setStudentToEdit(student)}style={{ marginRight: "10px" }}>Edit</button>
                    <button 
                    onClick={() => deleteStudent(student.id)} 
                    style={{ 
                        backgroundColor: "#4CAF50", // Default button color
                        color: "white", 
                        cursor: "pointer",
                        border: "none",
                    }} 
                    onMouseOver={(e) => e.target.style.backgroundColor = "red"}  // Change to red on hover
                    onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"} // Change back to default color when mouse out
                    >
                    Delete
                 </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentList;
