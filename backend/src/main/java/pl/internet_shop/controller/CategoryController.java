package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Product;
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

    @PostMapping("/api/categories/save")
    public void saveCategory(@RequestBody Category aCategory){
        categoryService.saveCategory(aCategory);
    }

    @DeleteMapping("/api/categories/{id}")
    public String deleteCategory(@PathVariable("id") Long aCategoryId){
        categoryService.deleteCategoryById(aCategoryId);
        return "Category with ID "+aCategoryId+" has been deleted successfully!";
    }

    @PutMapping("/api/categories/{id}")
    public Category updateCategory(@PathVariable("id") Long aCategoryId, @RequestBody Category aCategory){
        return categoryService.updateCategoryById(aCategory,aCategoryId);
    }

}
