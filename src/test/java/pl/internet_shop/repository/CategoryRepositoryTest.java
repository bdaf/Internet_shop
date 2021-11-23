package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Discount;

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

        Discount discount1 = Discount.builder()
                .fromDate(Date.valueOf("2020-01-19")).toDate(Date.valueOf("2020-11-19"))
                .percent(0.1F).build();

        Discount discount2 = Discount.builder()
                .fromDate(Date.valueOf("2020-02-19")).toDate(Date.valueOf("2020-12-19"))
                .percent(0.2F).build();

        Category category = Category.builder().name("TestCategory").build();

        category.addDiscount(discount1);
        category.addDiscount(discount2);

        categoryRepository.save(category);

        assertEquals(amountOfDiscounts+1,categoryRepository.count());
        assertEquals(amountOfCategories+2,discountRepository.count());

        List<Category> categories = categoryRepository.findAll();
        System.out.println("categories = " + categories);

        List<Discount> discounts = discountRepository.findAll();
        System.out.println("discounts = " + discounts);

        categoryRepository.delete(category);

        assertEquals(amountOfCategories, categoryRepository.count());
        assertEquals(amountOfDiscounts, discountRepository.count());
    }
}