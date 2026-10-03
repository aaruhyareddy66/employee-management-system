package com.example.backend.service;

import com.example.backend.entity.Employee;
import com.example.backend.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository repo;

    public EmployeeService(EmployeeRepository repo) {
        this.repo = repo;
    }

    public List<Employee> getAll() {
        return repo.findAll();
    }

    public Employee getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }

    public Employee save(Employee e) {
        return repo.save(e);
    }

    public Employee update(Long id, Employee e) {
        Employee existing = getById(id);
        existing.setName(e.getName());
        existing.setEmail(e.getEmail());
        existing.setDepartment(e.getDepartment());
        existing.setSalary(e.getSalary());
        return repo.save(existing);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}