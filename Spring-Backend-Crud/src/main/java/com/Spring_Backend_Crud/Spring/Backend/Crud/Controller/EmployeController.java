package com.Spring_Backend_Crud.Spring.Backend.Crud.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Spring_Backend_Crud.Spring.Backend.Crud.Model.Employee;
import com.Spring_Backend_Crud.Spring.Backend.Crud.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/vi")
public class EmployeController {	

	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping("/employee")
	public List<Employee> getEmployee() {
		System.out.println("dfghdfgsd");
		return employeeRepository.findAll();
	}

}
