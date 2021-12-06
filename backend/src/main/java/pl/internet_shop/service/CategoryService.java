package pl.internet_shop.service;

import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Product;

import java.util.List;

public interface CategoryService {

    Category saveCategory(Category aCategory);

    Category addCategoryOfProduct(Product aProduct);

    Category findCategoryByName(String aName);

    List<Category> fetchAllCategories();

    Category addCategory(Category aCategory);

    void deleteCategoryById(Long aCategoryId);

    Category updateCategoryById(Category aCategory, Long aCategoryId);

    Category findById(Long aCategoryId);
}
