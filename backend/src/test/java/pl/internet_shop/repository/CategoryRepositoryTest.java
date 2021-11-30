package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Discount;

import javax.persistence.EntityManager;
import java.sql.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CategoryRepositoryTest {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    DiscountRepository discountRepository;

    @Test
    void saveCategoryWith2DiscountsThenPrintAllThenDeleteIt(){
        Long amountOfCategories = categoryRepository.count();
        Long amountOfDiscounts = discountRepository.count();

        Category category = CategoryRepository.getInstanceForTests();

        category.addDiscount(DiscountRepository.getInstanceForTests());
        category.addDiscount(DiscountRepository.getInstanceForTests());

        categoryRepository.save(category);

        assertEquals(amountOfDiscounts+1,categoryRepository.count());
        assertEquals(amountOfCategories+2,discountRepository.count());

        List<Discount> discounts = discountRepository.findAll();
        System.out.println("discounts = " + discounts);

        List<Category> categories = categoryRepository.findAll();
        for (int i = 0; i < categories.size(); i++) {
            categories.get(i).getDiscounts().size();
            System.out.println("i = " + categories.get(i).getDiscounts());
        }
        System.out.println("categories = " + categories);


        categoryRepository.delete(category);

        assertEquals(amountOfCategories, categoryRepository.count());
        assertEquals(amountOfDiscounts, discountRepository.count());
    }
}