package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Discount;

public interface DiscountRepository extends JpaRepository<Discount,Long> {
}
