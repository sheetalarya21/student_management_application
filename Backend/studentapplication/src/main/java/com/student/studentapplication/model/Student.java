package com.student.studentapplication.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "age", nullable = false)
    private String age;

    @Column(name = "class_name", nullable = false)
    private String class_name;

    @Column(name = "phone_number", nullable = false)
    @NotNull(message = "Phone number cannot be null")
    private String phoneNumber;


    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getStudentClass() {
        return class_name;
    }

    public void setStudentClass(String studentClass) {
        this.class_name = studentClass;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    @Override
    public String toString() {
        return "Student{id=" + id + ", name='" + name + "', age=" + age + ", phoneNumber='" + phoneNumber + "', className='" + class_name + "'}";
    }

}
