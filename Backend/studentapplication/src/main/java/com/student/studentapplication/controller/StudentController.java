package com.student.studentapplication.controller;

import com.student.studentapplication.model.Student;
import com.student.studentapplication.repository.StudentRepository;
import com.student.studentapplication.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    // Get all students
    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // Get student by name
    @GetMapping("/students/search")
    public List<Student> searchStudents(@RequestParam String name) {
        return studentRepository.findByNameContaining(name);
    }



    @PostMapping("/students")
    public ResponseEntity<String> addStudent(@RequestBody Student student) {
        // Log the student data on the backend
        System.out.println("Received student data: " + student.toString());

        // Check if student already exists
        if (studentRepository.existsByName(student.getName())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Student already exists.");
        }

        studentRepository.save(student);
        return ResponseEntity.status(HttpStatus.CREATED).body("Student added successfully.");
    }


    // Update an existing student
    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student updatedStudent) {
        Optional<Student> studentOpt = studentRepository.findById(id);
        if (studentOpt.isPresent()) {
            Student student = studentOpt.get();
            student.setName(updatedStudent.getName());
            student.setAge(updatedStudent.getAge());
            student.setStudentClass(updatedStudent.getStudentClass());
            student.setPhoneNumber(updatedStudent.getPhoneNumber());
            studentRepository.save(student);
            return ResponseEntity.status(HttpStatus.OK).body(student); // Return updated student
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // Better response handling
        }
    }

    // Delete a student
    @DeleteMapping("/students/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Long id) {
        if (!studentRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found.");
        }

        studentRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Student deleted successfully.");
    }
}
