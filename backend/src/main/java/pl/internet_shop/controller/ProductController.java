package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.internet_shop.entity.Product;
import pl.internet_shop.service.ProductService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/api/products")
    public List<Product> fetchAllProducts(){
        return productService.fetchAllProducts();
    }

    @GetMapping("/api/products/gallery")
    public List<Product> fetchAllProductsWithGalleries(){
        return productService.fetchAllProductsWithGalleries();
    }

    @GetMapping("/api/products/{id}")
    public Product fetchProduct(@PathVariable("id") Long aProductId){
        return productService.fetchProductById(aProductId);
    }

    @PostMapping("/api/products/save")
    public Product saveProduct(@RequestBody Product aProduct){
        return productService.addProductAndSave(aProduct);
    }

    @DeleteMapping("/api/products/{id}")
    public String deleteProduct(@PathVariable("id") Long aProductId){
        productService.deleteProductById(aProductId);
        return "Product with ID "+aProductId+" has been deleted successfully!";
    }

    @PutMapping("/api/products/{id}")
    public Product updateProduct(@PathVariable("id") Long aProductId, @RequestBody Product aProduct){
        return productService.updateProductById(aProductId,aProduct);
    }

}