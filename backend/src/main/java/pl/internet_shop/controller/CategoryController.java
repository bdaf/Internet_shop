package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.internet_shop.entity.Category;
import pl.internet_shop.service.CategoryService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/api/categories")
    public List<Category> fetchAllCategories(){
        return categoryService.fetchAllCategories();
    }
}
