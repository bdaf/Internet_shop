package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Product;
import pl.internet_shop.repository.CategoryRepository;

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

}
