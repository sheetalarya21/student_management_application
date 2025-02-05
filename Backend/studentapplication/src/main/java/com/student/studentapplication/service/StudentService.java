package com.student.studentapplication.service;

import com.student.studentapplication.model.Student;
import com.student.studentapplication.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;



    @Service
    public class StudentService {

        @Autowired
        private StudentRepository studentRepository;

        // Add a new student
        public String addStudent(Student student) {
            // Check if the student already exists
            if (studentRepository.existsByName(student.getName())) {
                return "Duplicate student name found.";
            }

            // Save the student
            studentRepository.save(student);
            return "Student added successfully.";
        }

        // Update an existing student
        public String updateStudent(Long id, Student student) {
            if (!studentRepository.existsById(id)) {
                return "Student not found.";
            }

            student.setId(id);
            studentRepository.save(student);
            return "Student updated successfully.";
        }

        // Delete a student
        public String deleteStudent(Long id) {
            if (!studentRepository.existsById(id)) {
                return "Student not found.";
            }

            studentRepository.deleteById(id);
            return "Student deleted successfully.";
        }

        // Get all students
        public List<Student> getAllStudents() {
            return studentRepository.findAll();
        }

        // Search students by name
        public List<Student> searchStudents(String name) {
            return studentRepository.findByNameContaining(name);
        }
    }
