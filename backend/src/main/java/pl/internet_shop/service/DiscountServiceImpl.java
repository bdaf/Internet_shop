package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Discount;
import pl.internet_shop.repository.DiscountRepository;

import java.util.List;

@Service
public class DiscountServiceImpl implements DiscountService{

    @Autowired
    private DiscountRepository discountRepository;

    @Autowired
    private CategoryService categoryService;

    @Override
    public List<Discount> fetchAllDiscounts() {
        return discountRepository.findAll();
    }

    @Override
    public Category saveDiscountByCategoryId(Discount aDiscount, Long aCategoryId) {
        Category categoryToAddDiscountIn = categoryService.findById(aCategoryId);

        if(aDiscount.getPercent() >= 1) aDiscount.setPercent(0.99F);
        if(aDiscount.getPercent() <= 0) aDiscount.setPercent(0.01F);

        categoryToAddDiscountIn.addDiscount(discountRepository.save(aDiscount));

        return categoryService.saveCategory(categoryToAddDiscountIn);
    }

    @Override
    public void deleteDiscountById(Long aDiscountId) {
        discountRepository.deleteDiscountRecordsFromMappingManyToManyTable(aDiscountId);
        discountRepository.deleteById(aDiscountId);
    }
}
