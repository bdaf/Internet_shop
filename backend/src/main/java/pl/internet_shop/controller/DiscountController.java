package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Discount;
import pl.internet_shop.service.DiscountService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DiscountController {

    @Autowired
    private DiscountService discountService;

    @GetMapping("/api/discounts")
    public List<Discount> fetchAllDiscounts(){
        return discountService.fetchAllDiscounts();
    }

    @PostMapping("/api/discounts/save/{id}")
    public Category saveDiscount(@RequestBody Discount aDiscount, @PathVariable("id") Long aCategoryId){
        return discountService.saveDiscountByCategoryId(aDiscount, aCategoryId);
    }

    @DeleteMapping("/api/discounts/{id}")
    public String deleteDiscount(@PathVariable("id") Long aDiscountId){
        discountService.deleteDiscountById(aDiscountId);
        return "Discount with ID "+aDiscountId+" has been deleted successfully!";
    }
}
