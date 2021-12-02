package pl.internet_shop.service;

import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Product;

import java.util.List;

public interface CategoryService {

    Category saveCategoryOfProduct(Product aProduct);

    Category findCategoryByName(String aName);

    List<Category> fetchAllCategories();
}
