package com.SpringBoot.main.service;

import com.SpringBoot.main.model.Product;

import java.time.LocalDate;
import java.util.List;


public interface ProductService {

    Product saveProduct(Product product);

    List<Product> getAllProducts();

    Product getProductById(int id);

    void deleteProduct(int id);

    List<Product> getByMonth(int month, int year);

    List<Product> getByDateRange(LocalDate start, LocalDate end);

    List<Product> getByCategory(String category);
}