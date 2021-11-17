package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
