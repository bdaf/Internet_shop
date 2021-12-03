package pl.internet_shop.service;

import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Discount;

import java.util.List;

public interface DiscountService {

    List<Discount> fetchAllDiscounts();

    Category saveDiscountByCategoryId(Discount aDiscount, Long aCategoryId);

    void deleteDiscountById(Long aDiscountId);
}
