package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.internet_shop.entity.Product;
import pl.internet_shop.service.CategoryService;
import pl.internet_shop.service.ProducerService;
import pl.internet_shop.service.ProductService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MainPageController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ProducerService producerService;



    @PostMapping("/api/saveProduct")
    public Product saveProduct(@RequestBody Product aProduct){
        aProduct.setCategory(categoryService.saveCategoryOfProduct(aProduct));
        aProduct.setProducer(producerService.saveProducerOfProduct(aProduct));
        return productService.saveProduct(aProduct);
    }

    @GetMapping("/api")
    public List<Product> fetchAllProducts(){
        return productService.fetchAllProducts();
    }

}