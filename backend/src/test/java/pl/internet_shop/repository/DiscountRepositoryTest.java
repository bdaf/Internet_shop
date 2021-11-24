package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Discount;

import java.sql.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DiscountRepositoryTest {

    @Autowired
    private DiscountRepository discountRepository;

    @Test
    void saveDiscountThenPrintAllThenDeleteIt(){
        Long amountOfDiscounts = discountRepository.count();

        Discount discount = DiscountRepository.getInstanceForTests();

        discountRepository.save(discount);
        assertEquals(amountOfDiscounts+1, discountRepository.count());

        List<Discount> discounts = discountRepository.findAll();
        System.out.println("discounts = " + discounts);

        discountRepository.delete(discount);
        assertEquals(amountOfDiscounts, discountRepository.count());
    }
}