package com.student.studentapplication.repository;

import com.student.studentapplication.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface StudentRepository extends JpaRepository<Student, Long> {
    boolean existsByName(String name);

    // Custom query method to search students by name (partial match)
    List<Student> findByNameContaining(String name);
}
