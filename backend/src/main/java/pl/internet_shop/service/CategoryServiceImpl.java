package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Product;
import pl.internet_shop.repository.CategoryRepository;

import java.util.List;
import java.util.Objects;

import static pl.internet_shop.entity.Category.OTHER;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category saveCategoryOfProduct(Product aProduct){
        String nameOfCategory = OTHER;

        // checking if category is added, if not, we add it default "OTHER"
        if(aProduct.getCategory() != null){
            nameOfCategory = aProduct.getCategory().getName();
        }

        // add category to DB if another with the same name isn't there
        Category category = categoryRepository.findCategoryByName(nameOfCategory);
        if(category == null){
            category = Category.builder().name(nameOfCategory).build();
        }

        return categoryRepository.save(category);
    }


    public Category findCategoryByName(String aName){
        return categoryRepository.findCategoryByName(aName);
    }

    @Override
    public List<Category> fetchAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category saveCategory(Category aCategory) {
        categoryRepository.save(aCategory);
        return aCategory;
    }

    // throws exception if category is linked to some product
    @Override
    public void deleteCategoryById(Long aCategoryId) {
        Category categoryToDelete = categoryRepository.findById(aCategoryId).get();
        categoryRepository.delete(categoryToDelete);
    }

    // update name of category
    @Override
    public Category updateCategoryById(Category aCategory, Long aCategoryId) {
        Category resultCategory = categoryRepository.findById(aCategoryId).get();

        if(Objects.nonNull(aCategory.getName()) && !aCategory.getName().equalsIgnoreCase("")){
            resultCategory.setName(aCategory.getName());
        }

        return categoryRepository.save(resultCategory);
    }

    @Override
    public Category findById(Long aCategoryId) {
        return categoryRepository.findById(aCategoryId).get();
    }

}
