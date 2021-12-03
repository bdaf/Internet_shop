package pl.internet_shop.service;

import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Product;

import java.util.List;

public interface CategoryService {

    Category saveCategoryOfProduct(Product aProduct);

    Category findCategoryByName(String aName);

    List<Category> fetchAllCategories();

    Category saveCategory(Category aCategory);

    void deleteCategoryById(Long aCategoryId);

    Category updateCategoryById(Category aCategory, Long aCategoryId);

    Category findById(Long aCategoryId);
}
