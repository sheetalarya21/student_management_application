package com.student.studentapplication.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
    public class WebConfig implements WebMvcConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            // Allow requests from your frontend (React) running on localhost:3000
            registry.addMapping("/api/**").allowedOrigins("http://localhost:3000");
        }
    }


