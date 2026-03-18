package com.SpringBoot.main.service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringBoot.main.model.Product;
import com.SpringBoot.main.repository.ProductRepository;
@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository pr;
	@Override
	public Product saveProduct(Product product) {
		return pr.save(product);
	}

	@Override
	public List<Product> getAllProducts() {
		return pr.findAll();
	}

	@Override
	public Product getProductById(int id) {
		return pr.findById(id).orElse(null);
	}

	@Override
	public void deleteProduct(int id) {
		pr.deleteById(id);
	}

	@Override
	public List<Product> getByMonth(int month, int year) {

	    YearMonth yearMonth = YearMonth.of(year, month);

	    LocalDate startDate = yearMonth.atDay(1);
	    LocalDate endDate = yearMonth.atEndOfMonth();

	    return pr.findByPrDateBetween(startDate, endDate);
	}
	@Override
	public List<Product> getByDateRange(LocalDate start, LocalDate end) {
	    return pr.findByPrDateBetween(start, end);
	}

	@Override
	public List<Product> getByCategory(String category) {
	    return pr.findByCategory(category);
	}
}
