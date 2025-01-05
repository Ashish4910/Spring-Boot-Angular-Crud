package com.Spring_Backend_Crud.Spring.Backend.Crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Spring_Backend_Crud.Spring.Backend.Crud.Model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
