package com.SpringBoot.main.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.SpringBoot.main.model.Product;
import com.SpringBoot.main.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

	@Autowired
	private ProductService p;
	
	@PostMapping
	public Product saveProduct(@RequestBody Product pr) {
		return p.saveProduct(pr);
		
	}
	@GetMapping
	public List<Product> getAllProducts(){
		return p.getAllProducts();
	}
	
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable int id) {
		return p.getProductById(id);
		
	}

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        p.deleteProduct(id);
        return "Deleted Successfully";
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable int id,
                          @RequestBody Product product) {
        product.setId(id);
        return p.saveProduct(product);
    }

    @GetMapping("/month")
    public List<Product> getByMonth(@RequestParam int month,
                                    @RequestParam int year) {
        return p.getByMonth(month, year);
    }

    @GetMapping("/range")
    public List<Product> getByRange(@RequestParam String start,
                                    @RequestParam String end) {
        return p.getByDateRange(
                LocalDate.parse(start),
                LocalDate.parse(end)
        );
    }

    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable String category) {
        return p.getByCategory(category);
    }
}

