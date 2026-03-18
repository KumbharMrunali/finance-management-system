package com.SpringBoot.main.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringBoot.main.model.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {

	List<Product> findByPrDateBetween(LocalDate startDate, LocalDate endDate);

	List<Product> findByCategory(String category);

}
